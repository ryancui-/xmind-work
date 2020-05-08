import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs'
import { BillType } from './constant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bills: [],
    categoryMap: {},
    categories: [],
    filters: []
  },
  getters: {
    showBills(state) {
      // TODO: Filter it first
      const filteredBills = state.bills
      return filteredBills.map(({ type, time, category, amount }) => {
        return {
          id: `${time}_${category}_${amount}`,
          type: BillType.fromValue(type).label,
          time: dayjs(time).format('YYYY-MM-DD HH:mm:ss'),
          category: (state.categoryMap[category] || {}).name || '-',
          amount
        }
      })
    }
  },
  mutations: {
    INIT(state, { bills, categories }) {
      state.bills = bills
      state.categories = categories
      state.categoryMap = {}
      state.categories.forEach(({ id, type, name }) => {
        state.categoryMap[id] = { type, name }
      })
    }
  },
  actions: {

  }
})
