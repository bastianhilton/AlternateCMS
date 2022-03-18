<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
          <div class="dropdown">
            <FormulateInput id="dropdownMenuButton" class="btn btn-primary dropdown-toggle" type="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              Email
            </FormulateInput>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="/admin/add-new-email">Send An Email</a></li>
              <li><a class="dropdown-item" href="#">Email Reminders</a></li>
            </ul>
          </div>
          
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Email</th>
            <th>Email Subject</th>
            <th>Email Created On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="emails in emails" :key="emails.id">
          <tr>
            <td>{{ emails.id }}</td>
            <td>{{ emails.email }}</td>
            <td>{{ emails.subject }}</td>
            <td>{{ emails.created_at }}</td>
            <td><a :href="`/admin/edit/email/${emails.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import emails from '~/apollo/queries/marketing/emails'

export default {
  data() {
    return {
      emails: [],
    }
  },
  apollo: {
    emails: {
      prefetch: true,
      query: emails
    }
  }, 
    head: {
      title: 'Communications'
    }
  }

</script>
