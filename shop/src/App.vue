<template>
  <div id="app">
    <div class="inner">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer'
export default {
  props:{

    },
    components:{
      Footer
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

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box; 
  color:#000;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
.inner{
  flex: 1;
}
.footer{
  height: 44px;
  line-height: 44px;
  display: flex;
}
.footer a{
  flex: 1;
  text-align: center;
}


</style>
