<template>
  <div>
    <component :is="$route.params.name"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TrailingEffect from './TrailingEffect.vue';
import CoilWave from './CoilWave.vue';
import PicWall from './PicWall.vue';
import WindPrinciple from './WindPrinciple.vue';
@Component({
  components: {
    TrailingEffect,
    CoilWave,
    PicWall,
    WindPrinciple
  }
})
export default class Content extends Vue {}
</script>

<style lang="less" scoped></style>
