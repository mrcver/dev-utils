<template>
  <div class="app-container">
    <base-tool
      ref="base"
      encode-btn-name="Demo"
      decode-btn-name="Jwt解密"
      :decode-action="decodeText"
      :encode-action="encodeText"
    />
  </div>
</template>
<script>
import BaseTool from '@/components/Tool/base'
import jwt_decode from 'jwt-decode'

export default {
  components: { BaseTool },
  methods: {
    encodeText() {
      this.$refs.base.originText = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      this.decodeText()
    },
    decodeText() {
      try {
        const jwtObj = jwt_decode(this.$refs.base.originText)
        this.$refs.base.transferText = JSON.stringify(jwtObj, null, '  ')
      } catch (e) {
        this.$message.error('jwt解密失败')
      }
    }
  }
}
</script>

<style scoped>

</style>
