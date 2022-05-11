<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><FormulateInput type="button">Report</FormulateInput></a>
        <a class="navbar-brand" href="/admin/add-new/add-new-permissions"><FormulateInput type="button" style="float:left; left: 25%; position: absolute;">Create Permission Group</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table class="table">
        <thead class="table table-dark">
          <tr>
            <th>Permissions Group Name</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sit</td>
            <td>Amet</td>
            <td><a :href="`/admin/edit/role/${roles.id}`"><span class="fas fa-trash-can"></span></a></td>
          </tr>
          <tr>
            <td>Adipisicing</td>
            <td>Elit</td>
            <td><a :href="`/admin/edit/role/${roles.id}`"><span class="fas fa-trash-can"></span></a></td>
          </tr>
          <tr>
            <td>Hic</td>
            <td>Fugiat</td>
            <td><a :href="`/admin/edit/role/${roles.id}`"><span class="fas fa-trash-can"></span></a></td>
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
