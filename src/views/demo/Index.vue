<template>
  <div>
    <component :is="$route.params.name"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TrailingEffect from './TrailingEffect.vue';
@Component({
  components: {
    TrailingEffect
  }
})
export default class Content extends Vue {}
</script>

<style lang="less" scoped></style>
