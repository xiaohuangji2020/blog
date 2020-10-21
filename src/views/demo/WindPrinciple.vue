<template>
  <div class="wrap">
    <div v-if="blower" class="info">
      <p>风点坐标：x {{ blower.x }}，y {{ pannel.height - blower.y }}</p>
      <p>风向：{{ ((blower.deg / 2 / Math.PI) * 360).toFixed(2) }}</p>
      <p>风力大小：{{ blower.F.toFixed(2) }}</p>
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
  deg: number; // 吹风角度
  F: number; // 吹力大小
  arrowX: number; // 风向标坐标x，由deg和F推算
  arrowY: number; // 风向标坐标y
  arrowR: number; // 懒了，应该是箭头，画成了圆点
}
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class WindPrinciple extends Vue {
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
    F: 0,
    arrowX: 0,
    arrowY: 0,
    arrowR: 0
  };

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

  private generator() {
    // 初始化鼓风机
    const x = 0;
    const y = this.pannel.height;
    const r = 50;
    const deg = Math.PI / 4;
    const F = 100;
    this.blower = {
      x,
      y,
      r,
      deg,
      F,
      arrowX: x + F * Math.cos(deg),
      arrowY: y - F * Math.sin(deg),
      arrowR: this.option.lineWidth + 2
    };
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
        this.blowing = true;
        blowerChanging = true;
        dis.x = disX;
        dis.y = disY;
        dis.arrowX = arrowDisX;
        dis.arrowY = arrowDisY;
      }
    };
    const mousemove = (x: number, y: number) => {
      if (blowerArrowChaning) {
        blower.arrowX = x - dis.arrowX;
        blower.arrowY = y - dis.arrowY;

        const sideX = blower.arrowX - blower.x;
        const sideY = blower.y - blower.arrowY; // canvas的坐标圆点和数学坐标系不一样
        blower.deg = Math.atan2(sideY, sideX);
        blower.F = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));
      }
      if (blowerChanging) {
        blower.arrowX = x - dis.arrowX;
        blower.arrowY = y - dis.arrowY;
        blower.x = x - dis.x;
        blower.y = y - dis.y;
      }
    };
    const mouseup = () => {
      this.blowing = false;
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
  // private changeWind(ctx: CanvasRenderingContext2D) {}

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

  private draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.pannel.width, this.pannel.height);
    this.drawBlower(ctx);
    requestAnimationFrame(() => {
      this.draw(ctx);
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
