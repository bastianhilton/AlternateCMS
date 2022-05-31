<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data"  @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="knowledgebaseAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addKnowledgebase" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Knowledgebase Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Content</td>
              <td>
                <vue-simplemde id="longDescription" ref="markdownEditor" v-model="content" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Resolution</td>
              <td>
                <FormulateInput v-model="resolution" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Author</td>
              <td>
                <FormulateInput v-model="author" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Approver</td>
              <td>
                <FormulateInput v-model="approver" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Revision</td>
              <td>
                <FormulateInput v-model="revision" type="number" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <FormulateInput v-model="status" type="select" :options="[{value: 'Draft', label: 'Draft'}, {value: 'Expired', label: 'Expired'},{value: 'In Review', label: 'In Review'},{value: 'Private', label: 'Private'},{value: 'Public', label: 'Public'}]" />
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

import {knowledgebases} from "~/apollo/queries/system/knowledgebase";

  const ADD_KNOWLEDGEBASES = gql `
    mutation ($name: String!,$status: String!,$revision: String!,$resolution: String!,$approver: String!,$author: String!,$content: String!){
    insert_knowledgebases(objects: {name: $name,status: $status,revision: $revision,resolution: $resolution,approver: $approver,author: $author,content: $content}) {
        affected_rows
        returning {
            name
            status
            revision
            resolution
            approver
            author
            content
    }
  }
}`;


  export default {
    data() {
      return {
        content: [],
        countries: [],
        thumbnail: " ",
        name: " ",
        status: " ",
        revision: " ",
        resolution: " ",
        approver: " ",
        author: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Knowledgebase'
    },

    methods: {
      async addKnowledgebase({ target }) {
        const name = this.name;
        const status = this.status;
        const revision = this.revision;
        const resolution = this.resolution;
        const approver = this.approver;
        const author = this.author;
        const content = this.content;
        
        await this.$apollo.mutate({
          mutation: ADD_KNOWLEDGEBASES,
          variables: {
            name,
            status,
            revision,
            resolution,
            approver,
            author,
            content,
          },
          update: (cache, {
            data: {
              insertKnowledgebases,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedKnowledgebase = insertKnowledgebases.returning;
              console.log(insertedKnowledgebase)
              cache.writeQuery({
                query: knowledgebases
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../system/knowledgebases'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.status = ' ';
        this.revision = ' ';
        this.resolution = ' ';
        this.approver = ' ';
        this.author = ' ';
        this.content = ' ';
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
