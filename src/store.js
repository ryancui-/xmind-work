import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bills: [],
    categories: []
  },
  getters: {

  },
  mutations: {
    INIT(state, { bills, categories }) {
      state.bills = bills
      state.categories = categories
    }
  },
  actions: {

  }
})
