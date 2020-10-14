<template>
  <footer class="footer">
    <div class="content">
      <div class="col col1">
        <p>你是<span class="stress">光</span> 永不萧瑟</p>
        <p>是人间 <span class="stress">无双</span>颜色</p>
        <p><span class="stress">不觉中</span> 降落在我眼瞳</p>
      </div>
      <div class="col col2">
        <p>Email: roco2015@163.com</p>
        <p>name: 圆企鹅·Alter</p>
      </div>
    </div>
    <div class="copyright">
      <span class="item">Copyright &copy; 圆企鹅</span>
      <a class="item" target="_blank" href="https://www.beian.miit.gov.cn/">辽ICP备2020012261号-1</a>
      <a
        class="item"
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21011402000290"
      >
        <img src="/img/icons/beian.png" class="beian" />
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
  margin: 0 auto;
  height: 300px;
  background: black;
  color: white;
  font-size: 12px;
  overflow: hidden;
  filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.5));
  &::before {
    content: '';
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(34, 39, 57, 0.8) url('~@/assets/images/footer-bg.jpg') no-repeat center top;
    background-size: cover;
    background-blend-mode: multiply;
  }
}
.content {
  display: flex;
  position: relative;
  z-index: 2;
  width: 950px;
  margin: 0 auto;
  padding-top: 30px;
  line-height: 2;
  font-size: 16px;
  text-align: center;
  .col {
    flex: 1;
  }
}

.copyright {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  justify-content: center;
  .beian {
    float: left;
    margin-top: 3px;
  }
  .item {
    margin-right: 30px;
    white-space: nowrap;
    color: white;
  }
}
@media (max-width: 950px) {
  .content {
    width: 100%;
  }
}
</style>
