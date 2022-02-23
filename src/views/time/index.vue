<template>
  <div class="app-container">
    <div>
      <el-button type="primary" @click="getCurrentUnixTime">获取时间戳</el-button>
      <el-button type="primary" @click="encodeText">时间戳格式化</el-button>
      <el-button type="primary" @click="clearText">清空</el-button>
    </div>

    <el-form>
      <el-row>
        <el-col :span="6">
          <el-form-item label="请输入10位时间戳或者完整的日期">
            <el-input v-model="inputTime" type="text" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="margin-left">
          <el-form-item label="上海时间">
            <el-input v-model="normalDate" type="text" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="当年第几天">
            <el-input v-model="dayOfYear" type="text" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="margin-left">
          <el-form-item label="UTC时间">
            <el-input v-model="utcDate" type="text" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="当年第几个星期">
            <el-input v-model="weekOfYear" type="text" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="margin-left">
          <el-form-item label="Unix time">
            <el-input v-model="unixTime" type="text" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="星期几">
            <el-input v-model="weekNumber" type="text" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputTime: '',
      unixTime: '',
      normalDate: '',
      utcDate: '',
      dayOfYear: '',
      weekOfYear: '',
      weekNumber: ''
    }
  },
  methods: {
    clearText() {
      this.inputTime = ''
      this.unixTime = ''
      this.normalDate = ''
      this.utcDate = ''
      this.dayOfYear = ''
      this.weekOfYear = ''
      this.weekNumber = ''
    },
    getCurrentUnixTime() {
      const date = this.getCNDate()
      this.inputTime = Math.floor(date / 1000)
      this.encodeText()
    },
    encodeText() {
      if (!this.inputTime) {
        this.$message.error('请输入10位时间戳或者完整的日期')
        return
      }
      let date
      console.log(typeof this.inputTime, this.inputTime)
      if (typeof this.inputTime === 'number' || (typeof this.inputTime === 'string' && this.inputTime.length === 10)) {
        date = new Date(this.inputTime * 1000)
      } else {
        date = new Date(this.inputTime)
      }
      if (isNaN(date)) {
        this.$message.error('输入格式错误')
        return
      }
      this.outNormalDate(date)
      this.outUnixTime(date)
      this.outUtcDate(date)
      this.outDateOfYear(date)
      this.outWeekOfYear(date)
      this.outWeekNumber(date)
    },
    outNormalDate(date) {
      this.normalDate = date.getFullYear() +
        '-' + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
        '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
        ' ' + date.getHours() +
        ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
        ':' + date.getSeconds()
    },
    outUnixTime(date) {
      this.unixTime = Math.floor(date / 1000)
    },
    outUtcDate(date) {
      this.utcDate = date.getFullYear() +
        '-' + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
        '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
        ' ' + ((date.getHours() - 8) < 10 ? '0' + (date.getHours() - 8) : (date.getHours() - 8)) +
        ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
        ':' + date.getSeconds()
    },
    getCNDate() {
      return new Date(new Date().getTime() + (parseInt(new Date().getTimezoneOffset() / 60) + 8) * 3600 * 1000)
    },
    outDateOfYear(date) {
      this.dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
    },
    outWeekOfYear(date) {
      const oneJan = new Date(date.getFullYear(), 0, 1)
      const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000))
      this.weekOfYear = Math.ceil((date.getDay() + 1 + numberOfDays) / 7)
    },
    outWeekNumber(date) {
      const day = date.getDay()
      const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      this.weekNumber = weeks[day]
    }
  }
}
</script>

<style scoped>
.margin-left{
  margin-right: 10px;
}
</style>

