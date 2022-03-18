<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><FormulateInput type="button">Report</FormulateInput></a>
        <a class="navbar-brand"><FormulateInput type="button" style="float:left; left: 13%; position: absolute;">Archive</FormulateInput></a>
        <a class="navbar-brand"><FormulateInput type="button" style="float:left; left: 25%; position: absolute;">Bulk Actions</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table class="table">
        <thead class="table table-dark">
          <tr>
            <th>Cache Type</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sit</td>
            <td>Amet</td>
            <td>Consectetur</td>
            <td><a :href="`/admin/edit/role/${roles.id}`">View</a></td>
          </tr>
          <tr>
            <td>Adipisicing</td>
            <td>Elit</td>
            <td>Elit</td>
            <td><a :href="`/admin/edit/role/${roles.id}`">View</a></td>
          </tr>
          <tr>
            <td>Hic</td>
            <td>Fugiat</td>
            <td>Elit</td>
            <td><a :href="`/admin/edit/role/${roles.id}`">View</a></td>
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
