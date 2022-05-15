<template>
    <div>
        <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="pageAddOptions">
                            <li><FormulateInput type="submit" @click="addPage" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Page Name</td>
                        <td><FormulateInput v-model="title" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Page Url</td>
                        <td><FormulateInput v-model="url_key" type="url" label="Product URL" /></td>
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
                                        <td style="text-align: right;">Content</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <client-only>
                                                    <vue-simplemde id="pageDescription" v-model="content" />
                                                </client-only>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                        <div class="accordion-item">
                <h2 id="headingFour" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Search Engine Optimization
                    </FormulateInput>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <table class="table" >
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Title</td>
                                        <td><FormulateInput v-model="meta_title" type="text" label="Product Url" required /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Keywords</td>
                                        <td><FormulateInput v-model="meta_keywords" type="text" label="Product Keywords" /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Description</td>
                                        <td><FormulateInput
  type="textarea" v-model="meta_description" label="Product Description" rows="10" cols="50" /></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { pages } from "~/apollo/queries/content/pages";

const ADD_PAGES = gql`
    mutation ($title:String!,$meta_description:String,$meta_keywords:String,$content:String,$meta_title:String!,$url_key:String){
    insert_pages(objects: {title: $title, meta_description: $meta_description, meta_keywords: $meta_keywords, content: $content, meta_title: $meta_title, url_key: $url_key}) {
        affected_rows
        returning {
            title
            meta_description
            meta_keywords
            content
            meta_title
            url_key
    }
  }
}`;

export default {

    data() {
    return {
        meta_keywords: [],
        title: " ",
        meta_description: " ",
        content: " ",
        meta_title: " ",
        url_key: " ",
      }
  },
  /* eslint-disable camelcase */

  methods: {
      async addPage() {
            const title = this.title;
            const content = this.content;
            const meta_description = this.meta_description;
            const meta_keywords = this.meta_keywords;
            const meta_title = this.meta_title;
            const url_key = this.url_key;
            await this.$apollo.mutate({
                mutation: ADD_PAGES,
                variables: {
                    title,
                    meta_description,
                    meta_keywords,
                    content,
                    meta_title,
                    url_key,
                 },
        update: (cache, { data: { insertPages }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedPage = insertPages.returning;
                            console.log(insertedPage)
                            cache.writeQuery({
                                query: pages
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../content/pages'})
                }).catch(err => console.log(err));
                this.title = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.content = ' ';
                this.meta_title = ' ';
                this.url_key = ' ';
            },
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Page'
    }
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