<template>
  <div class="bill-analysis">
    <div class="bill-analysis__in-out">
      <span>{{ showMonth }}</span>
      <label>收入：</label>
      <span>{{ totalIncomeAmount }}</span>
      <label>支出：</label>
      <span>{{ totalOutlayAmount }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BillAnalysis',
  computed: {
    ...mapState(['activeMonth']),
    ...mapGetters(['totalIncomeAmount', 'totalOutlayAmount']),
    showMonth() {
      return !this.activeMonth ? '全部' : `${this.activeMonth} 月`
    }
  }
}
</script>

<style lang="less">
.bill-analysis {
  width: 100%;
  height: 100%;
}
</style>
