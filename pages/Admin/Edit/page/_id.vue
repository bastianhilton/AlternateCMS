<template>
    <div>
        <form v-for="page in pages" :key="page.id"  method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="pageAddOptions">
                            <li><input type="submit" @click="addPage" value="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Page Name</td>
                        <td><input type="text" required />{{ page.title }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Page Url</td>
                        <td><input type="url" value="Product URL" />{{ page.url_key }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </button>
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
                                                    <vue-simplemde id="pageDescription" />{{ page.content }}
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
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Search Engine Optimization
                    </button>
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
                                        <td><input type="text" value="Product Url" required />{{ page.meta_title }}</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Keywords</td>
                                        <td><input type="text" value="Product Keywords" />{{ page.meta_keywords }}</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Description</td>
                                        <td><input
  type="textarea" value="Product Description" rows="10" cols="50" />{{ page.meta_description }}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  pages from '~/graphql/mutations/content/pages'

const DELETE_PAGE = gql `
  mutation delete_pages($id: Int!){
  delete_pages(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_PAGE = gql `
  mutation update_pages($id: Int!){
  update_pages(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Page'
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
   async deletePage(page){
    await this.$apollo.mutate({
        mutation: DELETE_PAGE,
        variables: {
          id: page.id
        },
        refetchQueries: [
          {
            query: pages
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/content/pages'})
            }).catch(err => console.log(err));
    },
    async updatePage(page){
    await this.$apollo.mutate({
        mutation: UPDATE_PAGE,
        variables: {
          id: page.id
        },
        refetchQueries: [
          {
            query: pages
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    pages: {
      query: pages,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
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