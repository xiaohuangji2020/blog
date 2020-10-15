<template>
  <div class="nav">
    <header class="header">
      <div class="logo"></div>
      <div class="header-icon">
        <svg class="svg-icon" aria-hidden="true">
          <use xlink:href="#icon_qq"></use>
        </svg>
        <svg class="svg-icon" aria-hidden="true">
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
  width: 950px;
  height: 200px;
  margin: 0 auto;
  padding: 0 15px;
  font-weight: 500;
  .header {
    display: flex;
    height: 124px;
    line-height: 64px;
    margin-bottom: 20px;
    padding-top: 60px;
    .logo {
      width: 100px;
      margin: 0 15px;
      background: url('~@/assets/images/logo.png') no-repeat center;
      background-size: contain;
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
    }
    .header-icon {
      display: flex;
      align-items: center;
      .svg-icon {
        margin-right: 10px;
        font-size: 22px;
      }
    }
  }
  .menu {
    display: flex;
    width: 950px;
    height: 44px;
    line-height: 44px;
    .menu-item {
      padding: 0 5px;
      .link {
        display: block;
        padding: 0 10px;
        color: #414a60;
      }
    }
  }
}
@media (max-width: 950px) {
  .nav {
    width: 100%;
    .menu {
      width: 100%;
    }
  }
}
</style>
