<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-taxrate"><FormulateInput type="button">Add New Tax Rate</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>Tax Identifier</th>
            <th>Country</th>
            <th>State/Region</th>
            <th>Zip/Post Code</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="tax_rate in tax_rate" :key="tax_rate.id">
          <tr>
            <td>{{ tax_rate.tax_identifier }}</td>
            <td>{{ tax_rate.country }}</td>
            <td>{{ tax_rate.state }}</td>
            <td>{{ tax_rate.postcode }}</td>
            <td>{{ tax_rate.rate_percent }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import tax_rate from '~/apollo/queries/shop/taxrate'

export default {
  data() {
    return {
      tax_rate: [],
    }
  },
  apollo: {
    tax_rate: {
      prefetch: true,
      query: tax_rate
    }
  },
    head: {
      title: 'Tax Rate'
    }
  }

</script>
