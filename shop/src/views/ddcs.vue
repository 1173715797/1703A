<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <img :src="item.img" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min";
export default {
  props: {},
  components: {},
  data() {
    return {
      list: []
    };
  },
  computed: {},
  methods: {
    name(data) {
      this.list = data;
      console.log(this.list);
    }
  },
  created() {
    axios.get("/api/swiper").then(res => {
      this.list = res.data.data;
      this.name(res.data.data);
    });
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop:true,
      observer: true,
      observeParents: true
    });
  }
};
</script>
<style scoped lang="">
.swiper-slide img {
  width: 100%;
  height: 120px;
}
</style>