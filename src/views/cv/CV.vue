<template>
  <div class="cv">
    <dl class="basic-info">
      <dt>name:</dt>
      <dd>圆企鹅</dd>
      <dt>职介:</dt>
      <dd>ruler</dd>
      <dt>特殊职介:</dt>
      <dd>berserker (圆企鹅·Alter)</dd>
      <dt>技能1:</dt>
      <dd>js、ts、html、css</dd>
      <dt>技能2:</dt>
      <dd>canvas</dd>
      <dt>技能3:</dt>
      <dd>nodejs、java</dd>
      <dt>宝具:</dt>
      <dd>(太弱了，没有宝具)</dd>
      <dt>落地时长:</dt>
      <dd>4年</dd>
      <dt>github:</dt>
      <dd><a href="https://github.com/roco2015">roco2015</a></dd>
      <dt>email:</dt>
      <dd>roco2015@163.com</dd>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CV extends Vue {}
</script>

<style lang="less" scoped>
.cv {
  margin: 15px;
  dt {
    float: left;
    padding-right: 10px;
  }
  dd {
    color: #414a60;
    text-align: right;
  }
}
</style>
