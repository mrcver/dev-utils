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

