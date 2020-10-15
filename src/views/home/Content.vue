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
      query: 'ajax'
    },
    {
      id: 2,
      title: '照片墙',
      subTitle: '操作dom了',
      query: 'picWall'
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
