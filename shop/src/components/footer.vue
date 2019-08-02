<template>
  <div class="footer">
      <router-link to="/home">配送到家</router-link>
      <router-link to="/fenlei">分类</router-link>
      <router-link to="/huiyuan">会员</router-link>
      <router-link to="/car">购物车</router-link>
      <router-link to="/my">我的</router-link>
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
.router-link-exact-active{
  color:red;
}
</style>