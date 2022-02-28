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

            <div class="table table-responsive table-bordered orderTable col">
                <h4>Sales</h4>
                <table class="table table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lifetime Sales</th>
                            <th>Average Order</th>
                            <th># of Shops</th>
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
            <div class="table table-responsive table-bordered orderTable col">
                <h4>Last Orders</h4>
                <table class="table table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Total</th>
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
            <div class="table table-responsive table-bordered orderTable col">
                <h4>Last Search Terms</h4>
                <table class="table table">
                    <thead>
                        <tr>
                            <th>Search Term</th>
                            <th>Results</th>
                            <th>Uses</th>
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
                <div class="table table-responsive table-bordered latestOrders col">
                    <table class="table table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
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
                <div class="table table-responsive table-bordered latestOrders col">
                    <table class="table table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>How Many Times Viewed</th>
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
                <Newcustomers />
            </div>
            <div id="ex2-pills-4" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-4">
                <Customerslimit />
            </div>
            <div id="ex2-pills-5" class="tab-pane fade" role="tabpanel" aria-labelledby="ex2-tab-5">
                <Reviewslimit />
            </div>
        </div>
  </div>
</template>

<script>
// import products from '~/apollo/queries/shop/products'
import Customerslimit from '~/components/customerslimit'
import Newcustomers from '~/components/newcustomers'
import Reviewslimit from '~/components/reviewslimit'

export default {

  components: { Newcustomers, Customerslimit, Reviewslimit},
  head: {
      title: "AlternateCMS"
  }
}
</script>
