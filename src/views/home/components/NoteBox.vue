<template>
  <div class="appearanimation box">
    <a :href="note.url" :target="target" class="link">
      <h5 class="title">{{ note.title }}</h5>
      <div class="sub-title">{{ note.subTitle }}</div>
    </a>
    <div class="footer">
      <router-link v-if="note.demo" :to="{ name: 'demo', params: { name: note.demo } }" class="item">demo</router-link>
      <a v-if="note.code" :href="note.code" target="_blank" class="item">code</a>
    </div>
  </div>
</template>

<script lang="ts">
interface Note {
  id: number;
  title: string;
  subTitle?: string;
  url?: string;
  demo?: string;
  code?: string;
}

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NoteBox extends Vue {
  @Prop({ type: Object }) private note!: Note;
  get target() {
    if (!this.note.url || this.note.url === 'javascript:;') {
      return '_self';
    }
    return '_blank';
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-flow: column;
  position: relative;
  margin: 15px;
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

  .link {
    padding: 20px 30px;
    color: #414a60;
  }

  .title {
    font-size: 14px;
  }

  .sub-title {
    font-size: 12px;
    opacity: 0.9;
  }

  .footer {
    margin-top: -20px;
    line-height: 20px;
    background: rgba(0, 0, 0, 0.1);
    font-size: 12px;
    .item {
      display: block;
      position: relative;
      height: 20px;
      padding: 0 30px;
      color: #414a60;
      &::before {
        content: '';
        position: absolute;
        left: 16px;
        top: 50%;
        width: 6px;
        height: 6px;
        background: #f6f6f8;
        border-radius: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
