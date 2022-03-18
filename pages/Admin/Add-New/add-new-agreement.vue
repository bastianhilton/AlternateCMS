<template>
    <div>
        <FormulateForm method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="agreementAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addAgreement" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Agreement Name</td>
                        <td><FormulateInput v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Agreement Type</td>
                        <td><FormulateInput v-model="type" type="text" name="Type">
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
  id="excerpt" v-model="excerpt" type="textarea" validation="required|max:50,length" :help="`Keep it under 50 characters. ${50 - excerpt.length} left.`" cols="50" rows="10" label="Add a short Description"></FormulateInput>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <client-only>
                                                    <vue-simplemde id="agreementDescription" v-model="content" />
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
                        <td><td><FormulateInput v-model="image" type="image" upload-url="/media" name="headshot" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/></td>
                    </div>
                </div>
            </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from "graphql-tag";
import { agreements } from "~/apollo/queries/sales/agreements";

const ADD_AGREEMENTS = gql`
    mutation ($name:String!,$excerpt:String,$type:String,$content:String,$image:String){
    insert_agreements(objects: {name: $name, excerpt: $excerpt, type: $type, content: $content, image: $image}) {
        affected_rows
        returning {
            name
            excerpt
            type
            content
            image
    }
  }
}`;

export default {
    data() {
    return {
        type: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",
        
      }
  },
  methods: {
      async addAgreement() {
            const name = this.name;
            const content = this.content;
            const excerpt = this.excerpt;
            const type = this.type;
            const image = this.image;
            await this.$apollo.mutate({
                mutation: ADD_AGREEMENTS,
                variables: {
                    name,
                    excerpt,
                    type,
                    content,
                    image,
                },
        update: (cache, { data: { insertAgreements }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedAgreement = insertAgreements.returning;
                            console.log(insertedAgreement)
                            cache.writeQuery({
                                query: agreements
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../sales/agreements'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
                this.type = ' ';
                this.content = ' ';
                this.image = ' ';
            },
            
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Agreement'
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