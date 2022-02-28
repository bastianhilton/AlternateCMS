<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-state"><FormulateInput type="button">Add New State</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>State ID</th>
            <th>State Title</th>
            <th>Description</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="states in states" :key="states.id">
          <tr>
            <td>{{ states.id }}</td>
            <td>{{ states.name }}</td>
            <td>{{ states.description }}</td>
            <td>{{ states.country }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import states from '~/apollo/queries/shop/states'

export default {
  data() {
    return {
      states: [],
    }
  },
  apollo: {
    states: {
      prefetch: true,
      query: states
    }
  },
    head: {
      title: 'States'
    }
  }

</script>
