<template>
  <ul id="nav">
    <li
      v-for="(item, index) of navList"
      :key="index"
      :style="{ 'background-color': 'hsla(' + (180 + index * 20) + ', 100%, 50%, 100%)' }"
      class="nav-li"
    >
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Nav extends Vue {
  private navList = [
    {
      path: '/',
      name: '首页'
    },
    {
      path: '/t',
      name: '技术'
    },
    {
      path: '/cv',
      name: '简历'
    },
    {
      path: '/about',
      name: '关于'
    },
    {
      path: '/inspiration',
      name: '灵感'
    },
    {
      path: '/other',
      name: '其他'
    }
  ];
}
</script>

<style lang="less" scoped>
#nav {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;

  .nav-li {
    height: 40px;
    width: 200px;
    margin-bottom: 50px;
    border: 2px solid white;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    text-align: center;
    transform: translateX(-180px);
    transition: transform 0.3s ease-out;

    &:hover {
      transform: translateX(0);
    }

    a {
      display: block;
    }
  }
}
</style>
