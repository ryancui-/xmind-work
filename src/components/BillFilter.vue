<template>
  <div class="bill-filter">
    <select v-model="month">
      <option :value="null">全部</option>
      <option v-for="month in availableMonths" :key="month" :value="month + 1">{{ month + 1 }} 月</option>
    </select>
    <select v-model="category">
      <option :value="null">全部</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
    </select>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BillFilter',
  computed: {
    ...mapState(['activeMonth', 'activeCategoryId', 'categories']),
    ...mapGetters(['availableMonths']),
    month: {
      get() {
        return this.activeMonth
      },
      set(val) {
        this.$store.commit('SET_MONTH', val)
      }
    },
    category: {
      get() {
        return this.activeCategoryId
      },
      set(val) {
        this.$store.commit('SET_CATEGORY_ID', val)
      }
    }
  }
}
</script>

<style lang="less">
.bill-filter {

}
</style>
