<template>
  <div>
    <el-button
      id="copyBtn"
      type="primary"
      data-clipboard-action="copy"
      data-clipboard-target="#transferText"
      icon="el-icon-copy-document"
      @click="copy"
    >复制</el-button>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  name: 'Cpp',
  methods: {
    copy() {
      if (this.transferText === '') {
        this.$message.error('内容为空，无法复制')
        return
      }
      const clipboard = new Clipboard('#copyBtn', {
        text() {
          console.log(this.transferText)
          return this.transferText
        }
      })
      clipboard.on('success', e => {
        this.$message.success('复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        this.$message.error('复制失败')
        // 释放内存
        clipboard.destroy()
      })
    }
  }
}
</script>

<style scoped>

</style>
