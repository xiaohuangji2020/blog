<template>
  <div class="nav">
    <header class="header">
      <div class="logo"></div>
      <div class="header-icon">
        <a href="https://github.com/roco2015" target="_blank" title="roco2015@github.com">
          <svg class="svg-icon" aria-hidden="true">
            <use xlink:href="#icon_github"></use>
          </svg>
        </a>
        <svg class="svg-icon icon-qq" aria-hidden="true">
          <use xlink:href="#icon_qq"></use>
        </svg>
      </div>
    </header>
    <ul class="menu">
      <li v-for="(item, index) of navList" :key="index" class="menu-item">
        <router-link :to="{ name: item.name }" class="link">{{ item.title }}</router-link>
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
    // {
    //   path: '/note',
    //   name: 'note',
    //   title: 'Note'
    // },
    {
      path: '/cv',
      name: 'cv',
      title: 'CV'
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
      margin-left: 20px;
      font-size: 22px;
      .svg-icon {
        margin-right: 10px;
        color: #414a60;
      }
      .icon-qq {
        font-size: 0.96em;
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
