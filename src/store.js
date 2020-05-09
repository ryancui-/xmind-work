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
    activeMonth: null,
    activeCategoryId: null
  },
  getters: {
    showBills(state) {
      let filteredBills = state.bills
      if (state.activeMonth) {
        filteredBills = filteredBills.filter(_ => dayjs(_.time).month() === state.activeMonth - 1)
      }
      if (state.activeCategoryId) {
        filteredBills = filteredBills.filter(_ => _.category === state.activeCategoryId)
      }

      return filteredBills.map(({ type, time, category, amount }) => {
        return {
          id: `${time}_${category}_${amount}`,
          type: BillType.fromValue(type).label,
          time: dayjs(time).format('YYYY-MM-DD HH:mm:ss'),
          category: (state.categoryMap[category] || {}).name || '无',
          amount
        }
      })
    },
    availableMonths(state) {
      return [...new Set(state.bills.map(_ => dayjs(_.time).month()))]
    },
    billsByMonth(state) {
      if (!state.activeMonth) return state.bills
      return state.bills.filter(_ => dayjs(_.time).month() === state.activeMonth - 1)
    },
    totalIncomeAmount(state, getters) {
      return getters.billsByMonth.filter(_ => BillType.isIncome(_.type)).reduce((prev, _) => prev + _.amount, 0)
    },
    totalOutlayAmount(state, getters) {
      return getters.billsByMonth.filter(_ => BillType.isOutlay(_.type)).reduce((prev, _) => prev + _.amount, 0)
    },
    outlayAnalysisByCategory(state, getters) {
      const categorySum = {}
      const outlayBills = getters.billsByMonth.filter(_ => BillType.isOutlay(_.type))
      outlayBills.forEach(({ category, amount }) => {
        const categoryName = (state.categoryMap[category] || {}).name || '无'
        categorySum[categoryName] === undefined
          ? categorySum[categoryName] = amount
          : categorySum[categoryName] += amount
      })
      return Object.entries(categorySum)
        .map(([key, value]) => ({ categoryName: key, total: value }))
        .sort((a, b) => b.total - a.total)
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
    },
    SET_MONTH(state, month) {
      state.activeMonth = month
    },
    SET_CATEGORY_ID(state, categoryId) {
      state.activeCategoryId = categoryId
    },
    ADD(state, bill) {
      state.bills.unshift(bill)
    }
  }
})
