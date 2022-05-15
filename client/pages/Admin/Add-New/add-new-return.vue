<template>
    <div>
        <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="returnsAddOptions">
                            <li><FormulateInput type="submit" @click="addReturn" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Returns Name</td>
                        <td>
                            <FormulateInput id="returnsName" v-model="name" type="returnsName" required />
                            <p for="name">Name of the return</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Time limit of validity</td>
                        <td>
                            <FormulateInput id="returnsName" v-model="validity" type="returnsName" required />
                            <p for="validity">How many days after the delivery date does the customer have to return a product?</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Returns prefix</td>
                        <td>
                            <FormulateInput id="returnsName" v-model="return_prefix" type="returnsName" required />
                            <p for="returnsPrefix">Prefix used for returns name (e.g. RE00001).</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { returns } from "~/apollo/queries/sales/returns";

const ADD_RETURNS = gql`
    mutation ($name:String!,$validity:String!,$return_prefix:String){
    insert_returns(objects: {name: $name, validity: $validity, return_prefix: $return_prefix}) {
        affected_rows
        returning {
            name
            validity
            return_prefix
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        validity: " ",
        return_prefix: " ",
      }
  },
    head: {
        title: 'Add New Return'
    }, 
   /* eslint-disable camelcase */
  methods: {
      async addReturn() {
            const name = this.name;
            const validity = this.validity;
            const return_prefix = this.return_prefix;
            await this.$apollo.mutate({
                mutation: ADD_RETURNS,
                variables: {
                    name,
                    validity,
                    return_prefix,
                 },
        update: (cache, { data: { insertReturns }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedReturn = insertReturns.returning;
                            console.log(insertedReturn)
                            cache.writeQuery({
                                query: returns
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../sales/returns'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.validity = ' ';
                this.return_prefix = ' ';
            },
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
    width: 50%;
}

li {
    display: inline-block;
}
</style>