<template>
  <div class="line__groupCard">
    <div class="titleLine">
      <div class="titleLine__icon">
        <img :src="iconBusLine" alt="BusIcon">
      </div>
      <div>
        <h3 class="titleLine__title">Línea {{$route.params.id}}</h3>
      </div>
    </div>
    <div>
       <div class="center" v-if="$store.state.arrive == null || $store.state.arrive.length == 0"> <div  class="spin"> </div></div>
      <div  v-else class="cardLine__groupCards">
        <CardLine 
          v-for="(arrive, index) in $store.state.arrive" 
          :key="index" 
          :arrive="arrive"
          />
      </div>
    </div>
  </div>
</template>

<script>
import BusLine from '../../assets/Icons/BusLine.png';
import CardLine from './CardLine';
export default {
  components: {
    CardLine
  },
  data() {
    return {
      iconBusLine:BusLine,
    }
  },
   beforeUpdate(){
    this.$store.dispatch('setStop',this.$route.params)
  }
}
</script>

<style>
  .center{
    width:100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spin {
    border: 3px solid hsla(185, 100%, 62%, 0.2);
    border-top-color: #3cefff;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  } 
  .titleLine{
    display:flex;
    margin-bottom:20px;
  }
  .titleLine__icon{
    margin-right: 17px;
    padding-left: 22px;
  }
  .titleLine__title{
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
  }
  .cardLine__groupCards{
    display:grid;
    gap:1rem;
    grid-template-columns: repeat(auto-fill,minmax(23rem, 1fr));
  }
  .line__groupCard{
    margin-bottom: 60px;
    height:55vh;
    overflow:auto;
  }
   .line__groupCard::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  .line__groupCard::-webkit-scrollbar:vertical {
      width:1px;
  }
  @media (max-width:940px) {
    .cardLine__groupCards{
      grid-template-columns: repeat(auto-fill,minmax(15rem, 1fr));
    }
  }
</style>