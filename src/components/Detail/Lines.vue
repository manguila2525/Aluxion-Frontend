<template>
  <div>
    <!-- :line="lin" -->
      <TitleLine />
    <!-- <div v-for="(lin, index) in line" :key="index"> -->
    <!-- </div> -->
  </div>
</template>

<script>
import TitleLine from './TitleLine';
// import CardLine from './CardLine';
export default {
  // props:['line'],
  components: {
    TitleLine,
    // CardLine
  },

}
</script>

<style>

</style>