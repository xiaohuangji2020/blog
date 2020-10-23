<template>
  <div class="wrap">
    <div v-if="blower" class="info">
      <p>风点坐标：x {{ blower.x }}，y {{ pannel.height - blower.y }}</p>
      <p>风向：{{ ((blower.deg / 2 / Math.PI) * 360).toFixed(2) }}</p>
      <p>风速大小：{{ blower.v.toFixed(2) }}</p>
      <p>符合标准坐标系</p>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
// 鼓风机
interface Blower {
  x: number; // x坐标
  y: number; // y坐标
  r: number; // 半径
  deg: number; // 风速角度
  vL: number; // 单位风速用多长的箭头表示
  v: number; // 风速速率大小
  vx: number; // x方向速率大小 右为正，左为负
  vy: number; // y方向速率大小 上为正，下为负
  arrowX: number; // 风向标坐标x，由deg和F推算
  arrowY: number; // 风向标坐标y
  arrowR: number; // 懒了，应该是箭头，画成了圆点
}
// 根据空气阻力(即物体受力)的公式：F=(1/2)CρSV^2，本例简化下 F=V^2 假设(1/2)CρS=1
// 式中：C为空气阻力系数；ρ为空气密度；S物体迎风面积；V为物体与空气的相对运动速度。
// 由上式可知，正常情况下空气阻力的大小与空气阻力系数及迎风面积成正比，与速度平方成正比。
// 求得受力后，F=am，可知物体加速度
// 被吹的气泡
interface Bubble {
  x: number;
  y: number;
  r: number;
  v: number; // 速率
  vx: number; // x方向速率大小
  vy: number; // y方向速率大小
  color: string;
  m: number; // 自身质量
}
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class WindPrinciple extends Vue {
  private drawer = 0;
  private pannel = {
    width: 0,
    height: 0
  };
  private option = {
    lineWidth: 10
  };
  private blowing = false;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private blower: Blower = {
    x: 0,
    y: 0,
    r: 0,
    deg: 0,
    vL: 100,
    v: 0,
    vx: 0,
    vy: 0,
    arrowX: 0,
    arrowY: 0,
    arrowR: 0
  };
  private bubbles: Bubble[] = [];

  private mounted() {
    this.canvas = document.querySelector('#canvas');
    if (!this.canvas) {
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      return;
    }
    const canvas = this.canvas;
    const ctx = this.ctx;
    this.pannel.width = window.innerWidth;
    this.pannel.height = window.innerHeight;
    this.canvas.width = this.pannel.width;
    this.canvas.height = this.pannel.height;

    this.generator();
    this.initCtx(ctx);
    this.initListener(canvas);
    this.draw(ctx);
  }

  private beforeDestroy() {
    cancelAnimationFrame(this.drawer);
  }

  private generator() {
    // 初始化鼓风机
    const x = 0;
    const y = this.pannel.height;
    const r = 50;
    const deg = Math.PI / 4;
    const v = 10;
    const vL = 10;
    this.blower = {
      x,
      y,
      r,
      deg,
      vL,
      v,
      vx: 0,
      vy: 0,
      arrowX: x + v * vL * Math.cos(deg),
      arrowY: y - v * vL * Math.sin(deg),
      arrowR: this.option.lineWidth + 2
    };

    // 初始化气泡
    let i = 0;
    while (i++ < 1) {
      this.bubbles.push({
        x: this.pannel.width >> 1,
        y: this.pannel.height >> 1,
        r: 30,
        v: 0,
        vx: 0,
        vy: 0,
        color: '#E1F5FE',
        m: 1
      });
    }
  }

  private initCtx(ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = this.option.lineWidth;
  }

  private initListener(canvas: HTMLCanvasElement) {
    const blower = this.blower;
    const dis = { x: 0, y: 0, arrowX: 0, arrowY: 0 };
    let blowerChanging = false;
    let blowerArrowChaning = false;

    const mousedown = (x: number, y: number) => {
      const arrowDisX = x - blower.arrowX;
      const arrowDisY = y - blower.arrowY;
      if (Math.abs(arrowDisX) < blower.arrowR && Math.abs(arrowDisY) < blower.arrowR) {
        blowerArrowChaning = true;
        dis.arrowX = arrowDisX;
        dis.arrowY = arrowDisY;
        return true;
      }

      const disX = x - blower.x;
      const disY = y - blower.y;
      if (Math.abs(disX) < blower.r && Math.abs(disY) < blower.r) {
        blowerChanging = true;
        dis.x = disX;
        dis.y = disY;
        dis.arrowX = arrowDisX;
        dis.arrowY = arrowDisY;
        blower.vx = blower.v * Math.cos(blower.deg);
        blower.vy = blower.v * Math.sin(blower.deg);
      }
    };
    //改变风
    const mousemove = (x: number, y: number) => {
      if (blowerArrowChaning) {
        blower.arrowX = x - dis.arrowX;
        blower.arrowY = y - dis.arrowY;

        const sideX = (blower.arrowX - blower.x) / blower.vL;
        const sideY = (blower.y - blower.arrowY) / blower.vL; // canvas的坐标圆点和数学坐标系不一样
        blower.deg = Math.atan2(sideY, sideX);
        blower.v = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));
      }
      if (blowerChanging) {
        blower.arrowX = x - dis.arrowX;
        blower.arrowY = y - dis.arrowY;
        blower.x = x - dis.x;
        blower.y = y - dis.y;
      }
    };
    const mouseup = () => {
      blower.vx = 0;
      blower.vy = 0;
      blowerArrowChaning = false;
      blowerChanging = false;
    };

    canvas.addEventListener('mousedown', e => {
      mousedown(e.clientX, e.clientY);
    });
    canvas.addEventListener('mousemove', e => {
      mousemove(e.clientX, e.clientY);
    });
    canvas.addEventListener('mouseup', () => {
      mouseup();
    });

    // 适配触屏
    canvas.addEventListener('touchstart', e => {
      mousedown(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    });
    canvas.addEventListener('touchmove', e => {
      mousemove(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    });
    canvas.addEventListener('touchend', () => {
      mouseup();
    });
  }

  private draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.pannel.width, this.pannel.height);
    this.drawBlower(ctx);
    this.drawBubbles(ctx);
    this.moveBubbles();
    this.drawer = requestAnimationFrame(() => {
      this.draw(ctx);
    });
  }

  private drawBlower(ctx: CanvasRenderingContext2D) {
    const blower = this.blower;
    ctx.fillStyle = '#6D4C41';
    ctx.beginPath();
    ctx.arc(blower.x, blower.y, blower.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = '#4E342E';
    ctx.moveTo(blower.x, blower.y);
    ctx.lineTo(blower.arrowX, blower.arrowY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(blower.arrowX, blower.arrowY, blower.arrowR, 0, 2 * Math.PI);
    ctx.fillStyle = '#4E342E';
    ctx.fill();
  }

  private drawBubbles(ctx: CanvasRenderingContext2D) {
    const bubbles = this.bubbles;
    bubbles.forEach(bubble => {
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.r, 0, 2 * Math.PI);
      ctx.fillStyle = bubble.color;
      ctx.fill();
    });
  }

  private moveBubbles() {
    const bubbles = this.bubbles;
    const bvx = this.blower.vx;
    const bvy = this.blower.vy;
    const W = this.pannel.width;
    const H = this.pannel.height;
    // 先计算速度
    bubbles.forEach(bubble => {
      // 速度差
      const diffVx = bvx - bubble.vx;
      // 速度方向
      const directionX = diffVx > 0 ? 1 : -1;
      // F=(1/2)CρSV^2，简化下假设(1/2)CρS=1，所以 F=V^2
      const Fx = directionX * Math.pow(diffVx, 2);
      // F=am
      const ax = Fx / bubble.m;
      // v = v + a * t 假设t为1
      bubble.vx += ax;
      if ((bubble.vx > 0 && bubble.vx > bvx) || (bubble.vx < 0 && bubble.vx < bvx)) bubble.vx = bvx;
      if (bvx === 0 && bubble.vx < 0) bubble.vx = 0;
      // x = x + vt 假设t为1
      bubble.x += bubble.vx;
      if (bubble.x <= 0) bubble.x = 0;
      if (bubble.x >= W) bubble.x = W;

      const diffVy = bvy - bubble.vy;
      const directionY = diffVy > 0 ? 1 : -1;
      const Fy = directionY * Math.pow(diffVy, 2);
      const ay = Fy / bubble.m;
      bubble.vy += ay; // 假设t为1
      if ((bubble.vy > 0 && bubble.vy > bvy) || (bubble.vy < 0 && bubble.vy < bvy)) bubble.vy = bvy;
      if (bvy === 0 && bubble.vy < 0) bubble.vy = 0;
      bubble.y -= bubble.vy; // 和数学坐标系不一样，所以反着来
      if (bubble.y <= 0) bubble.y = 0;
      if (bubble.y >= H) bubble.y = H;
    });
  }
}
</script>

<style lang="less" scoped>
.info {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
