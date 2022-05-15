<template>
    <div>
        <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="countriesAddOptions">
                            <li><FormulateInput type="submit" @click="addCountry" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Country Name</td>
                        <td><FormulateInput id="countriesName" v-model="name" type="countriesName" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country Region</td>
                        <td><FormulateInput id="countriesRegion" v-model="region" type="countriesRegion" required /></td>
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
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <FormulateInput
  type="textarea" id="tagDesc" v-model="description" name="tagDesc" cols="80" rows="10" />
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
import { countries } from "~/apollo/queries/shop/countries";

const ADD_COUNTRIES = gql`
    mutation ($name:String!,$description:String,$image:String,$region:String){
    insert_countries(objects: {name: $name, description: $description, image: $image, region: $region}) {
        affected_rows
        returning {
            name
            description
            image
            region
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        description: " ",
        image: " ",
        region: " ",
      }
  }, 
   
  methods: {
      async addCountry() {
            const name = this.name;
            const description = this.description;
            const image = this.image;
            const region = this.region;
            await this.$apollo.mutate({
                mutation: ADD_COUNTRIES,
                variables: {
                    name,
                    description,
                    image,
                    region
                 },
        update: (cache, { data: { insertCountries }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCountry = insertCountries.returning;
                            console.log(insertedCountry)
                            cache.writeQuery({
                                query: countries
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/countries'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.image = ' ';
                this.region = ' ';
            },
        },
    head: {
        title: 'Add New Country'
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