<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-permissions"><FormulateInput type="button">Create Permission Group</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Users</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sit</td>
            <td>Amet</td>
            <td>Amet</td>
            <td><a :href="`/admin/edit/role/${roles.id}`"><span class="fas fa-pencil"></span></a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

  export default {

    head: {
      title: 'Action Logs'
    }
  }

</script>
