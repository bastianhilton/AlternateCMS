<template>
    <div>
        <form v-for="channel in channels" :key="channel.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="caseAddOptions">
                            <li><input type="submit" value="Save" @click="addChannel" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Code</td>
                        <td><input v-model="code" type="text" value="Example is FASHION_WEB"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Channel Name</td>
                        <td><input v-model="name" type="text" value="Example is eBay, Fashion Web Store, etc" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Client ID</td>
                        <td><input v-model="client_id" type="password"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Client Secret</td>
                        <td><input v-model="client_secret" type="password"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Channel</td>
                        <td><input v-model="default_zone" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Shipping</td>
                        <td><input v-model="default_shipping" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Language</td>
                        <td><input v-model="default_lang" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Currency</td>
                        <select v-model="currencies" name="template" class="form-category">
                            <option v-for="currencies in currencies" :key="currencies" :value="currencies">{{ currencies.name }}</option>
                        </select>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Include Tax</td>
                        <td><input v-model="include_tax" type="checkbox"  /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable camelcase */
import  gql from 'graphql-tag'
import  channels from '~/graphql/mutations/system/channels'
import  currencies from "~/graphql/queries/system/currencies"

const DELETE_CHANNEL = gql `
  mutation delete_zones($id: Int!){
  delete_zones(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_CHANNEL = gql `
  mutation update_zones($id: Int!){
  update_zones(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Channel'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteChannel(channel){
    await this.$apollo.mutate({
        mutation: DELETE_CHANNEL,
        variables: {
          id: channel.id
        },
        refetchQueries: [
          {
            query: channels
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/system/general-settings'})
            }).catch(err => console.log(err));
    },
    async updateChannel(channel){
    await this.$apollo.mutate({
        mutation: UPDATE_CHANNEL,
        variables: {
          id: channel.id
        },
        refetchQueries: [
          {
            query: channels
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    channels: {
      query: channels,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    currencies: {
        prefetch: true,
        query: currencies
      }
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