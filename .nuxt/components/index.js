export { default as IoSocketStatus } from '../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js'
export { default as Breadcrumbs } from '../..\\components\\Breadcrumbs.vue'
export { default as Customersettings } from '../..\\components\\customersettings.vue'
export { default as Customerslimit } from '../..\\components\\customerslimit.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Generalsettings } from '../..\\components\\generalsettings.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Marketingsettings } from '../..\\components\\marketingsettings.vue'
export { default as Newcustomers } from '../..\\components\\newcustomers.vue'
export { default as Reportsettings } from '../..\\components\\reportsettings.vue'
export { default as Reviewslimit } from '../..\\components\\reviewslimit.vue'
export { default as Salesettings } from '../..\\components\\salesettings.vue'
export { default as Shopsettings } from '../..\\components\\shopsettings.vue'
export { default as Usersettings } from '../..\\components\\usersettings.vue'
export { default as AuthLogin } from '../..\\components\\Auth\\Login\\index.vue'
export { default as AuthRegister } from '../..\\components\\Auth\\Register\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
