<template>
  <div>
    <form v-for="checklist in checklists" :key="checklist.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="visitsAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addChecklist" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Username</td>
              <td>
                <input v-model="username" type="textarea" />{{ checklist.username }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Regional Manager</td>
              <td>
                <input v-model="regional_manager" type="text" />{{ checklist.regional_manager }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Manager</td>
              <td>
                <input v-model="manager" type="text" />{{ checklist.manager }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Start Date</td>
              <td>
                <input v-model="start_date" type="text" />{{ checklist.start_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">End Date</td>
              <td>
                <input v-model="end_date" type="text" />{{ checklist.end_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Region</td>
              <td>
                <input v-model="region" type="text" />{{ checklist.region }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Location</td>
              <td>
                <input v-model="location" type="text" />{{ checklist.location }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country</td>
              <td>
                <input v-model="country" type="text" />{{ checklist.country }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <div class="form-wrapper">
                  <form>
                    <button type="group" name="description" :repeatable="true" value="Add Notes"
                      add-value="+ Add Description">
                      <div class="description">
                        <input v-model="description" name="name" type="text" value="Description" />{{ checklist.description }}
                      </div>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <input v-model="media" type="image" value="Upload image, video, document, etc" />{{ checklist.media }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  checklists from '~/graphql/mutations/marketing/checklists'

const DELETE_CHECKLIST = gql `
  mutation delete_checklists($id: Int!){
  delete_checklists(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_CHECKLIST = gql `
  mutation update_checklists($id: Int!){
  update_checklists(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Checklist'
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
   async deleteChecklist(checklist){
    await this.$apollo.mutate({
        mutation: DELETE_CHECKLIST,
        variables: {
          id: checklist.id
        },
        refetchQueries: [
          {
            query: checklists
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/checklists'})
            }).catch(err => console.log(err));
    },
    async updateChecklist(checklist){
    await this.$apollo.mutate({
        mutation: UPDATE_CHECKLIST,
        variables: {
          id: checklist.id
        },
        refetchQueries: [
          {
            query: checklists
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    checklists: {
      query: checklists,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }
.form-wrapper {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: .5em;
  box-sizing: border-box;
}
@media (min-width: 650px) {
  .reminder {
    display: flex;
  }
}

@media (min-width: 720px) {
  .reminder {
    display: block;
  }
}

@media (min-width: 850px) {
  .reminder {
    display: flex;
  }
  .reminder .formulate-input {
    margin-right: 1.5em;
  }
}
.reminder .formulate-input {
  margin-right: 2em;
  margin-bottom: 0;
}

strong {
  display: block;
  margin: 1em 0;
}

strong.price {
  margin-top: 1.25em;
  margin-bottom: 0;
  height: 2.5em;
  display: inline-flex;
  align-items: center;
}
</style>
