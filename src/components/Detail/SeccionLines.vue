<template>
 
   <!-- <h1 v-if="$store.state.arrive == null"> Cargando </h1>

  <div v-else v-for="(arrive, index) in $store.state.arrive" :key="index">
    {{arrive}}
  </div> -->
    <!-- v-for="(line, index) in lines" 
    :key="index"
    :line="line" -->
  <Lines />
</template>

<script>

import Lines from './Lines.vue';
export default {
  data() {
    return {
      // lines:null
      // lines: {
      //   code: this.$store.state.stop.code,
      //   data: this.$store.state.stop.data
      // }
      // lines:[
      //   [
      //     { 
      //       direccionLine: 220,
      //       data:[
      //         {
      //           name:'Plaza Lima',
      //           subName:'Hortaleza',
      //           time: 10,
      //           distance:300
      //         },
      //         {
      //           name:'Madrid',
      //           subName:'Galicia',
      //           time: 5,
      //           distance:150
      //         },
      //         {
      //           name:'Plaza Lima',
      //           subName:'Hortaleza',
      //           time: 10,
      //           distance:300
      //         },
      //       ]
      //     }
      //   ],
      //     [
      //     { 
      //       direccionLine: 600,
      //       data:[
      //           {
      //           name:'Plaza Lima',
      //           subName:'Hortaleza',
      //           time: 10,
      //           distance:300
      //         },
      //         {
      //         name:'Plaza Lima',
      //         subName:'Hortaleza',
      //         time: 10,
      //         distance:300
      //       }
      //       ]
      //     }
      //   ],
      // ]
    }
  },
  // mounted() {
  //   this.lines = this.$store.state.stop
  // },

  components: {
    Lines
  },
  

  // created(){
  //   this.$store.dispatch('setStop',this.$route.params)
  // },
  // mounted() {
  //   console.log("4");
  //   this.lines = this.$store.state.stop
  // }

}
</script>

<style>

</style>