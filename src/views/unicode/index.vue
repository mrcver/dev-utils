<template>
  <div class="app-container">
    <base-tool
      ref="base"
      encode-btn-name="中文转unicode"
      decode-btn-name="unicode转中文"
      :decode-action="decodeText"
      :encode-action="encodeText"
    />
  </div>
</template>

<script>
import BaseTool from '@/components/Tool/base'

export default {
  components: {
    BaseTool
  },
  methods: {
    encodeText() {
      // this.$refs.base.transferText = unescape(this.$refs.base.originText.replace(/\\u/g, '%u'))
      this.$refs.base.transferText = this.toUnicode(this.$refs.base.originText)
    },
    decodeText() {
      // this.$refs.base.transferText = escape(this.$refs.base.originText).replace(/\%u/g, '\\u')
      this.$refs.base.transferText = this.toChinese(this.$refs.base.originText)
    },
    toUnicode(data) {
      if (data === '' || typeof data === 'undefined') {
        return '请输入汉字'
      }
      let str = ''
      for (let i = 0; i < data.length; i++) {
        str += '\\u' + (data.charCodeAt(i).toString(16).padStart(4, '0'))
      }
      return str
    },
    toChinese(data) {
      if (data === '' || typeof data === 'undefined') {
        return '请输入十六进制unicode'
      }
      data = data.split('\\u')
      let str = ''
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        str += String.fromCharCode(parseInt(data[i], 16).toString(10))
      }
      return str
    }
  }
}
</script>

<style scoped>
</style>

