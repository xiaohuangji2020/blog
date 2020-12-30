<template>
  <div class="nav">
    <header class="header">
      <router-link :to="{ name: 'index' }" class="logo"></router-link>
      <div class="header-icon">
        <a href="https://github.com/roco2015" target="_blank" title="roco2015@github.com">
          <svg class="svg-icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
        <svg class="svg-icon icon-qq" aria-hidden="true">
          <use xlink:href="#icon-qq"></use>
        </svg>
        <svg class="svg-icon icon-email" aria-hidden="true">
          <use xlink:href="#icon-email"></use>
        </svg>
      </div>
    </header>
    <ul class="menu">
      <li v-for="(item, index) of navList" :key="index" class="menu-item">
        <router-link :to="{ name: item.name }" class="link">{{ item.title }}</router-link>
      </li>
    </ul>
    <header :class="{ show: fixedHeaderVisible }" class="header-fixed">
      <router-link :to="{ name: 'index' }" class="logo"></router-link>
    </header>
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
  private fixedHeaderVisible = false;
  private mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }
  private beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  private handleScroll(event: Event) {
    const targetEl = event?.target;
    if (!targetEl || !(targetEl instanceof Document)) {
      return;
    }
    const scrollTop = targetEl.documentElement.scrollTop;
    this.fixedHeaderVisible = scrollTop > 150;
  }
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
  }

  .logo {
    align-self: stretch;
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
      margin-right: 20px;
      color: #414a60;
    }
    .icon-qq {
      font-size: 0.96em;
    }
    .icon-email {
      font-size: 1.1em;
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
  .header-fixed {
    display: flex;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    align-items: center;
    background: rgba(255, 250, 240, 0.95);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-out;
    transform: translateY(-100%);
    &.show {
      transform: translateY(0);
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
