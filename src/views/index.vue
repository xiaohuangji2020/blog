<template>
  <div class="index">
    <div class="bg">
      <ul v-for="rIndex of rowCount" :key="rIndex">
        <li v-for="cIndex of colCount" :key="cIndex" :class="`b-${rIndex}-${cIndex}`" class="bg-block"></li>
      </ul>
    </div>
    <h1>Welcome! <span>and emmm~~~~</span></h1>
    <my-nav></my-nav>
    <main class="main">
      <ul class="intro-l">
        <li>完全不知道要写些什么</li>
        <li>不是文人、也不是墨客的<span class="stress">理科生</span></li>
        <li>脑回路或者说<span class="stress">精神</span>有点不正常</li>
        <li>自定义职介为：<span class="stress">Berserker</span></li>
        <li>看见我的<span class="stress">小狼狗</span>了吗</li>
      </ul>
      <ul class="intro-r">
        <li>就是想<span class="stress">搞</span>个博客玩玩</li>
        <li>是<span class="stress">废柴</span>哦</li>
        <li>吃我一掌，<span class="stress">产品</span></li>
        <li>对产品<span class="stress">宝具</span>砍需求，rm -rf&lt;overcharge时效果提升&gt;</li>
        <li>快出来，叫你呢</li>
      </ul>
    </main>
    <div class="separator"></div>
    <div class="author">powered by 圆企鹅·Alter</div>
    <div class="record">辽ICP备2020012261号-1</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myNav from '@/views/common/nav.vue';
import $ from 'jquery';

@Component({
  components: {
    myNav
  }
})
export default class ModalEdit extends Vue {
  private navList: string[] = ['首页', '技术', '简历', '关于'];
  private rowCount = 0;
  private colCount = 0;
  private randomAction = false;
  private mounted() {
    this.colCount = Math.ceil(document.body.clientWidth / 55);
    this.rowCount = Math.ceil(document.body.clientHeight / 55);
    this.$nextTick(() => {
      $('.bg-block').each((index: number, el: Element) => {
        $(el).on('animationend', (event: Event) => {
          $(event.target).removeClass('action');
        });
      });
    });
    this.actionBg();
  }

  private actionBg() {
    setTimeout(() => {
      const rIndex = Math.round(Math.random() * this.rowCount);
      const cIndex = Math.round(Math.random() * this.colCount);
      $(`.b-${rIndex}-${cIndex}`).addClass('action');
      this.actionBg();
    }, 3000);
  }
}
</script>

<style lang="less" scoped>
.index {
  min-height: 100vh;
}
h1 {
  position: absolute;
  top: 20%;
  left: 10%;
  color: white;

  span {
    padding-left: 10px;
    font-size: 18px;
  }
}
.main {
  display: flex;
  position: relative;
  padding-top: 250px;
  line-height: 34px;

  .intro-l {
    flex: 1;
    margin-right: 20px;
    text-align: right;
  }

  .intro-r {
    flex: 1;
    margin-left: 20px;
    text-align: left;
  }

  .stress {
    padding: 0 2px;
    font-size: 20px;
    font-weight: bold;
    filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.4));
  }
}
.separator {
  position: absolute;
  left: 50%;
  width: 800px;
  height: 3px;
  margin-top: 30px;
  background: rgba(44, 62, 80, 0.5);
  transform: translateX(-50%);
}
.author {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: white;
}
.record {
  position: absolute;
  bottom: 5px;
  left: 50px;
  color: white;
  font-size: 12px;
}
.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ul {
    display: flex;
  }
  .bg-block {
    position: relative;
    width: 55px;
    height: 55px;
    background: url(~@/assets/images/bg-1.png) repeat;
    opacity: 0.5;
  }
  .action {
    transform-origin: left bottom;
    animation: my-index-bg-action 1s ease-in;
    z-index: 9;
  }
}
</style>
