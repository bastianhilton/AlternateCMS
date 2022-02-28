<template>
    <div>
        <FormulateForm method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table table">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="tagsAddOptions">
                            <li><FormulateInput type="submit" @click="addTag" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Tag Name</td>
                        <td><FormulateInput id="tagsName" v-model="name" type="tagsName" required /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <FormulateInput class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </FormulateInput>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table table-responsive">
                            <table class="table table">
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <FormulateInput
  type="textarea" id="tagDesc" v-model="excerpt" name="tagDesc" cols="80" rows="10" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { tags } from "~/apollo/queries/content/tags";

const ADD_TAGS = gql`
    mutation ($name:String!,$excerpt:String){
    insert_tags(objects: {name: $name, excerpt: $excerpt}) {
        affected_rows
        returning {
            name
            excerpt
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        excerpt: " ",
      }
  }, 
   
  methods: {
      async addTag() {
            const name = this.name;
            const excerpt = this.excerpt;
            await this.$apollo.mutate({
                mutation: ADD_TAGS,
                variables: {
                    name,
                    excerpt,
                 },
        update: (cache, { data: { insertTags }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedTag = insertTags.returning;
                            console.log(insertedTag)
                            cache.writeQuery({
                                query: tags
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../content/tags'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
            },
        },
    head: {
        title: 'Add New Tag'
    },
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