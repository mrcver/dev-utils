<template>
  <div class="dashboard-container">
    <ul>
      <li><router-link :to="{name:'Base64'}">Base64加解密</router-link></li>
      <li><router-link :to="{name:'Url'}">Url Encode/Decode</router-link></li>
      <li><router-link :to="{name:'JSON'}">JSON工具</router-link></li>
      <li><router-link :to="{name:'Time'}">时间戳工具</router-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
ul li{
  margin: 10px auto;
}
</style>
