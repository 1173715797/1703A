<template>
    <div class="home">
        <dir class="tit">
            地址
        </dir>
        <div class="he">
            <router-link to="/home/ddcs">多点超市</router-link>
            <router-link to="/home/qqjx">全球精选</router-link>
        </div>
        <div class="dd">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.he a{
  margin:10px;
}
.router-link-exact-active{
  color:red;
  border-bottom: 1px solid red;
}
.dd{
    overflow-y: auto;
}
</style>