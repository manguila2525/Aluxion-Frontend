<template>
  <nav>
    <div>
      <h1 class="navbar__brand">        <img src="../../assets/Aluxioners/Aluxion-Web.png" alt="Logo Alux">
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

      <label for="search" class="detail__headerDesktop">
    
          <input 
            @click="handleClass"
            v-model="search"
            id="search"
            type="search" 
            placeholder="¿Cuál es tu parada?"
            class="seccion1__input"
            />
          <router-link :to="{name: 'Detail', params: { id: search }}"><img src="../../assets/Home/Vector.png" alt="lupa" ></router-link> 
      
        </label>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      show:false,
      search: "¿Cuál es tu parada?"
    }
  },

 methods: {
    look(){
      const todo = document.querySelector(".about")
      todo.style.overflow = "hidden" 
      this.show = !this.show
    },
     close(){
     const todo = document.querySelector(".about")
     todo.style.overflow = "auto"
     this.show = !this.show
   },
    handleClass(){
      const line = document.getElementsByClassName('detail__headerDesktop')[0]
      const input = document.getElementById("search")
      line.classList.add("line")
      input.value= ""
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
  .detail__headerDesktop{
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    justify-content: space-between;
    /* border-bottom: solid 1px #8993A4; */
    padding-bottom: 7.47px;
    padding-right: 7px;
    height: 35%;
    max-width: 414px;
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
        height: 73%;
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
      .detail__headerDesktop{
    display:none;
  }
    }
</style>