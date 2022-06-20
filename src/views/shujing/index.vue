<template>
    <div class="box" id="box"></div>
</template>

<script>
import particle from "../../plugins/render.js";
export default {
    name: "Home",
    methods: {
        init() {
            this.$nextTick(() => {
                console.log(document.getElementById(box));
                particle("box");
            });
        },
    },
    mounted() {
        this.init();
    },
};
</script>
