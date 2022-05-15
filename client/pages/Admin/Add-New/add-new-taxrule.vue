<template>
    <div>
        <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th scope="col">
                        </th>
                        <th scope="col" class="taxRuleAddOptions">
                            <li><FormulateInput type="submit" @click="addTaxRule" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Tax Rule Name</td>
                        <td><FormulateInput id="taxRuleName" v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Rate</td>
                        <td><FormulateInput id="taxRate" v-model="tax_rate" type="text" required /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
// eslint-disable-next-line camelcase
import { tax_rule } from "~/apollo/queries/shop/taxrule";

const ADD_TAX_RULE = gql`
    mutation ($name:String!,$tax_rate:String){
    insert_tax_rule(objects: {name: $name, tax_rate: $tax_rate}) {
        affected_rows
        returning {
            name
            tax_rate
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        tax_rate: " ",
      }
  },
    head: {
        title: 'Add New TaxRule'
    }, 
   
  methods: {
      async addTaxRule() {
            const name = this.name;
            // eslint-disable-next-line camelcase
            const tax_rate = this.tax_rate;
            await this.$apollo.mutate({
                mutation: ADD_TAX_RULE,
                variables: {
                    name,
                    tax_rate,
                 },
        update: (cache, { data: { insertTaxRules }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedTaxRule = insertTaxRules.returning;
                            console.log(insertedTaxRule)
                            cache.writeQuery({
                                query: tax_rule
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/tax-rule'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.tax_rate = ' ';
            },
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