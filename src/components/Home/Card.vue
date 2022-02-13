<template>
  <transition 
    appear 
    @before-enter="beforeEnter"
    @enter="enter">
  <div class="alux" @click="viewModal">
    <div class="alux__img">
      <img :src="image" :alt="name"/>
    </div>
    <h2 class="alux__name">{{name}}</h2>
    <h3 class="alux__work">{{work}}</h3>
  </div>
  </transition>
  <div v-if="modal" class="modal">
    <div class="modal__content">
      <div class="btn__modal--cerrar" @click="closeModal">cerrar</div>
      <div>
        <h1>Hey {{name}},</h1>
        <h1>¿Cuál es tu rumbo, aluxioner?</h1>
      </div>
      <div class="btn__group">
        <router-link :to="{name: 'Detail', params: { id: houseId }}"><button class="btn"  @click="closeModal">Casa</button></router-link>
        <router-link :to="{name: 'Detail', params: { id: aluxionId }}"><button class="btn"  @click="closeModal">Aluxion</button></router-link>
      </div>
    </div>
  </div>
   
</template>

<script>
import { gsap } from "gsap";

export default {
  props:['name', 'work', 'image', 'houseId', 'aluxionId'],
  data() {
    return {
      modal: false
    }
  },
  methods: {
    viewModal(){
      const todo = document.querySelector("body")
      todo.style.overflow = "hidden"
      this.modal = !this.modal
    },
    closeModal(){
      const todo = document.querySelector("body")
      todo.style.overflow = "auto"
      this.modal = !this.modal
    }
  },
  setup() {
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(60px)'
      el.style.opacity = 0
    } 
    const enter = (el) => {
      gsap.to(el, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: 'ease'
      })
    }
    return {beforeEnter, enter}
  }
}
</script>

<style>
  .modal{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #091e42b2;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    padding: 0 20px;
  }
  .modal__content{
    padding-top: 25px;
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 651px;
    height: 325px;
    background: #fff;
    color:#091E42;
  }
  .modal__content h1{
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.02em;
  }
  .btn__modal--cerrar{
    border:none;
    background:transparent;
    color:#091E42;
    position: absolute;
    top: 50px;
    cursor: pointer;
  }
  .btn__group{
    padding-top:46px ;
    }
  .btn{
    padding: 11px 32px;
    background: #091E42;
    border-radius: 35px;
    border:none;
    color:#fff;
    width:112px;
    margin: 0 41px;
    cursor: pointer;
  }

  .alux{
    margin-bottom: 20px;
    cursor: pointer;
    transition:all 600ms ease
  }
  .alux:hover, .alux:active, .alux:focus{
    transform:translateY(-20px) !important;
  }
 .alux__name{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 6px;
  }
  .alux__work{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #8993A4;
  }
  .alux__img{
    background: rgba(9, 30, 66, 0.95);
    mix-blend-mode: screen;
    margin-bottom: 20px;
    height:210px;
  }
  @supports(object-fit: cover){
    .alux__img img{
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
    @media (max-width: 800px) {
      .alux__img{
        width: 162px;
        height: 172.6px;
        overflow:hidden;
      }
      .alux__img img {
        width: 100%;
        height: auto;
      }
      .btn{
        margin: 0 10px;
      }
    }
</style>