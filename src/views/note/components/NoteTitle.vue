<template>
  <div class="title-box">
    <h3 class="title">{{ title }}</h3>
    <div class="sub-title">
      <div class="time">{{ date }}</div>
      <div class="author">by: {{ author }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class NoteTitle extends Vue {
  @Prop({ type: String }) private title!: string;
  @Prop({ type: String }) private date!: string;
  @Prop({ type: String, default: '' }) private author!: string;
}
</script>

<style lang="less" scoped>
.title-box {
  position: sticky;
  top: 0;
  z-index: 11;
  margin-bottom: 20px;
}
.sub-title {
  display: flex;
  justify-content: space-between;
}
.time {
  color: @gray;
}
</style>
