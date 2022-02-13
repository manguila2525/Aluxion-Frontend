<template>
  <nav>
    <div>
      <h1 class="navbar__brand">
        <img src="../../assets/Aluxioners/Aluxion-Web.png" alt="Logo Alux">
      </h1>
    </div>
    <div class="navbar__group">
      <button @click="look" class="btn__nav" v-if="!show"><img src="../../assets/Icons/Burger.png" alt="Burger"> </button>
      <button @click="close" class="btn__nav"  v-else><img src="../../assets/Icons/Close.png" alt="Burger"></button>
      <div>
        <ul v-if="show">
          <li>
            <router-link to="/">metro</router-link>
          </li>
          <li class="nav__linkMargin--center">
            <router-link to="/">cercanías</router-link>
          </li>
          <li>
            <router-link to="/">carsharing</router-link>
          </li>
        </ul>
      </div>

      <ul class="navbar__groupList">
        <li>
          <router-link to="/">metro</router-link>
        </li>
        <li class="nav__linkMargin--center">
          <router-link to="/">cercanías</router-link>
        </li>
        <li>
          <router-link to="/">carsharing</router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      show:false
    }
  },
  methods:{
    look(){
      const todo = document.querySelector("body")
      todo.style.overflow = "hidden" 
      this.show = !this.show
    },
     close(){
     const todo = document.querySelector("body")
     todo.style.overflow = "auto"
     this.show = !this.show
   }
  },
}
</script>

<style scoped>
  button{
    display: none;
  }
  nav{
    display:flex;
    align-items: center;
    justify-content:space-between;
  }
  ul, .navbar__groupList{
    display:flex; 
    list-style:none;
  }
  a{
    text-decoration: none;
    color: #ffffff;
  }
  .nav__linkMargin--center{
    margin: 0 90px;
  }
  .navbar__brand{
    font-weight: 100;
  }
  .btn__nav{
    border:none;
    background:transparent;
  }
    @media (max-width: 760px) {
      button{
        display:block;
      }
      .navbar__group{
        width: 100%;
        display: flex;
        justify-content: end;
      }
      ul{
        width: 100%;
        position: absolute;
        top: 70px;
        left: 0;
        z-index: 10;
        background: #091e42;
        height: 151%;
        display: flex;
        flex-direction: column;
        padding-top: 150px;
        gap: 44px;
        text-align: center;
        font-size: 26px;
        line-height: 31px;
      }
      .navbar__groupList{
        display: none;
      }
    }
</style>