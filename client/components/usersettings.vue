<template>
    <div>
<div id="accordionFlushExample" class="accordion accordion-flush">
  <div class="accordion-item">
    <h2 id="flush-headingOne" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        Staff Member Settings
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-mdb-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="generalSettingsAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addGeneralSettings" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Admin </td>
                        <td><FormulateInput v-model="siteTitle" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Site Tagline</td>
                        <td><FormulateInput v-model="tagline" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Site Website Address (URL)</td>
                        <td><FormulateInput v-model="siteUrl" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Adminstration Email Address</td>
                        <td><FormulateInput v-model="siteAdminEmail" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Your Industry</td>
                        <td><FormulateInput
        v-model="value" :options="{first: 'Apps and Games', second: 'Athletic/Sporting Goods', third: 'Arts and Design', fourth: 'Auto Parts'}" type="select" placeholder="Select an option" label="--Please Select--"
      /></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 id="flush-headingTwo" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        Url Options
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-mdb-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="generalSettingsAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addGeneralSettings" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">GeneralSettings Name</td>
                        <td><FormulateInput v-model="tagline" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">GeneralSettings Type</td>
                        <td><FormulateInput v-model="tagline" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 id="flush-headingThree" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Base URLs
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-mdb-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="generalSettingsAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addGeneralSettings" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">GeneralSettings Name</td>
                        <td><FormulateInput v-model="tagline" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">GeneralSettings Type</td>
                        <td><FormulateInput v-model="tagline" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 id="flush-headingThree" class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
        Content Management
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingThree"
      data-mdb-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="generalSettingsAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addGeneralSettings" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">GeneralSettings Name</td>
                        <td><FormulateInput v-model="tagline" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">GeneralSettings Type</td>
                        <td><FormulateInput v-model="tagline" type="text" name="Type">
                            </FormulateInput></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import gql from "graphql-tag";

import { generalSettings } from "~/apollo/queries/system/generalsettings";

const ADD_GENERAL_SETTINGS = gql`
    mutation ($siteTitle:String!,$tagline:String,$siteUrl:String,$siteAdminEmail:String,$value:String){
    insert_generalSettings(objects: {siteTitle: $siteTitle, tagline: $tagline, siteUrl: $siteUrl, siteAdminEmail: $siteAdminEmail, value: $value}) {
        affected_rows
        returning {
            siteTitle
            tagline
            siteUrl
            siteAdminEmail
            value
    }
  }
}`;

export default {
    data() {
    return {
        siteUrl: [],
        siteTitle: " ",
        tagline: " ",
        siteAdminEmail: " ",
        value: " ",
        
      }
  },
  methods: {
      async addGeneralSettings() {
            const siteTitle = this.siteTitle;
            const siteAdminEmail = this.siteAdminEmail;
            const tagline = this.tagline;
            const siteUrl = this.siteUrl;
            const value = this.value;
            await this.$apollo.mutate({
                mutation: ADD_GENERAL_SETTINGS,
                variables: {
                    siteTitle,
                    tagline,
                    siteUrl,
                    siteAdminEmail,
                    value,
                },
        update: (cache, { data: { insertGeneralSettingss }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedGeneralSettings = insertGeneralSettingss.returning;
                            console.log(insertedGeneralSettings)
                            cache.writeQuery({
                                query: generalSettings
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../system/general-settings'})
                }).catch(err => console.log(err));
                this.siteTitle = ' ';
                this.tagline = ' ';
                this.siteUrl = ' ';
                this.siteAdminEmail = ' ';
                this.value = ' ';
            },
            
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'General Settings'
    }
}
</script>

<style>

</style>