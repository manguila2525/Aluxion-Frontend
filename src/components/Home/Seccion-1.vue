<template>
  <section class="seccion1">
    <div class="seccion1__groupTitle">
      <h1 class="seccion1__title">Don’t be late, aluxioner</h1>
    </div>
    <label  for="search" class="seccion1__groupInput">
      <input 
        id="search"
        type="search" 
        placeholder="¿Cuál es tu parada?"
        class="seccion1__input"
        v-model="search"
        autocomplete="off"
        @click="handleClass"
        />
       <router-link :to="{name: 'Detail', params: { id: search }}"><img src="../../assets/Home/Vector.png" alt="lupa" ></router-link> 
    </label>
    <label for="search2" class="seccion1__groupInput--mobile">
      <input 
        id="search2"
        type="search" 
        v-model="search"
        @click="handleClass"
        class="seccion1__input--mobile"
        />
     <router-link :to="{name: 'Detail', params: { id: search }}"><img src="../../assets/Home/Vector.png" alt="lupa" for="search2" ></router-link> 
    </label>
  </section>
</template>

<script>

export default {
  data() {
    return {
      search: "¿Cuál es tu parada?"
    }
  },
  methods: {
    handleClass(){
      const line = document.getElementsByClassName('seccion1__groupInput')[0]
      const input = document.getElementById("search")
      line.classList.add("line")
      input.value= ""
      const input2 = document.getElementById("search2")
      input2.value= ""
      console.log(line);
    }
  }
}
</script>

<style>
  .line{
    border-bottom: 1px solid;
  }
  .seccion1{
    display:flex;
    align-items: center;
    height:445px;
    justify-content: space-between;
  }
  .seccion1__title{
    font-size:92px;
    font-weight: bold;
    line-height: 105px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.9);
  }
  .seccion1__groupTitle{
    flex-grow: 1;
    max-width: 738px;
  }
  .seccion1__groupInput{
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 7.47px;
    padding-right: 7px;
    height: 35%;
    max-width: 414px;
  }
  .seccion1__groupInput--mobile{
    display: none;
  }
  .seccion1__input{
    outline:none;
    border: none;
    font-size: 16px;
    background:transparent;
    color:#444343;
    width: 100%;
    min-width: 159px;
    transition:all 1s ease;
  }
  .seccion1__input:active, .seccion1__input:focus {
    color:#fbfbfb;
  }
  .seccion1__input::placeholder{
    color:#444343;
  }
   @media (max-width: 645px)  {
     .seccion1{
        align-items: end;
        height: 137px;
        margin-bottom: 27px;
        border-bottom: 1px solid #8993A4;
        padding-bottom: 12px;
     }
      .seccion1__title{
        font-size:26px;
        line-height: 30px;
        letter-spacing: 0.02em;
      }
      .seccion1__groupTitle{
        width: 300px;
      }
      .seccion1__groupInput{
        display:none;
      }
      .seccion1__groupInput--mobile{
        display:flex;
        width: 80%;
      }
      .seccion1__input--mobile{
        flex-grow: 1;
        width: 100%;
        outline:none;
        border: none;
        color:#fff;
        background:transparent;
      }
    }
  
</style>