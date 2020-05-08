<template>
  <div id="app">
    <div>{{ bills }}</div>
    <div>{{ categories }}</div>
  </div>
</template>

<script>
import bills from '@/assets/bill.csv'
import categories from '@/assets/categories.csv'
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['bills', 'categories'])
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
