<template>
  <div class="about">
    <transition 
    appear 
    @before-enter="beforeEnterCards"
    @enter="enter">
    <div class="left container">
      <Navbar/>
            <!-- <transition 
    appear 
    @before-enter="beforeEnter"
    @enter="enter"> -->
      <Search/> 
       <!-- </transition>
        <transition 
    appear 
    @before-enter="beforeEnter"
    @enter="enter">
    -->
      <SeccionLines/>
        <!-- </transition> -->
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
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import Navbar from '../components/Detail/Navbar.vue';
import Search from '../components/Detail/Search.vue';
import SeccionLines from '../components/Detail/SeccionLines.vue';
export default {
  // data() {
  //   return {
  //     id: this.$route.params,
  //   }
  // },
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
  // mounted(){
  //     console.log("aquiCreate");
  //   this.$store.dispatch('setStop', this.id.id)
  //   this.direcction = $store.state.stop[0].stopName
  // },
  // mounted(){
  //   console.log("aqui");
  //   this.$store.dispatch('setStop', this.id.id)
  // },
  components: {
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
  .right{
    flex-grow: 1;
    background: #ccc;
    min-width:40%;
  }
</style>