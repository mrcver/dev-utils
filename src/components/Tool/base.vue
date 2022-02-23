<template>
  <el-row>
    <el-col :span="10" class="right-padding">
      <div class="tool-buttons">
        <el-button type="primary" @click="encodeAction">{{ encodeBtnName }}</el-button>
        <el-button type="primary" @click="decodeAction">{{ decodeBtnName }}</el-button>
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
</template>

<script>
import Cpp from '@/components/Cpp'
export default {
  name: 'BaseTool',
  components: {
    Cpp
  },
  props: {
    encodeBtnName: {
      type: String,
      require: true
    },
    decodeBtnName: {
      type: String,
      require: true
    },
    encodeAction: {
      type: Function
    },
    decodeAction: {
      type: Function
    }
  },
  data() {
    return {
      originText: '',
      transferText: ''
    }
  },
  methods: {
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

