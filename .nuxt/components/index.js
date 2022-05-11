export { default as IoSocketStatus } from '../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js'
export { default as Breadcrumbs } from '../..\\client\\components\\Breadcrumbs.vue'
export { default as Customersettings } from '../..\\client\\components\\customersettings.vue'
export { default as Customerslimit } from '../..\\client\\components\\customerslimit.vue'
export { default as Footer } from '../..\\client\\components\\Footer.vue'
export { default as Generalsettings } from '../..\\client\\components\\generalsettings.vue'
export { default as Header } from '../..\\client\\components\\Header.vue'
export { default as Marketingsettings } from '../..\\client\\components\\marketingsettings.vue'
export { default as Newcustomers } from '../..\\client\\components\\newcustomers.vue'
export { default as Notification } from '../..\\client\\components\\Notification.vue'
export { default as Reportsettings } from '../..\\client\\components\\reportsettings.vue'
export { default as Reviewslimit } from '../..\\client\\components\\reviewslimit.vue'
export { default as Salesettings } from '../..\\client\\components\\salesettings.vue'
export { default as Shopsettings } from '../..\\client\\components\\shopsettings.vue'
export { default as Usersettings } from '../..\\client\\components\\usersettings.vue'

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
