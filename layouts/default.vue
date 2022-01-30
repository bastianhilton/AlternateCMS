<template>
    <div>
        <Header />
        <div class="dashboard">
           <Breadcrumbs />
           <Nuxt /> 
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header'
import Breadcrumbs from '~/components/Breadcrumbs'
import Footer from '~/components/Footer'
  
export default {
    components: {
        Header,
        Breadcrumbs,
        Footer
    },
}
</script>