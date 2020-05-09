<template>
  <div class="bill-add">
    <button @click="open">记账</button>
    <div v-if="showDialog" class="bill-add__dialog-mask" @click="showDialog = false">
      <div class="bill-add__dialog" @click.stop>
        <div class="bill-add__form-row">
          <label>账单类型</label>
          <label for="income">收入</label>
          <input id="income" type="radio" v-model="edit.type" :value="BillType.INCOME.value">
          <label for="outlay">支出</label>
          <input id="outlay" type="radio" v-model="edit.type" :value="BillType.OUTLAY.value">
        </div>
        <div class="bill-add__form-row">
          <label>账单时间</label>
          <input type="date" v-model="edit.time">
        </div>
        <div class="bill-add__form-row">
          <label>账单分类</label>
          <select v-model="edit.category">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
        <div class="bill-add__form-row">
          <label>账单金额</label>
          <input type="number" v-model="edit.amount">
        </div>
        <button @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { BillType } from '../constant'
import { mapState } from 'vuex'

// TODO: Different category options for different bill type

export default {
  name: 'BillAdd',
  data() {
    return {
      BillType,
      showDialog: false,
      edit: {
        type: BillType.INCOME.value,
        time: '',
        category: '',
        amount: ''
      }
    }
  },
  computed: {
    ...mapState(['categories'])
  },
  methods: {
    open() {
      this.edit.type = BillType.INCOME.value
      this.edit.time = ''
      this.edit.category = ''
      this.edit.amount = ''
      this.showDialog = true
    },
    confirm() {
      // TODO: Validate the input
      const model = { ...this.edit }
      model.amount = Number(model.amount)
      model.time = dayjs(model.time).valueOf()
      this.$store.commit('ADD', model)
      this.showDialog = false
    }
  }
}
</script>

<style lang="less">
.bill-add {
  &__dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  &__dialog {
    width: 500px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
  }
}
</style>
