<template>
    <div>
        <form action="../shop/products" method="POST">
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
                                <option value="country">Default</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Product Name</td>
                        <td><input id="productName" type="productName" required></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">SKU</td>
                        <td><input id="productSku" type="productSku"></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Price</td>
                        <td><input id="productPrice" type="productPrice" placeholder="$" required></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Class</td>
                        <td><select id="taxClass" name="taxClass">
                                <option value="Taxable Goods">Taxable Goods</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Quantity</td>
                        <td><input id="productQuantity" type="productQuantity"></td>
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
                        <td><input id="productWeight" type="text">
                            <select id="productWeight" name="productWeight">
                                <option value="Has-Weight">This item has weight</option>
                                <option value="No-Weight">This item has no weight</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Visibility</td>
                        <td><select id="productVisibility" name="visibility">
                                <option value="noVisibility">No Visibility</option>
                                <option value="catalogVisibility">Catalog</option>
                                <option value="searchVisibility">Search</option>
                                <option value="catalognsearchVisibility">Catalog and Search</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Categories</td>
                        <td><select id="productCategories" name="Select">
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
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Short Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <client-only>
                                                    <vue-simplemde id="shortDescription" v-model="content" />
                                                </client-only>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <vue-simplemde id="longDescription" v-model="content" />
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
                        <table class="table">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Title</td>
                                        <td><input id="productMetaTitle" type="text" placeholder="Product Url" required></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Keywords</td>
                                        <td><input id="productMetaKeywords" type="text" placeholder="Product Keywords"></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Description</td>
                                        <td><textarea id="productMetaDescription" type="text" placeholder="Product Description" rows="10" cols="50" /></td>
                                    </tr>
                                </tbody>
                            </table>
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
                        
                    </div>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      content: 'Add description',
    };
  },
    head: {
        title: 'Add New Product'
    }
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>