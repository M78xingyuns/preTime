<template>
    <div class="menuHolder">
        <div class="menuWindow">
            <ul class="p1">
                <li class="s1">
                    <a href="javascript:;">导航菜单</a>
                    <ul id="p2" class="p2">
                        <li class="s2" v-for="item in arr" :key="item.key" @click="toLink(item)">
                            <a href="javascript:;"><span>{{item.name}}</span></a>
                            <ul class="p3 a3">
                                <!-- <li><a href="javascript:;">打印</a></li>
                                <li><a href="javascript:;">编辑</a></li>
                                <li><a href="javascript:;">保管</a></li> -->
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
@import url("./menu.css");
</style>
<script>
export default {
  data() {
    return {
      arr: [
        { name: "home", path: "/", key: 1636173921212 },
        { name: "粒子", path: "/li", key: 1636173921213 },
        { name: "zanwei", path: "/aa", key: 1636173921214 },
        { name: "zanwei", path: "/aa", key: 1636173921215 },
        { name: "zanwei", path: "/aa", key: 1636173921216 },
        { name: "zanwei", path: "/aa", key: 1636173921217 },
      ],
    };
  },
  methods:{
      toLink(opt){
          this.$router.push(opt.path)
      }
  }
};
</script>
