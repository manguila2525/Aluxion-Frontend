<template>
  <div class="app" @click="closeMargin">
    <router-view/>
  </div>
</template>

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
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .container{
    padding: 0 80px;
    padding-top: 69px;
  }
  @media (max-width: 760px) {
    .container{
      padding: 0 16px;
      padding-top: 40px;
    }
  }
</style>
