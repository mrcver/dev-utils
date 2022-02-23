<template>
  <div class="app-container">
    <base-tool
      ref="base"
      encode-btn-name="Base64加密"
      decode-btn-name="Base64解密"
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
      this.$refs.base.transferText = Buffer.from(this.$refs.base.originText, 'utf-8').toString('base64')
    },
    decodeText() {
      this.$refs.base.transferText = Buffer.from(this.$refs.base.originText, 'base64').toString('utf-8')
    }
  }
}
</script>

<style scoped>
</style>

