<template>
    <div>
        <FormulateForm method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="articleAddOptions">
                            <li><a href="/admin/add-new/add-new-tag"><FormulateInput type="button">Add New Tag</FormulateInput></a></li>
                            <li><FormulateInput type="submit" @click="addArticle" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Article Name</td>
                        <td><FormulateInput v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Categories</td>
                        <td><FormulateInput type="select" :options="categories.name" v-model="categories" name="Select">
                            </FormulateInput></td>
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
                                        <td style="text-align: right;">Excerpt</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <FormulateInput
  id="excerpt" type="textarea" validation="required|max:50,length" :help="`Keep it under 50 characters. ${50 - value.length} left.`" cols="50" rows="10" label="Add a short Description"></FormulateInput>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <client-only>
                                                    <vue-simplemde id="articleDescription" v-model="content" />
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
                <h2 id="headingThree" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                    </FormulateInput>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <td><dropzone id="dropzone" ref="myDropzone" v-model="image" :options="dropzoneOptions" @vdropzone-file-added="onFileAdded" @vdropzone-error="onError" @vdropzone-success="onSuccess" @vdropzone-complete="onComplete" /></td>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingFive" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Related Products, Up-Sells, and Cross-Sells
                    </FormulateInput>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        
                    </div>
                </div>
            </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";

import { articles } from "~/apollo/queries/content/articles";
import categories from '~/apollo/queries/shop/categories'

const ADD_ARTICLES = gql`
    mutation ($name:String!,$excerpt:String,$categories:String,$content:String,$image:String){
    insert_articles(objects: {name: $name, excerpt: $excerpt, categories: $categories, content: $content, image: $image}) {
        affected_rows
        returning {
            name
            excerpt
            categories
            content
            image
    }
  }
}`;

export default {
    data() {
    return {
        categories: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",
        
      }
  },
  dropzoneOptions: {
                url: "../../media/",
                thumbnailWidth: 150,
                maxFileAddress: 10,
                createImageThumbnails: true,
                maxThumbnailFileSize: 4,
                duplicateCheck: true,
                includeStyling: true,
                headers: { "My-Awesome-Header": "header value" }
            }
  methods: {
      async addArticle() {
            const name = this.name;
            const content = this.content;
            const excerpt = this.excerpt;
            const categories = this.categories;
            const image = this.image;
            await this.$apollo.mutate({
                mutation: ADD_ARTICLES,
                variables: {
                    name,
                    excerpt,
                    categories,
                    content,
                    image,
                },
        update: (cache, { data: { insertCategories }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            console.log(insertedCategory)
                            cache.writeQuery({
                                query: articles
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../content/blog'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
                this.categories = ' ';
                this.content = ' ';
                this.image = ' ';
            },
            
        },
    apollo: {
        categories: {
        prefetch: true,
        query: categories
        }
    }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Article'
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