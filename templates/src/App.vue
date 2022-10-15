<template>
  <div id="app">
    <el-button>绘制图形</el-button>
    <el-button>清空图形</el-button>
    <layout />
  </div>
</template>

<script>

import layout from "./views/layout.vue"
export default {
  name: 'App',
  components: { layout },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
