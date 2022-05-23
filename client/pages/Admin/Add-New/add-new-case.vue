<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data"  @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="caseAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addCase" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><FormulateInput v-model="state" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Type</td>
                        <td><FormulateInput v-model="type" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Subject</td>
                        <td><FormulateInput v-model="subject" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput v-model="description" type="textarea"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Resolution</td>
                        <td><FormulateInput v-model="resolution" type="textarea"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><FormulateInput v-model="assigned_to" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Priority</td>
                        <td><FormulateInput v-model="priority" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Status</td>
                        <td><FormulateInput v-model="status" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Account Name</td>
                        <td><FormulateInput v-model="account_name" type="text"  /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
/* eslint-disable camelcase */
import { cases } from "~/apollo/queries/reports/cases";

const ADD_CASES = gql`
    mutation ($status:String!,$state:String,$assigned_to:String,$description:String,$resolution:String!,$subject:String!,$type:String!,$priority:String!,$account_name:String){
    insert_cases(objects: {status: $status, state: $state, assigned_to: $assigned_to, description: $description, resolution: $resolution, subject: $subject, type: $type, priority: $priority}) {
        affected_rows
        returning {
            description
            assigned_to
            account_name
            priority
            resolution
            state
            status
            subject
            type
    }
  }
}`;

export default {
    data() {
    return {
        assigned_to: [],
        status: " ",
        state: " ",
        description: " ",
        resolution: " ",
        account_name: " ",
        type: " ",
        priority: " ",
        subject: " ",
      }
  },
  methods: {
      async addCase() {
            const status = this.status;
            const description = this.description;
            const state = this.state;
            const assigned_to = this.assigned_to;
            const priority = this.priority;
            const account_name = this.account_name;
            const subject = this.subject;
            const type = this.type;
            const resolution = this.resolution;
            await this.$apollo.mutate({
                mutation: ADD_CASES,
                variables: {
                    description,
                    assigned_to,
                    account_name,
                    priority,
                    resolution,
                    state,
                    status,
                    subject,
                    type,
                },
        update: (cache, { data: { insertCases }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCase = insertCases.returning;
                            console.log(insertedCase)
                            cache.writeQuery({
                                query: cases
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../reports/cases'})
                }).catch(err => console.log(err));
                this.status = ' ';
                this.description = ' ';
                this.state = ' ';
                this.assigned_to = ' ';
                this.priority = ' ';
                this.account_name = ' ';
                this.subject = ' ';
                this.type = ' ';
                this.resolution = ' ';
            },
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Case'
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