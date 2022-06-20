<template>
    <div class="clock">
        <div class="clock_label_box" ref="clock_lable" :style="{ transform: `rotate(${deg}deg)` }">
            <div class="clockLabel" v-for="(item, index) in textArry" :style="{ transform: `translate(${width * level}px, -50%) rotate(${(ro / textArry.length) * index}deg)`, 'transform-origin': `${-width * level}px 50%` }" :key="'lable' + item">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
import { log } from '../plugins/three.min';
export default {
    props: {
        width: {
            type: Number,
            default: 60,
        },
        level: {
            type: Number,
            default: 1,
        },
        origin: {
            type: Number,
            default: 0,
        },
        textArry: {
            type: Array,
            default: () => [],
        },
        deg: {
            type: Number,
            default: 0,
        },
        roteType: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            w: 0,
            ro: 0,
            monthTime: null,
            dayTime: null,
            hoursTime: null,
            minutesTime: null,
            secondsTime: null,
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            setTimeout(() => {
                this.ro = 360;
                this.currentTime = new Date();
                this.roteStart();
            }, 1000);
        },
        roteStart() {
            let time = this.currentTime;
            let m = time.getMonth();
            let d = time.getDate() - 1;
            let h = time.getHours();
            let minutes = time.getMinutes();
            let s = time.getSeconds();
            setTimeout(() => {
                if (this.roteType === "Y") {
                    this.setRotate(m)
                    this.monthTime = setInterval(() => {
                        this.setRotate(m)
                    }, 86400000);
                }
                if (this.roteType === "D") {
                    this.setRotate(d)
                    this.dayTime = setInterval(() => {
                        this.setRotate(d)
                    }, 86400000);
                }
                if (this.roteType === "H") {
                    this.setRotate(h)
                    this.hoursTime = setInterval(() => {
                        let hour = new Date().getHours();
                        this.setRotate(hour)
                    }, 60000);
                }
                if (this.roteType === "M") {
                    this.setRotate(minutes)
                    this.minutesTime = setInterval(() => {
                        let min = new Date().getMinutes();
                        this.setRotate(min)
                    }, 1000);
                }
                if (this.roteType === "S") {
                    let sec = s;
                    this.setRotate(s)
                    this.secondsTime = setInterval(() => {
                        sec++;
                        this.setRotate(sec)
                    }, 1000);
                }
            }, 1000);
        },
        backTime(num) {
            return (-360 / this.textArry.length) * num;
        },
        setRotate(num){
            this.$refs.clock_lable.style.transform = `rotate(${this.backTime(num)}deg)`;
        }
    },
};
</script>

<style>
.clock {
    position: absolute;
    width: 90px;
    height: 90px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.clock_label_box {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotate(-60deg);
    transition: all 1s;
}
.clockLabel {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    white-space: nowrap;
    padding: 0 5px;
    text-align: center;
    transform: translate(-50%, -50%);
    transform-origin: 0% 0%;
    color: #fff;
    transition: all 1s;
    font-size: 14px;
    width: 60px;
    text-align: center;
}
</style>
