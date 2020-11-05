<template>
  <div class="highlight-coder">
    <pre>
      <code class="typescript"><slot></slot></code>
    </pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import hljs from 'hljs';
@Component({
  name: 'coder'
})
export default class Coder extends Vue {
  private mounted() {
    // 为了样式统一，所以和updated用了同一个方法
    this.updateSlot();
  }
  private updated() {
    // slot变更后，只调用highlightBlock，不会更新html，所以要强制更新下innerHTML
    this.updateSlot();
  }

  private updateSlot() {
    const slot = this.$slots.default;
    if (!slot) {
      return;
    }
    this.$el.children[0].children[0].innerHTML = slot[0].text || '';
    hljs.highlightBlock(this.$el.children[0]);
    hljs.lineNumbersBlock(this.$el.children[0]);
  }
}
</script>
<style lang="less">
.highlight-coder {
  line-height: 26px;
  td,
  span {
    font-family: Consolas, 'Courier New', Courier, monospace;
  }
}
.hljs-ln {
  tr:first-of-type .hljs-ln-code {
    text-indent: -2em;
  }
}
/* for block of numbers */
.hljs-ln-numbers {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  text-align: center;
  color: #ccc;
  border-right: 1px solid #ccc;
  vertical-align: top;
  padding-right: 5px;

  /* your custom style here */
}

/* for block of code */
.hljs-ln-code {
  padding-left: 10px;
}
</style>
