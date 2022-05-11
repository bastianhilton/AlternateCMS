<template>
    <div>
        <FormulateForm method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="shipmentsAddOptions">
                            <li><FormulateInput type="submit" @click="addShipment" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Carrier Name</td>
                        <td><FormulateInput id="shipmentsName" v-model="carrier_name" type="shipmentsName" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Transit Time</td>
                        <td><FormulateInput id="shipmentsTime" v-model="transit_time" type="shipmentsTime" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Speed grade</td>
                        <td><FormulateInput id="shipmentsSpeed" v-model="speed_grade" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tracking URL</td>
                        <td><FormulateInput id="shipmentsTracking" v-model="tracking_url" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Logo</td>
                        <td>
                            <td><FormulateInput type="image" name="headshot" v-model="image" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { shipments } from "~/apollo/queries/sales/shipments";

const ADD_SHIPMENTS = gql`
    mutation ($carrier_name:String!,$transit_time:String!,$image:String!,$tracking_url:String!,$speed_grade:String!,$product:String!){
    insert_shipments(objects: {carrier_name: $carrier_name, transit_time: $transit_time, image: $image, tracking_url: $tracking_url, product: $product, speed_grade: $speed_grade}) {
        affected_rows
        returning {
            carrier_name
            transit_time
            image
            tracking_url
            speed_grade
            product
    }
  }
}`;

export default {
    data() {
    return {
        carrier_name: " ",
        transit_time: " ",
        image: " ",
        tracking_url: " ",
        speed_grade: " ",
        product: " ",
        
      }
  },
    head: {
        title: 'Add New Shipment'
    }, 
   /* eslint-disable camelcase */
  methods: {
      async addShipment() {
            const carrier_name = this.carrier_name;
            const transit_time = this.transit_time;
            const image = this.image;
            const tracking_url = this.tracking_url;
            const speed_grade = this.speed_grade;
            const product = this.product;
            await this.$apollo.mutate({
                mutation: ADD_SHIPMENTS,
                variables: {
                    carrier_name,
                    transit_time,
                    image,
                    tracking_url,
                    speed_grade,
                    product,
                 },
        update: (cache, { data: { insertShipments }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedShipment = insertShipments.returning;
                            console.log(insertedShipment)
                            cache.writeQuery({
                                query: shipments
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../sales/shipments'})
                }).catch(err => console.log(err));
                this.carrier_name = ' ';
                this.transit_time = ' ';
                this.image = ' ';
                this.tracking_url = ' ';
                this.speed_grade = ' ';
                this.product = ' ';
            },
            onFileAdded(e) {},
            onError(e) {},
            onSuccess(e) {},
            onComplete(e) {}
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