<template>
  <div>
    <div  class="aluxioners__group" >
      <Card
        v-for="(alux, index) in aluxioners"
        :name="alux.name"
        :work="alux.work"
        :image="alux.image"
        :houseId="alux.house"
        :aluxionId="alux.aluxion" 
        :key="index">
   
      </Card>
    </div>
  </div>
</template>

<script>
import alux1 from '../../assets/Aluxioners/alux1.png';
import alux2 from '../../assets/Aluxioners/alux2.png';
import alux3 from '../../assets/Aluxioners/alux3.png';
import alux4 from '../../assets/Aluxioners/alux4.png';
import alux5 from '../../assets/Aluxioners/alux5.png';
import alux6 from '../../assets/Aluxioners/alux6.png';
import Card from './Card.vue';
export default {
  components: {
    Card
  },
  data() {
    return {
      aluxioners:[
        {
          name: "Aluxioner 00",
          work: "CEO & Founder",
          image: alux1,
          house: 681,
          aluxion:288
        },
        {
          name: "Aluxioner 01",
          work: "Frontend developer",
          image: alux2,
          house: 3378,
          aluxion:494
        },
           {
          name: "Aluxioner 02",
          work: "Backend Developer",
          image: alux3,
          house:2908,
          aluxion:1229
        },
           {
          name: "Aluxioner 03",
          work: "Mobile developer",
          image: alux4,
          house:1688,
          aluxion:2710
        },
           {
          name: "Aluxioner 04",
          work: "Head of Backend",
          image: alux5,
          house:59,
          aluxion:85
        },
           {
          name: "Aluxioner 05",
          work: "Designer",
          image: alux6,
          house:189,
          aluxion:806
        }
      ]
    }
  },
}
</script>

<style>
  .aluxioners__group{
    display: flex;
    justify-content: space-evenly !important;
    flex-wrap: wrap;
  }
 @media (max-width: 800px) {
    .aluxioners__group{
      justify-content: space-evenly;
    }
  }
   @media (max-width: 640px) {
    .aluxioners__group{
      justify-content: space-between;
      height: 74vh;
      overflow: auto;
    }
    .aluxioners__group::-webkit-scrollbar {
    -webkit-appearance: none;
}

.aluxioners__group::-webkit-scrollbar:vertical {
    width:10px;
}
  }
</style>