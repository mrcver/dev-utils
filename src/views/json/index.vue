<template>
  <div class="app-container">
    <div class="margin-bottom">
      <el-button @click="addJsonEditor">+</el-button>
      <el-button @click="reduceJsonEditor">-</el-button>
    </div>
    <el-row>
      <el-col v-for="(d,index) in counter" :key="index" :span="11" class="margin-right margin-bottom">
        <vue-json-editor
          :expanded-on-start="true"
          :mode="mode"
          :lang="lang"
          :show-btns="false"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'

export default {
  components: {
    vueJsonEditor
  },
  data() {
    return {
      mode: 'code',
      lang: 'zh',
      counter: [1]
    }
  },
  methods: {
    addJsonEditor() {
      this.counter.push(this.counter.length)
    },
    reduceJsonEditor() {
      this.counter.pop()
    }
  }
}
</script>

<style scoped>
.margin-bottom{
  margin-bottom: 10px;
}
.margin-right{
  margin-right: 10px;
}
</style>
