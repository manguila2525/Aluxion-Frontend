<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
@font-face {
  font-family: Aluxion;
  src: url("./assets/Font/SFPRODISPLAYBOLD.OTF") ;
}

#app {
  box-sizing: border-box;
  font-family: Aluxion;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #091E42;
    /* height:100vh; */
}


#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
  padding: 0 80px;
  padding-top: 69px;
}
@media (min-width: 1345px) {
#app{
  /* height:100vh; */
}
}
@media (max-width: 760px) {
  .container{
    padding: 0 16px;
    padding-top: 40px;
  }
}
</style>
