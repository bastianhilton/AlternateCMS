
<template>
    <div>
        <FormulateForm method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table table">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="attributesAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addAttribute" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Attribute Name</td>
                        <td><FormulateInput id="attributesLabel" v-model="default_label" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Attribute Code</td>
                        <td><FormulateInput id="attributesCode" v-model="attribute_code" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Value</td>
                        <td><FormulateInput id="attributesValue" v-model="default_value" type="text" required /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { attributes } from "~/apollo/queries/shop/attributes";

const ADD_ATTRIBUTES = gql`
    mutation ($attribute_code:String!,$default_label:String!,$default_value:String!){
    insert_product_attribute(objects: {attribute_code: $attribute_code,default_label: $default_label,default_value: $default_value}) {
        affected_rows
        returning {
            attribute_code
            default_label
            default_value
    }
  }
}`;

export default {
    data() {
    return {
        attribute_code: " ",
        default_label: " ",
        default_value: " ",
      }
  }, 
   /* eslint-disable camelcase */
  methods: {
      async addAttribute() {
            const attribute_code = this.attribute_code;
            const default_label = this.default_label;
            const default_value = this.default_value;
        
            await this.$apollo.mutate({
                mutation: ADD_ATTRIBUTES,
                variables: {
                    attribute_code,
                    default_label,
                    default_value,
                 },
        update: (cache, { data: { insertAttributes }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedAttribute = insertAttributes.returning;
                            console.log(insertedAttribute)
                            cache.writeQuery({
                                query: attributes
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/attributes'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
            },
        },
    head: {
        title: 'Add New Attribute'
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

.form-switch .form-check-input:checked[type=checkbox]:after, .form-switch .form-check-input:after {
    margin-top: -7px;
}
</style>