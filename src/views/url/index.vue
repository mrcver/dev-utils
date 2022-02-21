<template>
  <div class="app-container">
    <div>
      <el-input v-model="originText" type="textarea" />
    </div>
    <div>
      <el-button type="primary" @click="encodeText">Url编码</el-button>
      <el-button type="primary" @click="decodeText">Url解码</el-button>
      <el-button type="primary" @click="clearText">清空</el-button>
    </div>
    <div>
      <el-input v-model="transferText" type="textarea" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originText: '',
      transferText: ''
    }
  },
  methods: {
    encodeText() {
      this.transferText = encodeURI(this.originText)
    },
    decodeText() {
      this.originText = decodeURI(this.transferText)
    },
    clearText() {
      this.originText = ''
      this.transferText = ''
    }
  }
}
</script>

<style scoped>
</style>

