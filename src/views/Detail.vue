<template>
  <div class="about">
    <transition 
      appear 
      @before-enter="beforeEnterCards"
      @enter="enter"
      >
      <div class="left container">
        <Navbar/>
        <Search/> 
        <SeccionLines/>
      </div>
    </transition>
    <div class="right">
      <iframe 
        src="https://mynavega.emtmadrid.es/MapViewer/?state=%7B%22visibleLayers%22%3A%7B%7D%2C%22extent%22%3A%22-413866.55079267366%2C4931296.702704685%2C-409519.19480883976%2C4933343.781868501%2C102100%22%7D">
      </iframe>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

import Navbar from '../components/Detail/Navbar2.vue';
import Search from '../components/Detail/Search.vue';
import SeccionLines from '../components/Detail/SeccionLines.vue';
export default {
    setup() {
    const leftR = (el) => {
      el.style.zIndex = -1
      el.style.transform = 'translateX(0)'
      el.style.opacity = 0
    }
    const beforeEnterCards = (el) => {
      el.style.transform = 'translateX(-160px)'
      el.style.opacity = 0
    } 
    const enter = (el) => {
      console.log("Enter")
      gsap.to(el, {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'ease'
      })
    }
    return {beforeEnterCards, enter, leftR}
  },
  created() {
    this.$store.dispatch('setStop',this.$route.params) 
  },
  mounted() {
    this.$store.dispatch('setStop',this.$route.params)
  },
  beforeMount(){
    this.$store.dispatch('setStop',this.$route.params)
  },
  components:{
    Navbar,
    Search,
    SeccionLines
  }
}
</script>

<style scoped>
  iframe{
    width: 100%;
    height: 100vh;
  }
  .about{
    overflow-x: hidden;
    display: flex;
    height: 100vh;
  }
  .left{
    overflow-y:auto;
    flex-grow: 1;
    max-width: 40%;
  }
  .left::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  .left::-webkit-scrollbar:vertical {
      width:10px;
  }
  .right{
    flex-grow: 1;
    background: #ccc;
    min-width:40%;
  }
  @media (max-width:900px){
    .left{
      width: 100%;
      overflow-y:auto;
      flex-grow: 1;
      max-width: 100%;
    }
    .right{
      cursor: pointer;
      bottom:20px;
      right: 20px;
      position: absolute;
      width:100px;
      flex-grow: 0;
      min-width: 100px;
      height:100px;
      border-radius: 9999px;
      overflow: hidden;
    }
    iframe{
      cursor: pointer;
      width: 100%;
      height: 100px;
      background-size: 100% 100%;
    }
    iframe::after{
      content: '';
      cursor: pointer;
    }
  }
</style>