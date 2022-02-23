<template>
  <div class="app-container">
    <el-row>
      <el-col :span="10" class="right-padding">
        <div class="tool-buttons">
          <el-button type="primary" @click="encodeText">Base64加密</el-button>
          <el-button type="primary" @click="decodeText">Base64解密</el-button>
          <el-button type="primary" @click="clearText">清空</el-button>
        </div>
        <div>
          <el-input
            v-model="originText"
            type="textarea"
            rows="20"
            :show-word-limit="true"
          />
        </div>
      </el-col>
      <el-col :span="10">
        <div class="tool-buttons">
          <cpp />
        </div>
        <div>
          <el-input
            id="transferText"
            v-model="transferText"
            type="textarea"
            rows="20"
            readonly
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import Cpp from '@/components/Cpp'
export default {
  components: {
    Cpp
  },
  data() {
    return {
      originText: '',
      transferText: ''
    }
  },
  methods: {
    encodeText() {
      this.transferText = Buffer.from(this.originText, 'utf-8').toString('base64')
    },
    decodeText() {
      this.transferText = Buffer.from(this.originText, 'base64').toString('utf-8')
    },
    clearText() {
      this.originText = ''
      this.transferText = ''
    },
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
.right-padding {
  margin-right: 10px;
}

.tool-buttons {
  margin-bottom: 10px;
}
</style>

