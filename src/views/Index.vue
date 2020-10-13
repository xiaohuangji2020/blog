<template>
  <div class="index">
    <my-nav></my-nav>
    <main class="main">
      <ul class="intro-l">
        <li>完全不知道要写些什么</li>
        <li>不是文人、也不是墨客的<span class="stress">理科生</span></li>
        <li>脑回路或者说<span class="stress">精神</span>有点不正常</li>
      </ul>
      <ul class="intro-r">
        <li>就是想<span class="stress">搞</span>个博客玩玩</li>
        <li>是<span class="stress">废柴</span>哦</li>
        <li>自定义职介为：<span class="stress">Berserker</span></li>
      </ul>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myNav from '@/views/common/Nav.vue';
import myFooter from '@/views/common/Footer.vue';
import $ from 'jquery';

@Component({
  components: {
    myNav,
    myFooter
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
    // this.actionBg();
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
  margin: 0 auto;
}
.main {
  display: flex;
  position: relative;
  width: 950px;
  margin: 0 auto;
  padding-top: 150px;
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
}
</style>
