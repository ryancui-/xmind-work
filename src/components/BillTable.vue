<template>
  <div class="bill-table">
    <div class="bill-table__header">
      <span>账单类型</span>
      <span>账单时间</span>
      <span>账单分类</span>
      <span>账单金额</span>
    </div>
    <div class="bill-table__body">
      <div v-for="bill in bills" :key="bill.id" class="bill-table__row">
        <span>{{ bill.type }}</span>
        <span>{{ bill.time }}</span>
        <span>{{ bill.category }}</span>
        <span>{{ bill.amount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillTable',
  props: {
    bills: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less">
.bill-table {
  width: 100%;
  height: 100%;
  &__header {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    box-sizing: border-box;
    padding: 0 50px;
    span {
      flex: 1;
    }
  }
  &__body {
    height: calc(100% - 50px);
    overflow: auto;
  }
  &__row {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 13px;
    box-sizing: border-box;
    padding: 0 50px;
    span {
      flex: 1;
    }
  }
}
</style>
