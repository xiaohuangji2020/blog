<template>
  <div>
    <div class="content">
      <div class="col col1">
        <p>你是<span class="stress">光</span> 永不萧瑟</p>
        <p>是人间 <span class="stress">无双</span>颜色</p>
        <p><span class="stress">不觉中</span> 降落在我眼瞳</p>
      </div>
      <div class="col col2">
        <p><span class="t">Email:</span>roco2015@163.com</p>
        <p><span class="t">name:</span>圆企鹅·Alter</p>
        <p><span class="t">职阶:</span>Berserker</p>
        <p><span class="t">技能1:</span>js ts node java</p>
        <p><span class="t">技能2:</span>烘焙</p>
        <p><span class="t">技能3:</span>笛子（暂未开放）</p>
        <p><span class="t">宝 具:</span>无（太弱了，没宝具）</p>
      </div>
      <div class="col col3"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.content {
  display: flex;
  flex-flow: row wrap;
  position: relative;
  z-index: 2;
  width: 950px;
  margin: 0 auto;
  padding-top: 30px;
  line-height: 2;
  font-size: 14px;
  .col {
    flex: 1;
  }
  .t {
    display: inline-block;
    width: 50px;
  }
}
</style>
