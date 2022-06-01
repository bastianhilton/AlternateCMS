export { default as IoSocketStatus } from '../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js'
export { default as Breadcrumbs } from '../..\\client\\components\\Breadcrumbs.vue'
export { default as Colormode } from '../..\\client\\components\\colormode.vue'
export { default as Customerslimit } from '../..\\client\\components\\customerslimit.vue'
export { default as Footer } from '../..\\client\\components\\Footer.vue'
export { default as Header } from '../..\\client\\components\\Header.vue'
export { default as Newcustomers } from '../..\\client\\components\\newcustomers.vue'
export { default as Notification } from '../..\\client\\components\\Notification.vue'
export { default as Ottotracker } from '../..\\client\\components\\ottotracker.vue'
export { default as Reviewslimit } from '../..\\client\\components\\reviewslimit.vue'
export { default as Visitsdisplay } from '../..\\client\\components\\visitsdisplay.vue'
export { default as IntegrationsContent } from '../..\\client\\components\\integrations\\content.vue'
export { default as IntegrationsCustomers } from '../..\\client\\components\\integrations\\customers.vue'
export { default as IntegrationsMarketing } from '../..\\client\\components\\integrations\\marketing.vue'
export { default as IntegrationsReports } from '../..\\client\\components\\integrations\\reports.vue'
export { default as IntegrationsSales } from '../..\\client\\components\\integrations\\sales.vue'
export { default as IntegrationsSettings } from '../..\\client\\components\\integrations\\settings.vue'
export { default as IntegrationsShop } from '../..\\client\\components\\integrations\\shop.vue'
export { default as IntegrationsToppicks } from '../..\\client\\components\\integrations\\toppicks.vue'
export { default as ImportProducts } from '../..\\client\\components\\import\\import-products.vue'
export { default as ImportId } from '../..\\client\\components\\import\\_id.vue'
export { default as SettingsApitokensettings } from '../..\\client\\components\\settings\\apitokensettings.vue'
export { default as SettingsCustomersettings } from '../..\\client\\components\\settings\\customersettings.vue'
export { default as SettingsGeneralsettings } from '../..\\client\\components\\settings\\generalsettings.vue'
export { default as SettingsMarketingsettings } from '../..\\client\\components\\settings\\marketingsettings.vue'
export { default as SettingsPaymentsettings } from '../..\\client\\components\\settings\\paymentsettings.vue'
export { default as SettingsProvidersettings } from '../..\\client\\components\\settings\\providersettings.vue'
export { default as SettingsReportsettings } from '../..\\client\\components\\settings\\reportsettings.vue'
export { default as SettingsSalesettings } from '../..\\client\\components\\settings\\salesettings.vue'
export { default as SettingsShopsettings } from '../..\\client\\components\\settings\\shopsettings.vue'
export { default as SettingsTicketdisplay } from '../..\\client\\components\\settings\\ticketdisplay.vue'
export { default as SettingsUsersettings } from '../..\\client\\components\\settings\\usersettings.vue'
export { default as SettingsWebhooks } from '../..\\client\\components\\settings\\webhooks.vue'

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
