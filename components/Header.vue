<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <a class="navbar-brand mt-2 mt-lg-0" href="/">
                    <img src="~/static/styles/logo.png" height="15" alt=""
                        loading="lazy" />
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!--Sales Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Sales
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/sales/orders">Orders</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/invoices">Invoices</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/shipments">Shipments</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/credit-memos">Credit Memos</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/returns">Returns</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/billing-agreements">Billing Agreements</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/transactions">Transactions</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/sales/payment-virtual-terminal">Payment Virtual Terminal</a>
                            </li>
                        </ul>
                    </li>
                    <!--Customers Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Customers
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/customers/all-customers">All Customers</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/online-customers">Online Customers</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/segments">Segments</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/customers/customer-groups">Customer Groups</a>
                            </li>
                        </ul>
                    </li>
                    <!--Marketing Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Marketing
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/promotions">Promotions</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/private-sales">Private Sales</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/seo">SEO & Search</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/customer-engagement">Customer Engagement</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/communications">Communications</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/marketing/user-content">User Content</a>
                            </li>
                        </ul>
                    </li>
                    <!--Content Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Content
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/content/pages">Pages</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/blog">Blog</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/media-manager">Media Manager</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/theme-manager">Theme Manager</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/content/design-schedule">Design Schedule</a>
                            </li>
                        </ul>
                    </li>
                    <!--Reports Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Reports
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/reports/marketing-reports">Marketing Reports</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/sales-reports">Sales Reports</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/customers-reports">Customers Reports</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/business-intelligence">Business Intelligence</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/reviews">Reviews</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/products-reports">Products Reports</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/statistics">Statistics</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/reports/customer-engagement">Customer Engagement</a>
                            </li>
                        </ul>
                    </li>
                    <!--Shop Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Shop
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/shop/products">Products</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/categories">Categories</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/currency">Currency</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/inventory">Inventory</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/attributes">Attributes</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/taxes">Taxes</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/multi-vendor">Multi-Vendor</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/shop/fullfillment">Fullfillment</a>
                            </li>
                        </ul>
                    </li>
                    <!--System Dropdown-->
                    <li class="nav-item dropdown">
                        <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#" role="button"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            System
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="/admin/system/data-transfer">Data Transfer</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/permissions">Permissions</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/integrations-marketplace">Integrations Marketplace</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/action-logs">Action Logs</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/tools">Tools</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/admin/system/settings">Other Settings</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="d-flex align-items-center">
                <!-- Search -->
                <form class="d-flex input-group w-auto">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <span id="search-addon" class="input-group-text border-0">
                        <i class="fas fa-search"></i>
                    </span>
                </form>

                <a id="navbarDropdownMenuLink" class="text-reset me-3 dropdown-toggle hidden-arrow" href="#"
                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item" href="/admin/">Some news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/admin/">Another news</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/admin/">Something else here</a>
                    </li>
                </ul>

                <a id="navbarDropdownMenuLink" class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-circle" height="25" alt=""
                        loading="lazy" />
                </a>
                <ul v-if="!isAuthenticated" class="dropdown-menu dropdown-menu-end"  aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <a class="dropdown-item" href="/admin/profile">My Account</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/admin/">Customer View</a>
                    </li>
                    <li @click="logout">
                        <a class="dropdown-item" aria-current="page" to="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>        
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>
<style>

</style>
