<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><FormulateInput type="button">Orders</FormulateInput></a>
        <a class="navbar-brand"><FormulateInput type="button" style="float:left; left: 8%; position: absolute;">Payment Settlements</FormulateInput></a>
        <a class="navbar-brand"><FormulateInput type="button" style="float:left; left: 22%; position: absolute;">Refunds</FormulateInput></a>
        
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Theme Title</th>
            <th>Parent Theme</th>
            <th>Theme Path</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sit</td>
            <td>Amet</td>
            <td>Consectetur</td>
            <td><a :href="`/admin/edit/agreement/${agreements.id}`">View</a></td>
          </tr>
          <tr>
            <td>Adipisicing</td>
            <td>Elit</td>
            <td>Elit</td>
            <td><a :href="`/admin/edit/agreement/${agreements.id}`">View</a></td>
          </tr>
          <tr>
            <td>Hic</td>
            <td>Fugiat</td>
            <td>Elit</td>
            <td><a :href="`/admin/edit/agreement/${agreements.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

  export default {

    head: {
      title: 'Sales Reports'
    }
  }

</script>
