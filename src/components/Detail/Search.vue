<template>
  <div class="search">
    <div>
      <router-link to="/"><img :src="iconArrow" alt="ArrowIcon" class="btn__iconSearch"></router-link>
    </div>
    <div>
      <h3 class="search__subtitle">Autobuses cercanos</h3>
    </div>
    <div class="search__barra">
      <h1 class="search__title" v-for="(stop, index) in getStop" :key="index">{{stop.stopName}}</h1>
      <div class="search__groupIcons">
        <img class="search__icon--points btn__iconSearch" :src="iconPoints" alt="PointsIcon">
        <img class="search__icon--points btn__iconSearch" :src="iconLineOff" alt="PointsIcon">
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Arrow from '../../assets/Icons/Arrow.png';
import Points from '../../assets/Icons/fourPoint.png';
import LineOff from '../../assets/Icons/Lines-Off.png';
export default {
  data() {
    return {
      iconArrow: Arrow,
      iconPoints: Points,
      iconLineOff: LineOff
    }
  },
  computed:{
    ...mapGetters([
      'getStop'
    ])
  }
}
</script>

<style>
  .search{
    margin-top:86px;
    margin-bottom:51px;
  }
  .search__title{
    font-size: 33px;
    line-height: 39px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.9);
  }
  .search__subtitle{
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #42526E;
    margin-top:16px;
    margin-bottom: 8px;
  }
  .search__barra{
    display: flex;
    justify-content:space-between;
    border-bottom: 0.5px solid #42526E;
    padding-bottom: 8px;
  }
  .search__icon--points{
    margin: 0 3px;
  }
  .btn__iconSearch{
    cursor: pointer;
  }
</style>