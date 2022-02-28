<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb" vocab="http://schema.org/" typeof="BreadcrumbList">
              <li property="itemListElement" typeof="ListItem" class="breadcrumb-item"><a property="item" typeof="WebPNLinkge" href="/">Home</a></li>
              <li v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem" class="breadcrumb-item"><a property="item" typeof="WebPage" :href="crumb.path" ><span property="name">{{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}</span></a><meta property="position" :content="index + 2" /></li>
            </ol>
          </nav>
          <h2 v-for="(crumb, index) in crumbs" :key="index" property="itemListElement" typeof="ListItem" class="breadcrumb-item pageTitle">{{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}</h2>
    </div>
</template>

<script>
const titleCase = require('ap-style-title-case')
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>