<template>
  <div class="app-container">
    <div>
      <el-input v-model="originText" type="textarea" />
    </div>
    <div>
      <el-button type="primary" @click="encodeText">Base64加密</el-button>
      <el-button type="primary" @click="decodeText">Base64解密</el-button>
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
    // eslint-disable-next-line vue/no-dupe-keys
    encodeText() {
      this.transferText = Buffer.from(this.originText, 'utf-8').toString('base64')
    },
    // eslint-disable-next-line vue/no-dupe-keys
    decodeText() {
      this.originText = Buffer.from(this.transferText, 'base64').toString('utf-8')
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

