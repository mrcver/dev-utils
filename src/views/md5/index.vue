<template>
  <div class="app-container">
    <div class="tool-buttons">
      <el-button type="primary" @click="doMd5">加密</el-button>
      <el-button type="primary" @click="clearText">清空</el-button>
    </div>
    <el-row>
      <el-col :span="10" class="right-padding">
        <div class="margin-top">
          <el-input
            v-model="originText"
            type="textarea"
            rows="10"
            :show-word-limit="true"
          />
        </div>
      </el-col>
      <el-col :span="10">
        <div class="margin-top">
          <el-input id="transferText" v-model="transferText" readonly>
            <template slot="prepend">32小写</template>
            <el-button slot="append" class="copy-btn" @click="copy(transferText)">
              复制
            </el-button>
          </el-input>
        </div>
        <div class="margin-top">
          <el-input id="transferText2" v-model="transferText2" readonly>
            <template slot="prepend">32大写</template>
            <el-button slot="append" class="copy-btn" @click="copy(transferText2)">
              复制
            </el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

const crypto = require('crypto')
export default {
  data() {
    return {
      originText: '',
      transferText: '',
      transferText2: ''
    }
  },
  methods: {
    md5(text) {
      const md5 = crypto.createHash('md5')
      return md5.update(text).digest('hex').toLowerCase()
    },
    doMd5() {
      if (this.originText.length > 0) {
        this.transferText = this.md5(this.originText)
        this.transferText2 = this.transferText.toUpperCase()
      }
    },
    clearText() {
      this.originText = ''
      this.transferText = ''
      this.transferText2 = ''
    },
    copy(value) {
      const clipboard = new Clipboard('.copy-btn', {
        text() {
          return value
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
.margin-top {
  margin-top: 10px;
}

.right-padding {
  margin-right: 10px;
}
</style>
