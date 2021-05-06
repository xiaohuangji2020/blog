<template>
  <footer class="footer">
    <div class="copyright">
      <router-link :to="{ name: 'cv' }">Copyright &copy; 圆企鹅</router-link>
      <a target="_blank" href="https://beian.miit.gov.cn/">辽ICP备2020012261号-1</a>
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21011402000290">
        <img src="/img/icons/beian.png" class="icon" />
        <p>辽公网安备 21011402000290号</p>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  margin: 30px auto 0;
  height: 50px;
  color: white;
  font-size: 14px;
  overflow: hidden;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5));
}

.copyright {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  a {
    margin-right: 30px;
    white-space: nowrap;
    color: white;
  }
  .icon {
    float: left;
    width: 14px;
    height: 14px;
    margin-top: 6px;
  }
}
</style>
