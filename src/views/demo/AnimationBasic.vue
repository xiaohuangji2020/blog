<template>
  <div class="main">
    <h3>canvas动画基础</h3>
    <section class="sec">
      <h4 class="title">一、点做正圆运动</h4>
      <div class="content">
        <div class="box">
          <p>点绕圆心 做正弦运动</p>
          <p>主要工作是算出点在当前时刻的坐标</p>
        </div>
        <coder>{{ code1 }}</coder>
        <div class="canvas-box">
          <div class="op">
            <a class="starter" @click="run(1)">start</a>
            <a class="stoper" @click="run(1, false)">stop</a>
          </div>
          <canvas id="canvas-1" class="canvas" width="400" height="300"></canvas>
        </div>
      </div>
    </section>
    <section class="sec">
      <h4 class="title">二、点做椭圆运动</h4>
      <div class="content">
        <div class="box">
          <p>1. 缩放</p>
        </div>
        <coder>{{ code2 }}</coder>
        <div class="canvas-box">
          <div class="op">
            <a class="starter" @click="run(2)">start</a>
            <a class="stoper" @click="run(2, false)">stop</a>
          </div>
          <canvas id="canvas-2" class="canvas" width="400" height="300"></canvas>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <p>2. 只画椭圆，无运动可以使用ellipse</p>
        </div>
        <coder>{{ code3 }}</coder>
        <div class="canvas-box">
          <div class="op">
            <a class="starter" @click="run(3)">start</a>
            <a class="stoper" @click="run(3, false)">stop</a>
          </div>
          <canvas id="canvas-3" class="canvas" width="400" height="300"></canvas>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <p>3. 通过贝塞尔曲线，之后更</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
interface Ball {
  x: number; // 轨道圆心x
  y: number; // 轨道圆心y
  R: number; // 轨道半径
  r: number; // 点自身半径
  deg: number; // 当前角度
  v: number; // 角度递增值，决定速度
}
interface Ellipse {
  x: number; // 椭圆圆心的 x 轴坐标
  y: number; // 椭圆圆心的 y 轴坐标
  radiusX: number; // 椭圆长轴的半径
  radiusY: number; // 椭圆短轴的半径
  rotation: number; // 椭圆的旋转角度，以弧度表示(非角度度数)
  startAngle: number; // 将要绘制的起始点角度，从 x 轴测量，以弧度表示(非角度度数)
  endAngle: number; // 椭圆将要绘制的结束点角度，以弧度表示(非角度度数)
  anticlockwise?: boolean; // 可选，如果为 true，逆时针方向绘制椭圆 （逆时针）， 反之顺时针方向绘制。
}
import { Component, Vue } from 'vue-property-decorator';
import Coder from '@/components/basic/Coder.vue';
@Component({
  components: {
    Coder
  }
})
export default class WindPrinciple extends Vue {
  private drawer = 0;
  private code1 =
    '\
  private drawCircle(ctx: CanvasRenderingContext2D, ball: Ball) {\n\
    ctx.clearRect(0, 0, 400, 300);\n\
    ctx.beginPath();\n\
    ctx.arc(ball.x, ball.y, ball.R, 0, 2 * Math.PI); // 轨道\n\
    ctx.stroke();\n\
    ctx.beginPath();\n\
    ctx.arc(ball.x + ball.R * Math.cos(ball.deg), ball.y + ball.R * Math.sin(ball.deg), ball.r, 0, 2 * Math.PI);\n\
    ctx.fill();\n\
    ball.deg += ball.v;\n\
    if (ball.deg > 8) ball.deg -= 8; // 防止太大了\n\
    this.drawer = requestAnimationFrame(() => {\n\
      this.drawCircle(ctx, ball);\n\
    });\n\
  }';
  private code2 =
    '\
  private drawEllipse1(ctx: CanvasRenderingContext2D, ball: Ball) {\n\
    const scaleY = 0.5;\n\
    ctx.clearRect(0, 0, 400, 300);\n\
    ctx.save();\n\
    ctx.translate(ball.x, ball.y); // 设置缩放中心，不设置也可以，但需要调整圆和球的坐标\n\
    ctx.scale(1, scaleY);\n\
    ctx.beginPath();\n\
    ctx.arc(0, 0, ball.R, 0, 2 * Math.PI); // 轨道\n\
    ctx.restore();\n\
    ctx.stroke();\n\
    // 先restore，再stroke的话，线不会被压扁（如果lineWidth为1的话，是没有区别的）\n\
    // 而fill是没有这个顺序的，怎样都会被压扁，所以画小球时不可以用这个方法\n\
    ctx.beginPath();\n\
    // 缺点，小球不是匀速率运动，因为y方向有缩放，所以影响了y方向速率\n\
    ctx.arc(\n\
      ball.x + ball.R * Math.cos(ball.deg),\n\
      ball.y + ball.R * Math.sin(ball.deg) * scaleY,\n\
      ball.r,\n\
      0,\n\
      2 * Math.PI\n\
    );\n\
    ctx.fill();\n\
    ball.deg += ball.v;\n\
    if (ball.deg > 8) ball.deg -= 8; // 防止太大了\n\
    this.drawer = requestAnimationFrame(() => {\n\
      this.drawEllipse1(ctx, ball);\n\
    });\n\
  }';
  private code3 =
    '\
  private drawEllipse2(ctx: CanvasRenderingContext2D, ellipse: Ellipse) {\n\
    ctx.beginPath();\n\
    ctx.ellipse(\n\
      ellipse.x,\n\
      ellipse.y,\n\
      ellipse.radiusX,\n\
      ellipse.radiusY,\n\
      ellipse.rotation,\n\
      ellipse.startAngle,\n\
      ellipse.endAngle,\n\
      ellipse.anticlockwise\n\
    ); //倾斜45°角\n\
    ctx.stroke();\n\
  }';
  private beforeDestroy() {
    cancelAnimationFrame(this.drawer);
  }
  private run(index: number, start = true) {
    const canvas: HTMLCanvasElement | null = document.querySelector(`#canvas-${index}`);
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (ctx) {
      if (start) {
        this.draw(ctx, index);
      } else {
        cancelAnimationFrame(this.drawer);
      }
    }
  }

  private draw(ctx: CanvasRenderingContext2D, index: number) {
    cancelAnimationFrame(this.drawer);
    switch (index) {
      case 1:
        ctx.fillStyle = '#0288D1';
        ctx.strokeStyle = '#03A9F4';
        this.drawCircle(ctx, { x: 200, y: 150, R: 100, r: 10, deg: 0, v: 0.01 });
        break;
      case 2:
        ctx.fillStyle = '#0288D1';
        ctx.strokeStyle = '#03A9F4';
        this.drawEllipse1(ctx, { x: 200, y: 150, R: 100, r: 10, deg: 0, v: 0.01 });
        break;
      case 3:
        ctx.fillStyle = '#0288D1';
        ctx.strokeStyle = '#03A9F4';
        this.drawEllipse2(ctx, {
          x: 200,
          y: 150,
          radiusX: 100,
          radiusY: 50,
          rotation: 0,
          startAngle: 0,
          endAngle: 2 * Math.PI
        });
        break;
      default:
        break;
    }
  }

  private drawCircle(ctx: CanvasRenderingContext2D, ball: Ball) {
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.R, 0, 2 * Math.PI); // 轨道
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(ball.x + ball.R * Math.cos(ball.deg), ball.y + ball.R * Math.sin(ball.deg), ball.r, 0, 2 * Math.PI);
    ctx.fill();
    ball.deg += ball.v;
    if (ball.deg > 8) ball.deg -= 8; // 防止太大了
    this.drawer = requestAnimationFrame(() => {
      this.drawCircle(ctx, ball);
    });
  }

  private drawEllipse1(ctx: CanvasRenderingContext2D, ball: Ball) {
    const scaleY = 0.5;
    ctx.clearRect(0, 0, 400, 300);
    ctx.save();
    ctx.translate(ball.x, ball.y); // 设置缩放中心，不设置也可以，但需要调整圆和球的坐标
    ctx.scale(1, scaleY);
    ctx.beginPath();
    ctx.arc(0, 0, ball.R, 0, 2 * Math.PI); // 轨道
    ctx.restore();
    ctx.stroke();
    // 先restore，再stroke的话，线不会被压扁（如果lineWidth为1的话，是没有区别的）
    // 而fill是没有这个顺序的，怎样都会被压扁，所以画小球时不可以用这个方法
    ctx.beginPath();
    // 缺点，小球不是匀速率运动，因为y方向有缩放，所以影响了y方向速率
    ctx.arc(
      ball.x + ball.R * Math.cos(ball.deg),
      ball.y + ball.R * Math.sin(ball.deg) * scaleY,
      ball.r,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ball.deg += ball.v;
    if (ball.deg > 8) ball.deg -= 8; // 防止太大了
    this.drawer = requestAnimationFrame(() => {
      this.drawEllipse1(ctx, ball);
    });
  }
  private drawEllipse2(ctx: CanvasRenderingContext2D, ellipse: Ellipse) {
    ctx.beginPath();
    ctx.ellipse(
      ellipse.x,
      ellipse.y,
      ellipse.radiusX,
      ellipse.radiusY,
      ellipse.rotation,
      ellipse.startAngle,
      ellipse.endAngle,
      ellipse.anticlockwise
    ); //倾斜45°角
    ctx.stroke();
  }
}
</script>

<style lang="less" scoped>
.main {
  max-width: 950px;
  margin: 0 auto;
  padding: 0 15px;
  line-height: 34px;
}
.sec {
  border: 1px solid #ccc;
  .text {
    overflow: auto;
  }
  .canvas-box {
    position: relative;
    overflow: auto;
    .canvas {
      margin: 0 auto;
    }
  }
  .op {
    position: absolute;
    left: 0;
    top: 0;
  }
  .starter,
  .stoper {
    padding: 5px 10px;
    cursor: pointer;
  }
}
</style>
