<template>
  <div class="box">
    
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
   
  },
  methods: {
    add(){
       
    },
    getTime() {
    
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