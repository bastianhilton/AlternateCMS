<template>
    <div>
        <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="segmentAddOptions">
                            <li><FormulateInput type="reset" label="Reset" /></li>
                            <li><FormulateInput type="submit" @click="addSegment" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Segment Name</td>
                        <td><FormulateInput v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput
  type="textarea" id="description" v-model="description" name="description" cols="50" rows="10" label="Add a short Description" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned to Website</td>
                        <td><FormulateInput v-model="website" name="website" type="url" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { segments } from "~/apollo/queries/customers/segments.gql";

const ADD_SEGMENTS = gql`
    mutation ($name:String!,$description:String,$website:String,$status:String,$apply_to:String){
    insert_segments(objects: {name: $name, description: $description, website: $website, status: $status, apply_to: $apply_to}) {
        affected_rows
        returning {
            name
            status
            website
            description
            apply_to
            }
  }
}`;

export default {
    data() {
    return {
        website: " ",
        name: " ",
        description: " ",
        status: " ",
        apply_to: " ",

      }
  },
  methods: {/* eslint-disable camelcase */
      async addSegment() {
            const name = this.name;
            const status = this.status;
            const description = this.description;
            const website = this.website;
            const apply_to = this.apply_to;
            await this.$apollo.mutate({
                mutation: ADD_SEGMENTS,
                variables: {
                    name,
                    description,
                    website,
                    status,
                    apply_to,
                },
        update: (cache, { data: { insertSegments }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedSegment = insertSegments.returning;
                            console.log(insertedSegment)
                            cache.writeQuery({
                                query: segments
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../customers/segments'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.website = ' ';
                this.status = ' ';
                this.apply_to = ' ';
            },
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Segment'
    }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>