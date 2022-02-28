/* eslint-disable camelcase */
<template>
    <div id="editor">
        <FormulateForm method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table table">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="categoryAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addCategory" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Category Name</td>
                        <td><FormulateInput v-model="name" type="text" required /></td>
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
                            <table class="table table">
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <vue-simplemde id="categoryDescription" v-model="content" />
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
                <h2 id="headingThree" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                    </FormulateInput>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <FormulateInput id="image" v-model="image" type="text" name="image" />
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
                        <table class="table table">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Meta Title, Meta Keywords, and Meta Description are used to describe your categories to potential customers using search engine like Google, Bing, etc.</td>
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
  v-model="meta_description" type="textarea" label="Product Description" rows="10" cols="50" /></td>
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
import { categories } from "~/apollo/queries/shop/categories";

const ADD_CATEGORIES = gql`
    mutation ($name:String!,$product:String,$content:String,$image:String,$meta_title:String,$meta_keywords:String,$meta_description:String){
    insert_categories(objects: {name: $name, content: $content, image: $image, meta_description: $meta_description, meta_keywords: $meta_keywords, meta_title: $meta_title}) {
        affected_rows
        returning {
            name
            content
            image
            meta_description
            meta_keywords
            meta_title
    }
  }
}`;

export default {
  data() {
    return {
        name: " ",
        content: " ",
        image: " ",
        meta_description: " ",
        meta_keywords: " ",
        meta_title: " ",
      }
  },
  methods: {
      async addCategory() {
            const name = this.name;
            const content = this.content;
            const image = this.image;
            // eslint-disable-next-line camelcase
            const meta_title = this.meta_title;
            // eslint-disable-next-line camelcase
            const meta_keywords = this.meta_keywords;
            // eslint-disable-next-line camelcase
            const meta_description = this.meta_description;
            await this.$apollo.mutate({
                mutation: ADD_CATEGORIES,
                variables: {
                    name,
                    content,
                    image,
                    meta_description,
                    meta_keywords,
                    meta_title,
                 },
        update: (cache, { data: { insertCategories }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            console.log(insertedCategory)
                            cache.writeQuery({
                                query: categories
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/categories'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.content = ' ';
                this.image = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.meta_title = ' ';
            },
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Category'
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