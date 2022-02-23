<template>
  <div class="app-container">
    <base-tool
      ref="base"
      encode-btn-name="Url编码"
      decode-btn-name="Url解码"
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
      this.$refs.base.transferText = encodeURI(this.$refs.base.originText)
    },
    decodeText() {
      this.$refs.base.transferText = decodeURI(this.$refs.base.originText)
    }
  }
}
</script>

<style scoped>
</style>

