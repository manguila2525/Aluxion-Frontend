<template>
  <div  class="cardLine" v-if="arrive.DistanceBus !== 0 || arrive.length !== 0" >
    <div class="cardLine__lineDirection">
      <h2>{{arrive.line}}</h2>
    </div>
    <div class="cardLine__info">
      <h2 class="cardLine__title" id="cardLine__title">{{arrive.destination}}</h2>
      <div class="cardLine__groupTitle">
      </div>
      <div class="cardLine__footer">
        <div class="cardLine__groupTime">
          <div class="cardLine__iconClock">
            <img :src="icons.clock" alt="ClockIcon">
          </div>
          <div class="cardLine__time">
            <h3>{{(arrive.estimateArrive/60).toFixed(0)}} min</h3>
          </div>
        </div>
        <div class="cardLine__groupDistance">
          <div class="cardLine__iconDistance">
            <img :src="icons.distance" alt="DistanceIcon">
          </div>
          <div class="cardLine__distance">
            <h3>{{arrive.DistanceBus}} mt</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1 v-else>No hay transporte disponible</h1>
</template>

<script>
import Clock from '../../assets/Icons/Clock.png';
import Distance from '../../assets/Icons/Distance.png';
export default {
  props:['arrive'],
  data() {
    return {
      icons:{
        clock: Clock,
        distance:Distance
      }
    }
  },
  }
</script>

<style>
  .cardLine{
    flex-grow: 1;
    display: flex;
    height:106px;
    border-radius:4px;
    background: #1D3051;
    color: #fff;
    cursor: pointer;
  }
  .cardLine:hover, .cardLine:active, .cardLine:focus{
    background: #FFFFFF;
    color: #091E42;
  }
  .cardLine:hover {
    color: #091E42;
  }
  .cardLine__lineDirection{
    position: relative;
    padding-right: 12px;
    padding-left: 14px;
    padding-top: 22px;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
  }
  .cardLine__info{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-top:19px;
    padding-bottom:12px;
    padding-right: 20px;
  }
  .cardLine__title{
    font-size: 18px;
    line-height: 21px;
  }
  .cardLine__subtitle{
    font-size: 13px;
    line-height: 16px;
    color: #EBECF0;
  }
  .cardLine__footer{
    display: flex;
    justify-content:space-between;
  }
  .cardLine__time{
    font-size: 12px;
    line-height: 14px;
    color: #FFC121;
  }
  .cardLine__groupDistance, .cardLine__groupTime{
    display: flex;
    gap:6px;
    align-items:center;
  }
  .cardLine__distance{
    font-size: 12px;
    line-height: 14px;
    color: #2DC8A6;
  }
</style>