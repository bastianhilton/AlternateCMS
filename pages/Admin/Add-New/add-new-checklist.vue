<template>
  <div>
    <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Checklist" @click="addChecklist" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Checklist</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td style="text-align: right;">Username</td>
              <td>
                <input v-model="username" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Regional Manager</td>
              <td>
                <input v-model="regional_manager" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Manager</td>
              <td>
                <input v-model="manager" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Start Date</td>
              <td>
                <input v-model="start_date" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">End Date</td>
              <td>
                <input v-model="end_date" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Region</td>
              <td>
                <input v-model="region" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Location</td>
              <td>
                <input v-model="location" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country</td>
              <td>
                <input v-model="country" type="text" />
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
                        <input v-model="description" name="name" type="text" value="Description" />
                      </div>
                    </button>
                  </form>
                </div>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Media</td>
              <td>
                <input v-model="media" type="image" value="Upload image, video, document, etc" />
              </td>
            </tr>
          </tbody>
        </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import  gql from "graphql-tag";

  import 
    checklists
  from "~/graphql/queries/marketing/checklists";
  /* eslint-disable camelcase */

  const ADD_CHECKLISTS = gql `
    mutation ($username:String!, $ticket:String!, $regional_manager:String!, $region:String!, $project:String!, $prod_id:String!, $media:String!, $manager:String!, $location:String!, $description:String!, $created_at:String!, $country:String!, $meta_url:String!, $position:String!, $prod_id:String!,){
    insert_checklists(objects: {username: $username, ticket: $ticket, regional_manager: $regional_manager, region: $region, project: $project, prod_id: $prod_id, media: $media, manager: $manager, location: $location, description: $description, created_at: $created_at, country: $country, meta_url: $meta_url, position: $position, prod_id: $prod_id,}) {
        affected_rows
        returning {
            username
            ticket
            regional_manager
            region
            project
            prod_id
            media
            manager
            location
            description
            created_at
            country
    }
  }
}`;

  export default {
    data() {
      return {
        region: " ",
        location: " ",
        description: " ",
        username: " ",
        regional_manager: " ",
        manager: " ",
        start_date: " ",
        end_date: " ",
        media: " ",
        ticket: " ",
        project: " ",
        prod_id: " ",
        created_at: " ",
        country: " ",
      }
    },
    head: {
      title: 'Create A Checklist'
    },
    computed: {
      total() {
        const count = Array.isArray(this.formData.checklists) ? this.formData.checklists.length : 1
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(count * 100)
      }
    },
    methods: {
      async addChecklist() {
        const region = this.region;
        const description = this.description;
        const location = this.location;
        const end_date = this.end_date;
        const username = this.username;
        const regional_manager = this.regional_manager;
        const manager = this.manager;
        const start_date = this.start_date;
        const media = this.media;
        const ticket = this.ticket;
        const project = this.project;
        const prod_id = this.prod_id;
        const created_at = this.created_at;
        const country = this.country;
        await this.$apollo.mutate({
          mutation: ADD_CHECKLISTS,
          variables: {
            username,
            ticket,
            regional_manager,
            region,
            start_date,
            end_date,
            project,
            prod_id,
            media,
            manager,
            location,
            description,
            created_at,
            country,
          },
          update: (cache, {
            data: {
              insertChecklists
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedChecklist = insertChecklists.returning;
              console.log(insertedChecklist)
              cache.writeQuery({
                query: checklists
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/checklists'
          })
        }).catch(err => console.log(err));
        this.region = ' ';
        this.description = ' ';
        this.location = ' ';
        this.end_date = ' ';
        this.username = ' ';
        this.regional_manager = ' ';
        this.manager = ' ';
        this.start_date = ' ';
        this.media = ' ';
        this.username = ' ';
        this.ticket = ' ';
        this.regional_manager = ' ';
        this.region = ' ';
        this.project = ' ';
        this.prod_id = ' ';
        this.media = ' ';
        this.manager = ' ';
        this.location = ' ';
        this.description = ' ';
        this.created_at = ' ';
        this.country = ' ';
      },

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

</style>
