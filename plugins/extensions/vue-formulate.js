import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

import FormulateVueCurrencyPlugin from 'vue-formulate-currency'
import VueFormulateStarRating from "vue-formulate-star-rating";

Vue.use(VueFormulate, {
    plugins: [ FormulateVueCurrencyPlugin, VueFormulateStarRating ]
})