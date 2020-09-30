<template>
  <div class="nav">
    <header class="header">
      <div class="logo">logo</div>
      <div class="header-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon_qq"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon_qq"></use>
        </svg>
      </div>
    </header>
    <ul class="menu">
      <li v-for="(item, index) of navList" :key="index" class="menu-item">
        <router-link :to="item.name" class="link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Nav extends Vue {
  private navList = [
    {
      path: '/',
      name: 'index',
      title: 'HOME'
    },
    {
      path: '/t',
      name: 'technology',
      title: 'Technology'
    },
    {
      path: '/about',
      name: 'about',
      title: 'About Me'
    },
    {
      path: '/other',
      name: 'other',
      title: 'Other'
    }
  ];
}
</script>

<style lang="less" scoped>
.nav {
  height: 200px;
  .header {
    display: flex;
    height: 64px;
    line-height: 64px;
    margin-bottom: 20px;
    padding-top: 60px;
    .logo {
      width: 100px;
      padding-right: 30px;
      text-align: center;
      font-size: 32px;
    }
    .header-icon {
      display: flex;
      align-items: center;
      .icon {
        margin-right: 10px;
        font-size: 22px;
      }
    }
  }
  .menu {
    display: flex;
    width: 920px;
    height: 44px;
    line-height: 44px;
    margin: 0 auto;
    padding: 0 15px;
    .menu-item {
      padding: 0 5px;
      .link {
        display: block;
        padding: 0 10px;
      }
    }
  }
}
</style>
