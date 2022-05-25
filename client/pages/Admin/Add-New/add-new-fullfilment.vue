<template>
  <div>
    <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="fullfillmentAddOptions">
                <li><a href="/admin/add-new/add-new-company">
                    <FormulateInput type="button" label="Add Attribute" /></a></li>
                <li>
                  <FormulateInput type="submit" @click="addFullfillment" label="Save" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Stock</td>
              <td>
                <FormulateInput v-model="value" :options="{first: 'Private Stock', second: 'Public Stock'}" type="checkbox"
  label="If private, warehouse won't be shown. If public, warehouse will be shown" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Company Name</td>
              <td>
                <FormulateInput v-model="company" name="fullfillmentCompanyName" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Warehouse Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Phone Number</td>
              <td>
                <FormulateInput v-model="phone" type="text" placeholder="#" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Shipping Zones</td>
              <td>
                <FormulateInput v-model="shipping_zones" name="fullfillmentShippingZones" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Address</td>
              <td>
                <FormulateInput v-model="address" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Address Line 2</td>
              <td>
                <FormulateInput v-model="address_two" type="text" name="addressTwo" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">City</td>
              <td>
                <FormulateInput v-model="city" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">State</td>
              <td>
                <FormulateInput v-model="state" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country Area</td>
              <td>
                <FormulateInput v-model="country_area" name="fullfillmentCountryArea" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country</td>
              <td>
                <FormulateInput v-model="country" name="fullfillmentCountry" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Zipcode</td>
              <td>
                <FormulateInput v-model="zipcode" name="fullfillmentZipcode" type="text" />
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
    fullfillments
  } from "~/apollo/queries/shop/fullfillment";
  import country from "~/apollo/queries/shop/countries"
  // import countries from "~/apollo/queries/shop/countries"
  // import companys from "~/apollo/queries/shop/companys"

  const ADD_PRODUCTS = gql `
    mutation ($name: String!,$company: String!,$phone: String!,$address: String!,$country_area: String!,$fullfillment: String!,$shipping_zones: String!,$address_two: String!,$state: String!,$zipcode: String!,$country: String!,$value: String!,$city: String){
    insert_fullfillments(objects: {name: $name,company: $company,phone: $phone,address: $address,country_area: $country_area,zipcode: $zipcode,country: $country,fullfillment: $fullfillment,shipping_zones: $shipping_zones,address_two: $address_two,state: $state,country: $country,city: $city,value: $value}) {
        affected_rows
        returning {
            name
            company
            phone
            address
            salable_quantity
            country_area
            zipcode
            country
            websites
            fullfillment
            shipping_zones
            address_two
            state
            country
            size
            city
            value
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
        company: " ",
        phone: " ",
        address: " ",
        country_area: " ",
        websites: " ",
        fullfillment: " ",
        shipping_zones: " ",
        zipcode: " ",
        address_two: " ",
        state: " ",
        size: " ",
        city: " ",
        value: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Warehouse'
    },

    methods: {
      async addFullfillment({ target }) {
        const name = this.name;
        const company = this.company;
        const phone = this.phone;
        const address = this.address;
        // eslint-disable-next-line camelcase
        const country_area = this.country_area;
        const zipcode = this.zipcode;
        const country = this.country;
        const fullfillment = this.fullfillment;
        // eslint-disable-next-line camelcase
        const shipping_zones = this.shipping_zones;
        // eslint-disable-next-line camelcase
        const address_two = this.address_two;
        const state = this.state;
        const city = this.city;
        const value = this.value;
        
        await this.$apollo.mutate({
          mutation: ADD_PRODUCTS,
          variables: {
            name,
            company,
            phone,
            address,
            country_area,
            zipcode,
            country,
            fullfillment,
            shipping_zones,
            address_two,
            state,
            city,
            value,
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
                query: fullfillments
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/fullfillments'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.company = ' ';
        this.phone = ' ';
        this.address = ' ';
        this.country_area = ' ';
        this.zipcode = ' ';
        this.country = ' ';
        this.fullfillment = ' ';
        this.shipping_zones = ' ';
        this.address_two = ' ';
        this.state = ' ';
        this.country = ' ';
        this.city = ' ';
        this.value = ' ';
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
          companys: {
          prefetch: true,
          query: companys
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
