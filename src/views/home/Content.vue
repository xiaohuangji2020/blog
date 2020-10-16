<template>
  <main class="main">
    <section class="appear-animation sec-banner"></section>
    <section class="sec-note">
      <h3>笔记</h3>
      <div class="inner">
        <note-box v-for="note of noteList" :key="note.id" :note="note"></note-box>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NoteBox from './components/NoteBox.vue';

@Component({
  components: {
    NoteBox
  }
})
export default class Content extends Vue {
  private noteList = [
    {
      id: 1,
      title: 'ajax防重复点击',
      subTitle: '通过拦截请求实现',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd3Y9jPn2MSQoW2daGqh1O7EP0'
    },
    {
      id: 2,
      title: '照片墙',
      subTitle: '操作dom了',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd2ODRC01FDQrn2RyEmE1gppMW'
    },
    {
      id: 3,
      title: 'webpack添加打包参数，添加环境变量',
      subTitle: 'vue版',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd0rFAwD08T4zN20JL4g3h1UcB'
    },
    {
      id: 4,
      title: 'webpack打包优化',
      subTitle: 'vue版',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd2jEO8416uA9F2pNgNP1aCdwI'
    },
    {
      id: 5,
      title: 'v-for中的key，以及key的单独用法',
      subTitle: '·',
      url: 'https://8c70426d.wiz03.com/wapp/pages/view/share/s/2cs49J0WR4nJ2Drsge2YCvTd3cfFKR01JAFx2-XbIR2_aQYt'
    }
  ];
}
</script>

<style lang="less" scoped>
.main {
  width: 950px;
  margin: 0 auto;
  padding: 0 15px;
  line-height: 34px;
}
.sec-banner {
  position: relative;
  height: 250px;
  background: url('~@/assets/images/home/banner1.png') no-repeat center;
  background-size: contain;
  border-radius: 20px;
  box-shadow: 0 12px 50px -30px rgba(0, 0, 0, 0.6);
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    width: 30px;
    height: 30px;
  }
  &::before {
    left: 10px;
    background: url('~@/assets/images/pin2.png') no-repeat center;
    background-size: contain;
    transform: rotateY(180deg);
  }
  &::after {
    right: 10px;
    background: url('~@/assets/images/pin1.png') no-repeat center;
    background-size: contain;
  }
}
.sec-note {
  margin-top: 60px;
  .inner {
    display: flex;
    position: relative;
    flex-flow: row wrap;
    margin: 0 -15px;
  }
}
@media (max-width: 950px) {
  .main {
    width: 100%;
  }
}
</style>
