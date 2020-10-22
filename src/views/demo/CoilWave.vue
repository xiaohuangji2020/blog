<template>
  <div class="wrap">
    <router-link :to="{ path: '/' }">111</router-link>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
interface Circle {
  x: number;
  y: number;
  r: number;
  deg: number; // 当前状态标记，位于正弦函数上的时刻标记
}
interface Ball {
  x: number;
  y: number;
  r: number; // 自己的半径
  R: number; // 轨道半径
  deg: number; // 椭圆轨道运动的角度标记
  deg2: number; // 复合运动 -- 随着轨道上下运动的角度标记,需要和其所在环的deg一样
  speed: number; // 绕环速度
  color: string;
}
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class CoilWave extends Vue {
  private drawer = 0;
  private pannel = {
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0
  };
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private style = {
    lineWidth: 1,
    fillStyle: '#aaa',
    strokeStyle: '#888'
  };
  private option = {
    scaleY: 0.2,
    circleSpeed: 0.01, // 环运动速度
    circleRange: 40, // 环运动范围
    limitDeg: 2 * Math.PI
  };
  private circles: Circle[] = [];
  private balls: Ball[] = [];
  private mounted() {
    this.canvas = document.querySelector('#canvas');
    if (!this.canvas) {
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      return;
    }
    const ctx = this.ctx;
    this.pannel.width = window.innerWidth;
    this.pannel.height = window.innerHeight;
    this.canvas.width = this.pannel.width;
    this.canvas.height = this.pannel.height;
    this.pannel.centerX = this.pannel.width / 2;
    this.pannel.centerY = this.pannel.height / 2;
    this.generator();

    ctx.lineWidth = this.style.lineWidth;
    ctx.strokeStyle = this.style.strokeStyle;
    this.draw(ctx);
  }
  private beforeDestroy() {
    cancelAnimationFrame(this.drawer);
  }
  private generator() {
    let i = 0;
    while (++i < 7) {
      this.circles.push({
        x: this.pannel.centerX,
        y: this.pannel.centerY,
        r: i * 80,
        deg: i * 12
      });
    }
    let j = 0;
    while (j++ < 3) {
      this.balls.push({
        x: this.pannel.centerX,
        y: this.pannel.centerY,
        r: 10,
        R: j * 2 * 80,
        deg: 0,
        deg2: j * 2 * 12,
        speed: 0.01 * j,
        color: '#333'
      });
    }
  }
  private draw(ctx: CanvasRenderingContext2D) {
    this.clear(ctx);
    this.drawCircles(ctx);
    this.drawBalls(ctx);
    this.drawer = requestAnimationFrame(() => {
      this.draw(ctx);
      console.log('draw');
    });
  }
  private clear(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.pannel.width, this.pannel.height);
  }
  private drawCircles(ctx: CanvasRenderingContext2D) {
    const circles = this.circles;
    const option = this.option;
    ctx.fillStyle = this.style.fillStyle;
    ctx.save();
    ctx.scale(1, option.scaleY);
    circles.forEach((circle: Circle, index: number) => {
      const dis = Math.sin(circle.deg) * option.circleRange;
      circle.deg += option.circleSpeed;
      if (circle.deg > option.limitDeg) {
        circle.deg -= 2 * Math.PI;
      }
      ctx.beginPath();
      ctx.arc(circle.x, circle.y / option.scaleY - dis * 10, circle.r - dis * 2, 0, 2 * Math.PI);
      if (index === 0) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    });
    ctx.restore(); // 先restore，后stroke，circle的线就是一样粗了
  }
  private drawBalls(ctx: CanvasRenderingContext2D) {
    const balls = this.balls;
    const option = this.option;
    balls.forEach((ball: Ball) => {
      ctx.fillStyle = ball.color;
      ctx.beginPath();
      const dis = Math.sin(ball.deg2) * option.circleRange;
      ball.deg2 += option.circleSpeed;
      if (ball.deg2 > option.limitDeg) {
        ball.deg2 -= 2 * Math.PI;
      }
      const curR = ball.R - dis * 2; // 当前时刻圆（未压缩的轨道圆圈）的半径

      const x = Math.sin(ball.deg) * curR;
      const y = Math.cos(ball.deg) * curR * this.option.scaleY;
      ball.deg += ball.speed;
      if (ball.deg > option.limitDeg) {
        ball.deg -= 2 * Math.PI;
      }

      ctx.arc(ball.x + x, ball.y + y - dis * 10 * this.option.scaleY, ball.r, 0, 2 * Math.PI);
      ctx.fill();
    });
  }
}
</script>

<style lang="less" scoped></style>
