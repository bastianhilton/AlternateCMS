<template>
    <div>
        <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="OotoAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addOoto" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Login</td>
                        <td><FormulateInput v-model="login" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">WHID</td>
                        <td><FormulateInput v-model="whid" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Start Date</td>
                        <td><FormulateInput v-model="start_date" type="date" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">End Date</td>
                        <td><FormulateInput v-model="end_date" type="date" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput v-model="description" type="textarea" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";

import { ooto } from "~/apollo/queries/system/ooto";

const ADD_OOTO = gql`
    mutation ($login:String!,$description:String!,$whid:String!,$start_date:String!,$end_date:String){
    insert_ooto(objects: {login: $login, description: $description, whid: $whid, start_date: $start_date, end_date: $end_date}) {
        affected_rows
        returning {
            login
            description
            whid
            start_date
            end_date
    }
  }
}`;

export default {
    data() {
    return {
        whid: " ",
        login: " ",
        description: " ",
        start_date: " ",
        end_date: " ",
        
      }
  },
  methods: {
      async addOoto() {
            const login = this.login;
            // eslint-disable-next-line camelcase
            const start_date = this.start_date;
            const description = this.description;
            const whid = this.whid;
            // eslint-disable-next-line camelcase
            const end_date = this.end_date;
            await this.$apollo.mutate({
                mutation: ADD_OOTO,
                variables: {
                    login,
                    description,
                    whid,
                    start_date,
                    end_date,
                },
        update: (cache, { data: { insertOoto }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedOoto = insertOoto.returning;
                            console.log(insertedOoto)
                            cache.writeQuery({
                                query: ooto
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../system/ooto'})
                }).catch(err => console.log(err));
                this.login = ' ';
                this.description = ' ';
                this.whid = ' ';
                this.start_date = ' ';
                this.end_date = ' ';
            },
            
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New OOTO'
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