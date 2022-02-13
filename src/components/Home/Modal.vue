<template>
    <div v-if="modal" class="modal">
    <div class="modal__content">
      <div class="btn__modal--cerrar" @click="viewModal">cerrar</div>
      <div>
        <h1>Hey {{name}},</h1>
        <h1>¿Cuál es tu rumbo, aluxioner?</h1>
      </div>
      <div class="btn__group">
        <button class="btn">Casa</button>
        <button class="btn">Aluxion</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  props:['name'],
  computed: {
    ...mapState['modal'],
    getModal(){
      console.log(modal)
    }
  },
}
</script>

<style>
  .modal{
    height: 131%;
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
    padding-top:46px;
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
</style>