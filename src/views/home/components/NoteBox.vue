<template>
  <a :href="note.url" target="_blank" class="appearanimation box">
    <h5 class="title">{{ note.title }}</h5>
    <div class="sub-title">{{ note.subTitle }}</div>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NoteBox extends Vue {
  @Prop({ type: Object }) private note!: object;
}
</script>

<style lang="less" scoped>
.box {
  margin: 15px;
  padding: 20px 30px;
  color: #414a60;
  overflow: hidden;
  box-shadow: 0 9px 25px -22px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: transform 0.2s linear;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s linear;
  }
  &:hover {
    transform: translateY(-5px);
    &::before {
      opacity: 1;
    }
  }

  .title {
    font-size: 14px;
  }

  .sub-title {
    font-size: 12px;
    opacity: 0.9;
  }
}
</style>
