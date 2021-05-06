<template>
  <div class="wrap">
    <note-title title="coding better" date="2021-05-04 01:23:45" author="圆企鹅·ruler"></note-title>
    <dl class="content">
      <dt>1. 相同逻辑判断代码放到一起</dt>
      <dd>a. 能放到一起尽量收束到一处，挨着写。不要随心所欲，到处都是</dd>
      <dd>b. 同一组逻辑实际都是应该拆分方法的，如果没有也尽量也到一起，至少能让人看懂同一组逻辑内都做了什么</dd>

      <dt>2. 处理同一组同一类东西，写的代码要相似，尽量同一种处理方式</dt>
      <dd>a. 兼容旧代码时，可以利用下适配器模式</dd>

      <dt>3. 方法间不要传递一堆没用的参数，高内聚低耦合，方法自己能做的事，就不要传一堆参数让下一个方法做</dt>
      <dd>a. e.g.子组件给父组件传了6个参数，父组件用这6个参数做了一件事。那为什么不能子组件自己做这6件事呢</dd>

      <dt>4. 一个类内部，自己的变量变成什么，需要自己掌控</dt>
      <dd>a. 外部函数，不要直接修改另一个类里的变量</dd>

      <dt>5. 函数不要干太多不相干的事，命名尽量包含全部做的事</dt>
      <dd>a. 标准是一个函数只做一件事，但实际也不用完全遵守</dd>

      <dt>6. 当写判断逻辑时，一定要用正确的变量判断，不要因为某个变量凑巧可以区分就用他来判断</dt>
      <dd>e.g. 有一个判断，判断回款金额是否为负，是则不能编辑。</dd>
      <dd>但实际回款金额是否为负，由回款状态决定。这时候应该用状态来判断</dd>
      <dd>不能以当前需求满足为标准。比如说之后就出了一个需求：回款金额，可以为负了</dd>

      <dt>7. 尽量使用纯函数，少用全局变量</dt>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NoteTitle from '@/views/note/components/NoteTitle.vue';

@Component({
  components: {
    NoteTitle
  }
})
export default class CodingBetter extends Vue {}
</script>

<style lang="less" scoped>
.content {
  line-height: 2;
  dt {
    margin-top: 3em;
  }
  dd {
    margin-left: 4em;
  }
}
</style>
