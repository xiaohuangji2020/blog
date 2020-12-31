<template>
  <div>
    <note-head></note-head>
    <router-view class="wrapper"></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NoteHead from '@/views/note/components/NoteHead.vue';
import MyFooter from '@/views/common/Footer.vue';
@Component({
  components: {
    NoteHead,
    MyFooter
  }
})
export default class NoteIndex extends Vue {}
</script>

<style lang="less" scoped>
.wrapper {
  max-width: 1024px;
  margin: 30px auto;
  padding: 10px;
}
</style>
