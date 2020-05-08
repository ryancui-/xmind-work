<template>
  <div id="app">
    <div class="app-header">
      <bill-filter />
    </div>
    <div class="app-body">
      <bill-table :bills="showBills" class="app-body__table" />
      <bill-analysis class="app-body__analysis" />
    </div>
  </div>
</template>

<script>
import bills from '@/assets/bill.csv'
import categories from '@/assets/categories.csv'
import BillTable from '@/components/BillTable'
import BillFilter from '@/components/BillFilter'
import BillAnalysis from '@/components/BillAnalysis'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    BillTable,
    BillFilter,
    BillAnalysis
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
@header-height: 80px;
@gap: 10px;

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  box-sizing: border-box;
  padding: @gap;
}
.app-header {
  height: @header-height;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: @gap;
}
.app-body {
  height: calc(100% - @header-height - @gap);
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &__table {
    flex: 2;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    margin-right: @gap;
  }
  &__analysis {
    flex: 1;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
}
</style>
