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
      <div class="cardLine__groupCards">
       <center v-if="$store.state.arrive == null || $store.state.arrive.length == 0"> <div  class="spin"> </div></center>
        <CardLine 
          v-else
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
  // props:['line'],
  components: {
    CardLine
  },
  data() {
    return {
      iconBusLine:BusLine,
    }
  },
  //    beforeMount(){
  //   this.$store.dispatch('setStop',this.$route.params)
  // },
   beforeUpdate(){
    this.$store.dispatch('setStop',this.$route.params)
  }
}
</script>

<style>
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
  /* .cardLine__groupCards{
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  } */
  .cardLine__groupCards{
    display:grid;
    gap:1rem;
    grid-template-columns: repeat(auto-fill,minmax(23rem, 1fr));
  }
  .line__groupCard{
    margin-bottom: 60px;
  }
</style>