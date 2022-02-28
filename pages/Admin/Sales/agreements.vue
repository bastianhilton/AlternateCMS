<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-agreement"><FormulateInput type="button">Create New Agreement</FormulateInput></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>Agreement ID</th>
            <th>Agreement Name</th>
            <th>Agreement Excerpt</th>
            <th>Agreement Created On</th>
            <th>Agreement Updated On</th>
            <td>Agreement Type</td>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="agreements in agreements" :key="agreements.id">
          <tr>
            <td>{{ agreements.id }}</td>
            <td>{{ agreements.name }}</td>
            <td>{{ agreements.excerpt }}</td>
            <td>{{ agreements.created }}</td>
            <td>{{ agreements.updated }}</td>
            <td>{{ agreements.type }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import agreements from '~/apollo/queries/sales/agreements'

export default {
  data() {
    return {
      agreements: [],
    }
  },
  apollo: {
    agreements: {
      prefetch: true,
      query: agreements
    }
  },
    head: {
      title: 'Agreements'
    }
  }

</script>
