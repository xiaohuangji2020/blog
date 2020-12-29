<template>
  <div class="wrap">
    <h3 class="title">为什么不能用index来做v-for的key</h3>
    <p>首先定义一个数组</p>
    <p class="code">
      const arr = [{ id: 'x1', name: '小火龙' }, { id: 'x2', name: '杰尼龟' }, { id: 'x3', name: '妙蛙种子' }, { id:
      'x4', name: '皮卡丘' }];
    </p>
    <p class="mg-t-l">把上面的数组通过v-for渲染，然后把第2条: { id: 'x2', name: '杰尼龟' }删掉，会发生生么</p>
    <ul class="mg-l-m">
      <li>
        1.
        <b>如果v-for没有key:</b>
        vue不知道你只是把2条删除了。而是会认为你把第2条的内容修改成了第3条的内容，把第3条的内容<b>修改</b>成了第4条的内容，然后把第4条内容删除了(diff算法)。页面重新渲染了2，3，4的dom
      </li>
      <li>
        2.
        <b>如果v-for的key是id</b>
        当你删除了第2条，vue就会比较知道key为x2的这一条没了，而其他的数据没有变化。所以在渲染时，页面只会把2的dom删除掉
      </li>
      <li>
        3.
        <b>同理如果v-for的key是index</b>
        vue依旧不知道只是把第2条删除了，因为第2条的key没变，只是内容变了，vue会把第2条的内容修改成了第3条的内容，第3条一样也是修改，第4条删除。页面重新渲染了2，3，4的dom
      </li>
    </ul>
    <p class="mg-t-l">
      所以正常这样做的问题，只是渲染效率的问题。但如果组件中含有状态，且这个状态没有和数组内容挂钩，就会出现bug
    </p>
    <p>
      如下两个例子，请手动通过控制台给妙蛙种子涂成绿色，(color: green)。然后删除小火龙，观察区别。
      <el-button @click="paint">点击这里，帮你染色</el-button>
    </p>
    <p class="text-center">e.g. 1 key是id</p>
    <div class="tably">
      <div class="row">
        <span>index</span>
        <span>id</span>
        <span>name</span>
        <span>op</span>
      </div>
      <div v-for="(item, index) of arr" :key="item.id" class="row">
        <span>{{ index }}</span>
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span><button class="r-btn" @click="arr.splice(index, 1)">删了它</button></span>
      </div>
    </div>
    <p class="text-center mg-t-s">e.g. 2 key是index</p>
    <div class="tably">
      <div class="row">
        <span>index</span>
        <span>id</span>
        <span>name</span>
        <span>op</span>
      </div>
      <div v-for="(item, index) of arr2" :key="index" class="row">
        <span>{{ index }}</span>
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span><button class="r-btn" @click="arr2.splice(index, 1)">删了它</button></span>
      </div>
    </div>
    <p class="mg-t-xxl">例1中，绿色的还是妙蛙种子。例2中，皮卡丘变成了绿色，妙蛙种子变成了黑色</p>
    <p>
      原因就在于(个人解释，不专业)，例1实际就是删除了杰尼龟的dom，而其他dom原地复用，没有更新。所以绿色还是在妙蛙种子身上，没有变
    </p>
    <p>而例2是把杰尼龟更新成了妙蛙种子，把妙蛙种子更新成了皮卡丘。皮卡丘用的实际是原来妙蛙种子的dom，所以他变绿了</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class VForKey extends Vue {
  private arr = [
    { id: 'x1', name: '小火龙' },
    { id: 'x2', name: '杰尼龟' },
    { id: 'x3', name: '妙蛙种子' },
    { id: 'x4', name: '皮卡丘' }
  ];
  private arr2 = [
    { id: 'x1', name: '小火龙' },
    { id: 'x2', name: '杰尼龟' },
    { id: 'x3', name: '妙蛙种子' },
    { id: 'x4', name: '皮卡丘' }
  ];
  private paint() {
    document.querySelectorAll('.tably .row span').forEach(el => {
      if (el.innerHTML === '妙蛙种子' && el instanceof HTMLElement) {
        el.style.color = 'green';
      }
    });
  }
}
</script>

<style lang="less" scoped>
.title {
  margin-bottom: 20px;
}
.code {
  padding: 0 10px;
  line-height: 32px;
  background-color: antiquewhite;
}
.tably {
  width: 600px;
  margin: 0 auto;
  border-top: 1px solid @gray;
  text-align: center;
  .row {
    display: flex;
    border-left: 1px solid @gray;
    span {
      flex: 1;
      border-right: 1px solid @gray;
      border-bottom: 1px solid @gray;
    }
  }
}
</style>
