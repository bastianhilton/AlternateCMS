export { default as IoSocketStatus } from '../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js'
export { default as Breadcrumbs } from '../..\\components\\Breadcrumbs.vue'
export { default as Colormode } from '../..\\components\\colormode.vue'
export { default as Customerslimit } from '../..\\components\\customerslimit.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Newcustomers } from '../..\\components\\newcustomers.vue'
export { default as Notification } from '../..\\components\\Notification.vue'
export { default as Ottotracker } from '../..\\components\\ottotracker.vue'
export { default as Reviewslimit } from '../..\\components\\reviewslimit.vue'
export { default as Visitsdisplay } from '../..\\components\\visitsdisplay.vue'
export { default as ImportProducts } from '../..\\components\\import\\import-products.vue'
export { default as ImportId } from '../..\\components\\import\\_id.vue'
export { default as IntegrationsContent } from '../..\\components\\integrations\\content.vue'
export { default as IntegrationsCustomers } from '../..\\components\\integrations\\customers.vue'
export { default as IntegrationsMarketing } from '../..\\components\\integrations\\marketing.vue'
export { default as IntegrationsReports } from '../..\\components\\integrations\\reports.vue'
export { default as IntegrationsSales } from '../..\\components\\integrations\\sales.vue'
export { default as IntegrationsSettings } from '../..\\components\\integrations\\settings.vue'
export { default as IntegrationsShop } from '../..\\components\\integrations\\shop.vue'
export { default as IntegrationsToppicks } from '../..\\components\\integrations\\toppicks.vue'
export { default as SettingsApitokensettings } from '../..\\components\\settings\\apitokensettings.vue'
export { default as SettingsCustomersettings } from '../..\\components\\settings\\customersettings.vue'
export { default as SettingsGeneralsettings } from '../..\\components\\settings\\generalsettings.vue'
export { default as SettingsMarketingsettings } from '../..\\components\\settings\\marketingsettings.vue'
export { default as SettingsPaymentsettings } from '../..\\components\\settings\\paymentsettings.vue'
export { default as SettingsProvidersettings } from '../..\\components\\settings\\providersettings.vue'
export { default as SettingsReportsettings } from '../..\\components\\settings\\reportsettings.vue'
export { default as SettingsSalesettings } from '../..\\components\\settings\\salesettings.vue'
export { default as SettingsShopsettings } from '../..\\components\\settings\\shopsettings.vue'
export { default as SettingsTicketdisplay } from '../..\\components\\settings\\ticketdisplay.vue'
export { default as SettingsWebhooks } from '../..\\components\\settings\\webhooks.vue'

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
