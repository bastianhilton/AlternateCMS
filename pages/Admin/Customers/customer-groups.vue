<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-customergroup"><FormulateInput type="button">Add New Customer Group</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Group</th>
            <th>Tax Class</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="customers in customer_group" :key="customers.id">
          <tr>
            <td>{{ customers.id }}</td>
            <td>{{ customers.name }}</td>
            <td>{{ customers.tax_class }}</td>
            <td>{{ customers.created_at }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import customer_group from '~/apollo/queries/customers/customerGroups'

export default {
  data() {
    return {
      customer_group: [],
    }
  },
  apollo: {
    customer_group: {
      prefetch: true,
      query: customer_group
    }
  },
    head: {
      title: 'Customers Group'
    }
  }

</script>
