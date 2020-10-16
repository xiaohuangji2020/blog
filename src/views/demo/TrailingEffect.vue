<template>
  <div id="trailing-effect-wrap">
    <canvas id="trailing-effect-canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
export default {
  name: 'trailing-effect',
  data() {
    return {
      ctx: {},
      width: 800,
      height: 600,
      parts: [], // 页面上蹦跶的内容数组，也就是需要绘制的内容数组
      text: ['O', '泡', '果', '奶'],
      textSize: 30,
      glowSize: 20, // 阴影大小
      trailSize: 0.9, // 会转化成透明度，为1则不会清除尾巴，为0则下一帧立即清除尾巴
      minTime: 3000, // 蹦跶的内容最小存活时间
      maxTime: 10000, // 蹦跶的内容最大存活时间
      batchCount: 1, // 同时刷新出来一批的数量
      limitCount: 100, // 页面上同时存在的最大数量
      pullRadius: 100, // 鼠标靠近后的吸引范围
      pullTime: 7, // 吸引过来所需的时间
      mouseX: -10000, // 鼠标初始时给定的x坐标
      mouseY: -10000
    };
  },
  created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
  mounted() {
    const canvas = document.getElementById('trailing-effect-canvas');
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    });
    canvas.addEventListener('mousemove', e => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    canvas.addEventListener('mouseleave', () => {
      this.mouseX = -this.pullRadius;
      this.mouseY = -this.pullRadius;
    });
    canvas.addEventListener('touchmove', e => {
      this.mouseX = e.changedTouches[0].pageX;
      this.mouseY = e.changedTouches[0].pageY;
    });
    canvas.addEventListener('touchend', () => {
      this.mouseX = -this.pullRadius;
      this.mouseY = -this.pullRadius;
    });
    this.ctx = canvas.getContext('2d');
    setInterval(this.createPart, 300); // 控制新增
    requestAnimationFrame(this.render); // 绘制
  },
  methods: {
    createPart() {
      if (this.parts.length < this.limitCount) {
        // 过多就不新建了
        for (let i = 0; i < this.batchCount; i++) {
          this.parts.push(this.getPartParam());
        }
      }
    },
    getPartParam() {
      return {
        x: Math.random() * this.width, // 初始坐标
        y: -this.textSize,
        vx: Math.random() * 4 - 2, // 初始速度
        vy: Math.random() * 2 - 1,
        ts: Date.now(), // 出生时间
        tl: Math.random() * (this.maxTime - this.minTime) + this.minTime, // 寿命
        h: Math.random() * (320 - 170) + 170, // 用于hsla颜色的随机值
        text: this.getDrawText()
      };
    },
    getDrawText() {
      const index = Math.floor(Math.random() * this.text.length);
      return this.text[index];
    },
    draw() {
      this.parts.forEach(part => {
        const dif = (Date.now() - part.ts) / part.tl;
        const alpha = 1 - Math.round(dif * 100) / 100;
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.strokeStyle = 'hsla(0,0%,100%,' + alpha + ')';
        ctx.lineWidth = this.textSize / 4;
        ctx.fillStyle = 'hsla(' + part.h + ', 100%, 50%, ' + alpha + ')';
        ctx.shadowColor = 'hsla(' + part.h + ', 100%, 50%, ' + alpha + ')';
        ctx.shadowBlur = this.glowSize;
        ctx.font = 'bold ' + this.textSize + 'px sans-serif';
        ctx.strokeText(part.text, part.x - this.textSize, part.y + this.textSize / 2);
        ctx.fillText(part.text, part.x - this.textSize, part.y + this.textSize / 2);
        ctx.closePath();
      });
    },
    move() {
      this.parts.forEach(part => {
        if (part.y + this.textSize / 2 >= this.height) {
          part.vy = -part.vy * 0.8;
          part.y = this.height - this.textSize;
          part.vx *= 0.8;
        }
        part.vy += 0.2;
        part.x += part.vx;
        part.y += part.vy;
        if (this.dist(part.x, part.y, this.mouseX, this.mouseY) < this.pullRadius) {
          part.vx = (this.mouseX - part.x) / this.pullTime;
          part.vy = (this.mouseY - part.y) / this.pullTime;
        }
      });
    },
    lifeTime() {
      this.parts.forEach((part, index) => {
        if (part.ts + part.tl < Date.now()) {
          this.parts.splice(index, 1);
        }
      });
    },
    clearCanvas() {
      this.ctx.shadowBlur = 0;
      this.ctx.fillStyle = 'rgba(0, 0, 0, ' + Math.abs(this.trailSize - 1) + ')';
      this.ctx.rect(0, 0, this.width, this.height);
      this.ctx.fill();
    },
    dist(x1, y1, x2, y2) {
      const a = x1 - x2;
      const b = y1 - y2;
      return Math.sqrt(a * a + b * b);
    },
    render() {
      this.clearCanvas();
      this.draw(); // 绘制
      this.move(); // 移动
      this.lifeTime(); // 清除的方法放到绘制循环中，即 当寿命到了，就直接清除掉，另一个函数较慢
      requestAnimationFrame(this.render);
    }
  }
};
</script>

<style lang="less" scoped>
#trailing-effect-wrap {
  height: 100vh;
  overflow: hidden;
  #trailing-effect-canvas {
    cursor: default;
  }
}
</style>
