<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-coupon"><FormulateInput type="button">Create New Coupons</FormulateInput></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" data-pagination="true" data-search="true" data-show-columns="true" data-show-export="true" data-show-toggle="true" data-click-to-select="true" data-show-multi-sort="true" data-show-print="true" >
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Expiration</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="coupons in coupons" :key="coupons.id">
          <tr>
            <td>{{ coupons.name }}</td>
            <td>{{ coupons.discount }}</td>
            <td>{{ coupons.expiration }}</td>
            <td>{{ coupons.published }}</td>
            <td><a href="/">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import coupons from '~/apollo/queries/shop/coupons'

export default {
  data() {
    return {
      coupons: [],
    }
  },
  apollo: {
    coupons: {
      prefetch: true,
      query: coupons
    }
  },
    head: {
      title: 'Coupons'
    }
  }

</script>
