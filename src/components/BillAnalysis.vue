<template>
  <div class="bill-analysis">
    <div class="bill-analysis__in-out">
      <p>{{ showMonth }}收入支出统计：</p>
      <label>收入：</label>
      <span>{{ totalIncomeAmount }}</span>
      <label>支出：</label>
      <span>{{ totalOutlayAmount }}</span>
    </div>
    <div class="bill-analysis__category-total">
      <p>{{ showMonth }}分类账单统计：</p>
      <div
        v-for="summary in outlayAnalysisByCategory"
        :key="summary.categoryName"
        class="bill-analysis__category-row"
      >
        {{ summary.categoryName }}：{{ summary.total }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BillAnalysis',
  computed: {
    ...mapState(['activeMonth']),
    ...mapGetters(['totalIncomeAmount', 'totalOutlayAmount', 'outlayAnalysisByCategory']),
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
