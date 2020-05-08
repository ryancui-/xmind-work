<template>
  <div id="app">
    <bill-table :bills="showBills" />
  </div>
</template>

<script>
import bills from '@/assets/bill.csv'
import categories from '@/assets/categories.csv'
import BillTable from '@/components/BillTable'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    BillTable
  },
  computed: {
    ...mapGetters(['showBills'])
  },
  created() {
    this.$store.commit('INIT', { bills, categories })
  }
}
</script>

<style lang="less">
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
