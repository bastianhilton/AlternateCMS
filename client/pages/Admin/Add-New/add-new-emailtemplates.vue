<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="email_templateAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addEMAIL_TEMPLATE" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Active</td>
              <td>
                <FormulateInput v-model="active" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Template Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Subject</td>
              <td>
                <FormulateInput v-model="subject" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="content" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Header</td>
              <td>
                <FormulateInput v-model="header" type="text" placeholder="#" required />
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">Footer</td>
              <td>
                <FormulateInput v-model="footer" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Width</td>
              <td>
                <FormulateInput v-model="width" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <FormulateInput v-model="height" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Type</td>
              <td>
                <FormulateInput v-model="type" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <FormulateInput v-model="media" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <FormulateInput v-model="assigned_to" type="text" />
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
  /* eslint-disable camelcase */
  import {
    email_templates
  } from "~/apollo/queries/marketing/email_templates";

  const ADD_EMAIL_TEMPLATES = gql `
    mutation ($name: String!,$height: String!,$header: String!,$footer: String!,$content: String!,$email_template: String!,$media: String!,$subject: String!,$type: String!,$assigned_to: String!,$active: String!,$value: String!,$width: String){
    insert_email_templates(objects: {name: $name,height: $height,header: $header,footer: $footer,content: $content,assigned_to: $assigned_to,active: $active,email_template: $email_template,media: $media,subject: $subject,type: $type,active: $active,width: $width,value: $value}) {
        affected_rows
        returning {
            name
            height
            header
            footer
            content
            assigned_to
            active
            email_template
            media
            subject
            type
            width
            value
    }
  }
}`;

  export default {
    data() {
      return {
        active: [],
        media: [],
        thumbnail: " ",
        name: " ",
        height: " ",
        header: " ",
        footer: " ",
        content: " ",
        email_template: " ",
        assigned_to: " ",
        subject: " ",
        type: " ",
        width: " ",
        value: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Email Template'
    },

    methods: {
      async addEMAIL_TEMPLATE({
        target
      }) {
        const name = this.name;
        const height = this.height;
        const header = this.header;
        const footer = this.footer;
        const content = this.content;
        const assigned_to = this.assigned_to;
        const active = this.active;
        const email_template = this.email_template;
        const media = this.media;
        const subject = this.subject;
        const type = this.type;
        const width = this.width;
        const value = this.value;

        await this.$apollo.mutate({
          mutation: ADD_EMAIL_TEMPLATES,
          variables: {
            name,
            height,
            header,
            footer,
            content,
            assigned_to,
            active,
            email_template,
            media,
            subject,
            type,
            width,
            value,
          },
          update: (cache, {
            data: {
              insertEMAIL_TEMPLATES,
            }
          }) => {
            try {
              const insertedEMAIL_TEMPLATE = insertEMAIL_TEMPLATES.returning;
              console.log(insertedEMAIL_TEMPLATE)
              cache.writeQuery({
                query: email_templates
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/email_templates'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.height = ' ';
        this.header = ' ';
        this.footer = ' ';
        this.content = ' ';
        this.assigned_to = ' ';
        this.active = ' ';
        this.email_template = ' ';
        this.media = ' ';
        this.subject = ' ';
        this.type = ' ';
        this.active = ' ';
        this.width = ' ';
        this.value = ' ';
      },
    },
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
