<template>
    <div>
        <form action="../models/products" method="post">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                        </th>
                        <th scope="col" class="productAddOptions">
                            <li><button type="button" class="btn btn-primary">Add Attribute</button></li>
                            <li><button type="submit" class="btn btn-success">Save</button></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Enable Product</td>
                        <td>
                            <div class="form-check form-switch">
                                <input id="flexSwitchCheckDefault" class="form-check-input" type="checkbox"
                                    role="switch" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Attribute Set</td>
                        <td><select id="productAttributeSet" name="attribute-set">
                                <option value="country">US</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Product Name</td>
                        <td><input type="productName" required></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">SKU</td>
                        <td><input type="productSku"></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Price</td>
                        <td><input type="productPrice" placeholder="$" required></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Class</td>
                        <td><select id="taxClass" name="taxClass">
                                <option value="Taxable Goods">Taxable Goods</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Quantity</td>
                        <td><input type="productQuantity"></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Stock Status</td>
                        <td><select id="stockStatus" name="stockStatus">
                                <option value="In-Stock">In Stock</option>
                                <option value="Out-Of-Stock">Out of Stock</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Weight</td>
                        <td><input type="text">
                            <select id="productWeight" name="productWeight">
                                <option value="Has-Weight">This item has weight</option>
                                <option value="No-Weight">This item has no weight</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Visibility</td>
                        <td><select id="visibility" name="visibility">
                                <option value="noVisibility">No Visibility</option>
                                <option value="catalogVisibility">Catalog</option>
                                <option value="searchVisibility">Search</option>
                                <option value="catalognsearchVisibility">Catalog and Search</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Categories</td>
                        <td><select id="categories" name="Select">
                                <option value="music">Music</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Set Product as New Form</td>
                        <td><input id="fromDate" type="date" name="fromDate"> to <input id="toDate" type="date"
                                name="toDate"></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country of Manufacture</td>
                        <td><select id="countryManufacture" name="countryManufacture">
                                <option value="countryChoice">Choose a Country</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Size</td>
                        <td><select id="productSize" name="productSize">
                                <option value="55cm">55 cm</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Format</td>
                        <td><select id="productFormat" name="format">
                                <option value="downloadable">Downloadable</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Quantity Size</td>
                        <td><select id="quantitySize" name="quantitySize">
                                <option value="onekg">1 kg</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Short Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <vue-simplemde v-model="post.content"></vue-simplemde>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <textarea id="longDescription" name="description" cols="70" rows="10" autofocus required></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingThree" class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>Upload Images and Videos</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just about any HTML
                        can go within the <strong>.accordion-body</strong>, though the transition does
                        limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingFour" class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Search Engine Optimization
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just about any HTML
                        can go within the <strong>.accordion-body</strong>, though the transition does
                        limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingFive" class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Related Products, Up-Sells, and Cross-Sells
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or
                        overriding our default variables. It's also worth noting that just about any HTML
                        can go within the <strong>.accordion-body</strong>, though the transition does
                        limit overflow.
                    </div>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
// import product from '~/apollo/queries/shop/product'
// const moment = require('moment')

export default {
  /* data() {
    return {
      product: {},
      moment,
      api_url: process.env.NUXT_API_URL
    }
  },
  apollo: {
    product: {
      prefetch: true,
      query: product,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }, */
    head: {
        title: 'Edit Product'
    }
}
</script>

<style>

</style>