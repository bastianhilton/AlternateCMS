<template>
  <div>
    <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="warehouseAddOptions">
                <li>
                  <FormulateInput type="submit" @click="addWarehouse" label="Save" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <FormulateInput v-model="status" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Warehouse Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="description" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Category</td>
              <td>
                <FormulateInput v-model="category" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">City</td>
              <td>
                <FormulateInput v-model="city" type="text" placeholder="#" />
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">State</td>
              <td>
                <FormulateInput v-model="state" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country</td>
              <td>
                <FormulateInput v-model="country" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Postal Code</td>
              <td>
                <FormulateInput v-model="postal" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Products</td>
              <td>
                <FormulateInput v-model="products" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Image</td>
              <td>
                <FormulateInput v-model="image" type="image" label="Select an image for the warehouse" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Public</td>
              <td>
                <FormulateInput v-model="isPublic" type="checkbox" />
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

import {
    warehouses
  } from "~/apollo/queries/shop/warehouses";
  import country from "~/apollo/queries/shop/countries"

  const ADD_WAREHOUSES = gql `
    mutation ($name: String!,$description: String!,$image: String!,$products: String!,$status: String!,$state: String!,$postal: String!,$country: String!,$isPublic: String!,$city: String){
    insert_warehouses(objects: {name: $name,description: $description,image: $image,postal: $postal,country: $country,products: $products,status: $status,state: $state,country: $country,city: $city,isPublic: $isPublic}) {
        affected_rows
        returning {
            name
            description
            image
            postal
            country
            websites
            products
            status
            state
            country
            city
            isPublic
    }
  }
}`;


  export default {
    data() {
      return {
        country: [],
        countries: [],
        thumbnail: " ",
        name: " ",
        description: " ",
        image: " ",
        websites: " ",
        products: [],
        postal: " ",
        status: " ",
        state: " ",
        city: " ",
        isPublic: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Warehouse'
    },

    methods: {
      async addWarehouse({ target }) {
        const name = this.name;
        const description = this.description;
        const image = this.image;
        const postal = this.postal;
        const country = this.country;
        const products = this.products;
        const status = this.status;
        const state = this.state;
        const city = this.city;
        const isPublic = this.isPublic;
        
        await this.$apollo.mutate({
          mutation: ADD_WAREHOUSES,
          variables: {
            name,
            description,
            image,
            postal,
            country,
            products,
            status,
            state,
            city,
            isPublic,
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountries = insertCountries.returning;
              console.log(insertedCategory, insertedCountries)
              cache.writeQuery({
                query: warehouses
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/warehouses'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.description = ' ';
        this.image = ' ';
        this.postal = ' ';
        this.country = ' ';
        this.products = ' ';
        this.status = ' ';
        this.state = ' ';
        this.country = ' ';
        this.city = ' ';
        this.isPublic = ' ';
      },
    },
    apollo: {
      country: {
        prefetch: true,
        query: country
      },
      /* countries: {
          prefetch: true,
          query: countries
          },
          descriptions: {
          prefetch: true,
          query: descriptions
          } */
    }
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
