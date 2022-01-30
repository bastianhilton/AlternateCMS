<template>
  <div>
    <!--<div class="row">
        <div class="col">
            <highchart :options="chartOptions" :update="['options.title', 'options.series']" />
        </div>
        <div class="col">
            <div v-headway></div>
        </div>
    </div>-->
    <div class="row">

            <div class="table-responsive table-bordered orderTable col">
                <h4>Sales</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Lifetime Sales</th>
                            <th scope="col">Average Order</th>
                            <th scope="col"># of Shops</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Latest Orders -->
            <div class="table-responsive table-bordered latestOrders col">
                <table class="table">
                    <h4>Last Orders</h4>
                    <thead>
                        <tr>
                            <th scope="col">Customer</th>
                            <th scope="col">Items</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Latest Search Terms -->
            <div class="table-responsive table-bordered latestOrders col">
                <table class="table">
                    <h4>Last Search Terms</h4>
                    <thead>
                        <tr>
                            <th scope="col">Search Term</th>
                            <th scope="col">Results</th>
                            <th scope="col">Uses</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Pills navs -->
        <ul id="ex1" class="nav nav-pills nav-fill mb-3" role="tablist">
            <li class="nav-item" role="presentation">
                <a id="ex2-tab-1" class="nav-link active" data-mdb-toggle="pill" href="#ex2-pills-1" role="tab"
                    aria-controls="ex2-pills-1" aria-selected="true">Best Sellers</a>
            </li>
            <li class="nav-item" role="presentation">
                <a id="ex2-tab-2" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-2" role="tab"
                    aria-controls="ex2-pills-2" aria-selected="false">Most Viewed Products</a>
            </li>
            <li class="nav-item" role="presentation">
                <a id="ex2-tab-3" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-3" role="tab"
                    aria-controls="ex2-pills-3" aria-selected="false">New Customers</a>
            </li>
            <li class="nav-item" role="presentation">
                <a id="ex2-tab-4" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-4" role="tab"
                    aria-controls="ex2-pills-4" aria-selected="false">Customers</a>
            </li>
            <li class="nav-item" role="presentation">
                <a id="ex2-tab-5" class="nav-link" data-mdb-toggle="pill" href="#ex2-pills-5" role="tab"
                    aria-controls="ex2-pills-5" aria-selected="false">Reviews</a>
            </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div id="ex2-content" class="tab-content">
            <div id="ex2-pills-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="ex2-tab-1">
                <div class="table-responsive table-bordered latestOrders col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="ex2-pills-2" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-2">
                <div class="table-responsive table-bordered latestOrders col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">How Many Times Viewed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="ex2-pills-3" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-3">
                <div class="table-responsive table-bordered latestOrders col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Orders</th>
                                <th scope="col">Average</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="ex2-pills-4" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-4">
                <div class="table-responsive table-bordered latestOrders col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Orders</th>
                                <th scope="col">Average</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="ex2-pills-5" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-5">
                <div class="table-responsive table-bordered latestOrders col">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col"># of Comments</th>
                                <th scope="col">Date</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
// import products from '~/apollo/queries/shop/products'

export default {
 /* data() {
    return {
      products: [],
    }
  },
  apollo: {
    products: {
      prefetch: true,
      query: products
    }
  }, */
}
</script>
