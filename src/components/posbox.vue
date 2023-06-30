<template>
    <div class="clock">
        <div class="clock_label_box" ref="clock_lable" :style="{ transform: `rotate(${deg}deg)` }">
            <div
                class="clockLabel"
                v-for="(item, index) in textArry"
                :class="[{ textColor: index == currentLight() },{opct:index == 0 && startType},{hide:startType}]"
                :style="{ transform: `translate(${width * level}px, -50%) rotate(${(ro / textArry.length) * index}deg)`, 'transform-origin': `${-width * level}px 50%` }"
                :key="'lable' + item"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
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
            monthTimeLight: -1,
            dayTimeLight: -1,
            hoursTimeLight: -1,
            minutesTimeLight: -1,
            secondLight: -1,
            startType:true,
            rostartTime:null,
            roteSend:0
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            setTimeout(()=>{
                this.ro = 360;
                this.startType = false;
                this.roteStart();
            })
        },
        roteStart(){
            clearInterval(this.rostartTime)
            this.rostartTime = setInterval(()=>{
                this.getTime();
            },1000)
            let time = new Date();
            this.roteSend = time.getSeconds();
        },
        getTime(){
            let time = new Date();
            let m = time.getMonth();
            let d = time.getDate() - 1;
            let h = time.getHours();
            let minutes = time.getMinutes();
            if (this.roteType === "Y") {
                this.setRotate(m);
                this.monthTimeLight = m;
            }
            if (this.roteType === "D") {
                this.setRotate(d);
                this.dayTimeLight = d;
            }
            if (this.roteType === "H") {
                this.setRotate(h);
                this.hoursTimeLight = h;
            }
            if (this.roteType === "M") {
                this.setRotate(minutes);
                this.minutesTimeLight = minutes;
            }
            if (this.roteType === "S") {
                this.roteSend++;
                this.setRotate(this.roteSend);
                this.secondLight = this.roteSend%60
            }
        },
       
        backTime(num) {
            return (-360 / this.textArry.length) * num;
        },
        setRotate(num) {
            if (this.$refs.clock_lable) {
                this.$refs.clock_lable.style.transform = `rotate(${this.backTime(num)}deg)`;
            } else {
                this.$nextTick(() => {
                    this.$refs.clock_lable.style.transform = `rotate(${this.backTime(num)}deg)`;
                });
            }
        },
        currentLight() {
            if (this.roteType === "Y") {
               return this.monthTimeLight;
            }
            if (this.roteType === "D") {
                return this.dayTimeLight;
            }
            if (this.roteType === "H") {
                return this.hoursTimeLight;
            }
            if (this.roteType === "M") {
                return this.minutesTimeLight;
            }
            if (this.roteType === "S") {

                return this.secondLight;
            }
            return -1
        },
    },
    beforedestroy(){
        clearInterval(this.rostartTime)
    }
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
.textColor {
    color: skyblue;
}
.hide{
    opacity: 0;
}
.opct{
    opacity: 1;
}
</style>
