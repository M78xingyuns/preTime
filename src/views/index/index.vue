<template>
  <div class="box">
    <van-nav-bar title="给可爱玉" />

    <div class="text flex font14 flex-jc">我可爱的玉儿小已经 {{time}}没有理我了</div>
    <div>
      <van-swipe class="my-swipe font14" :autoplay="3000" :vertical="true" indicator-color="white">
        <van-swipe-item>小手一牵 我俩甜甜 小肩一搭 心里开花</van-swipe-item>
        <van-swipe-item>我大约真的没有什么才华，只是因为有幸见着了你，于是这颗庸常的心中才凭空生出好些浪漫。</van-swipe-item>
        <van-swipe-item>感谢时光 不偏不倚 躲过了风口浪尖 让我恰好遇见你</van-swipe-item>
        <van-swipe-item>二斤桃花酿做酒，万杯不及你温柔。</van-swipe-item>
        <van-swipe-item>独自走过苍苍茫茫，与你同行才有了光。</van-swipe-item>
        <van-swipe-item>我只看向他眼底千万人欢呼什么我不关心</van-swipe-item>
        <van-swipe-item>铃铛遇到风会响，我遇到你，心里的小鹿会乱撞。</van-swipe-item>
        <van-swipe-item>时间予我千万种满心欢喜，沿途逐枝怒放，全部遗漏都不要紧，得你一枝配我胸襟就好。</van-swipe-item>
        <van-swipe-item>你说清醒容易孤独，我就陪你酩酊大醉，你说黑夜太难熬，我就陪你日夜颠倒。</van-swipe-item>
        <van-swipe-item>春天会下雪 夏天有大雨 一年四季会有很多意外 但最迷人的还是遇见了你</van-swipe-item>
        <van-swipe-item>生之所向 无非是你</van-swipe-item>
        <van-swipe-item>眸若星河 容似桃花 山山水水不过如此</van-swipe-item>
        <van-swipe-item>心有所属的人眼神都是温柔的</van-swipe-item>
        <van-swipe-item>你能看见山你能看见海，你能看见这世上的一切，我就不一样，我目光比较短浅，我只能看见你。</van-swipe-item>
        <van-swipe-item>江湖险恶 但还是碰见了那个口袋装满糖想给我一点甜的人</van-swipe-item>
        <van-swipe-item>温柔驱遣强者 浪漫行凶爱意</van-swipe-item>
        <van-swipe-item>我大约真的没有什么才华，只是因为有幸见着了你，于是这颗庸常的心中才凭空生出好些浪漫。</van-swipe-item>
        <van-swipe-item>你是这平淡白开水的生活里加的一颗糖</van-swipe-item>
      </van-swipe>
    </div>
    <div class="flex flex-jc"></div>
    <div class="btn flex flex-jse">
      <a class="flex flex-ac flex-jc font14"  @click="add">想我一次</a>
      <a class="flex flex-ac flex-jc font14" href="tel:13047499391">给我打电话</a>
    </div>
    <div id="heart">
        <div class="pos">玉儿已经爱我了{{count}}次</div>
    </div>
  </div>
</template>
<script>
import moment from "../../plugins/moment";
export default {
  data() {
    return {
      time: "3000",
      count:1
    };
  },
  created() {
    this.count = localStorage.getItem('yuer') || 1
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
    add(){
        let num = Number(this.count++)
        localStorage.setItem('yuer',num)
    },
    getTime() {
      let oldDate = new Date("2022/06/20 19:21:00").getTime();
      let curDate = new Date().getTime();
      let time = curDate - oldDate;
      let h = moment.duration(time).hours();
      let f = moment.duration(time).minutes();
      let s = moment.duration(time).seconds();
      this.time = `${h}小时${f}分${s}秒`;
    }
  }
};
</script>
<style>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;

  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.text {
  color: skyblue;
  margin-top: 50px;
}
.my-swipe {
  height: 35px;
  margin-top: 50px;
}
.my-swipe .van-swipe-item {
  height: 35px !important;
  text-align: center;
  padding: 0 25px;
  letter-spacing: 0.2rem;
  background-image: -webkit-linear-gradient(
    left,
    #147b96,
    #e64505 25%,
    #147b96 50%,
    #e6d205 75%,
    #070808
  );

  -webkit-text-fill-color: transparent;

  -webkit-background-clip: text;

  -webkit-background-size: 200% 100%;
}
.btn {
  margin-top: 30px;
}

a {
  /* 相对定位 */
  position: relative;
  width: 150px;
  height: 45px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  /* 圆角属性 */
  border-radius: 50px;
  /* 背景渐变色 */
  background-image: linear-gradient(
    to right,
    #03a9f4,
    #f441a5,
    #ffeb3b,
    #09a8f4
  );
  /* 背景渐变色大小 */
  background-size: 400%;
  z-index: 1;
  animation: sun 7s infinite;
}

/* 下面设计 发光效果 */
a::before {
  content: "";
  position: absolute;
  top: -6px;
  bottom: -6px;
  left: -6px;
  right: -6px;
  border-radius: 50%;
  /* 背景渐变色 */
  background-image: linear-gradient(
    to right,
    #03a9f4,
    #f441a5,
    #ffeb3b,
    #09a8f4
  );
  /* 背景渐变色大小 */
  background-size: 400%;
  /* 元素的位置 底层或者顶层  -值表示底层 + 值表示顶层 */
  z-index: -1;
  /* 设置模糊度 显示发光效果 */
  filter: blur(20px);
}

@keyframes sun {
  100% {
    /* 背景位置 */
    background-position: -400% 0;
  }
}
#heart {
  height: 50px;
  width: 50px;
  /*border: 2px solid black;*/
  position: relative;
  transform: rotate(45deg);
  background-color: red;
  margin: 80px auto;
}
#heart:before,
#heart:after {
  content: "";
  width: 50px;
  height: 50px;
  /*border: 2px solid black;*/
  border-radius: 50%;
  position: absolute;
  left: -25px;
  background-color: red;
}
#heart:after {
  left: 0;
  top: -25px;
}
.pos{
    position: absolute;
    left: -76px;
    top: -30px;
    transform: rotate(-45deg);
    -webkit-z-index: 500;
    -moz-z-index: 500;
    -ms-z-index: 500;
    -o-z-index: 500;
    z-index: 500;
    color: #fff;
    font-size: 14px;
    white-space: nowrap;
}
</style>