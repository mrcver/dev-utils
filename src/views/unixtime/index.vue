<template>
  <div class="app-container">
    <div>
      <el-input v-model="originText" type="textarea" placeholder="时间戳" />
    </div>
    <div>
      <el-button type="primary" @click="getCurrentUnixTime">获取时间戳</el-button>
      <el-button type="primary" @click="encodeText">时间戳格式化</el-button>
      <el-button type="primary" @click="decodeText">日期转时间戳</el-button>
      <el-button type="primary" @click="clearText">清空</el-button>
    </div>
    <div>
      <el-input v-model="transferText" type="textarea" placeholder="日期" />
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
    getCurrentUnixTime() {
      const date = Date.now()
      this.originText = Math.floor(date / 1000)
    },
    encodeText() {
      const date = new Date(this.originText * 1000)
      this.transferText = date.getFullYear() +
        '-' + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
        '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
        ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    },
    decodeText() {
      const date = new Date(this.transferText)
      this.originText = Math.floor(date / 1000)
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

