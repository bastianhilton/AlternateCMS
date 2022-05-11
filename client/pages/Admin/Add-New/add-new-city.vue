<template>
    <div>
        <FormulateForm method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="cityAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addCity" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">City Name</td>
                        <td><FormulateInput id="cityName" v-model="name" type="cityName" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><FormulateInput id="cityName" v-model="state" type="cityName" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country</td>
                        <td><FormulateInput id="cityName" v-model="country" type="cityName" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Postal Code</td>
                        <td><FormulateInput id="cityName" v-model="postalCode" type="cityName" required /></td>
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
  id="tagDesc" v-model="description" type="textarea" name="tagDesc" cols="80" rows="10" />
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
import { city } from "~/apollo/queries/shop/cities";

const ADD_CITIES = gql`
    mutation ($name:String!,$state:String,$country:String,$postalCode:String,$description:String){
    insert_cities(objects: {name: $name, state: $state, country: $country, postalCode: $postalCode, description: $description}) {
        affected_rows
        returning {
            name
            state
            country
            postalCode
            description
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        state: " ",
        country: " ",
        postalCode: " ",
        description: " ",
      }
  }, 
   
  methods: {
      async addCity() {
            const name = this.name;
            const state = this.state;
            const country = this.country;
            const postalCode = this.postalCode;
            const description = this.description;
            await this.$apollo.mutate({
                mutation: ADD_CITIES,
                variables: {
                    name,
                    state,
                    country,
                    postalCode,
                    description,
                 },
        update: (cache, { data: { insertCities }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCity = insertCities.returning;
                            console.log(insertedCity)
                            cache.writeQuery({
                                query: city
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/cities'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.state = ' ';
                this.country = ' ';
                this.postalCode = ' ';
                this.description = ' ';
            },
        },
    head: {
        title: 'Add New City'
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