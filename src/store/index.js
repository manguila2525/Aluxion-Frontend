import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    modal:false,
    arrive: null,
    stop: 70,
    dataStop: null,
    switchLigth:false,
    marginLine: false
  },
  mutations: {
    setModal(state, payload){
      state.modal = !state.modal
      
    },
    setStop(state, payload){
      state.stop = payload.StopInfo
      state.arrive = payload.Arrive
    },
   cardLines(state){
      const cardLine = document.querySelector('.cardLine__groupCards')
      cardLine.style.display = 'flex'
      cardLine.style.flexDirection = 'column'
      state.switchLigth = true
    },
    cardGrip(state){
      const cardLine = document.querySelector('.cardLine__groupCards')
      cardLine.style.display = 'grid'
      state.switchLigth = false
    },
    lineMargin(state){
      const line = document.getElementsByClassName('detail__headerDesktop')[0]
      const input = document.getElementById("search")
      state.marginLine = true
    console.log("white")
      line.style.borderBottom = "solid 1px #fff"
      input.value= ""
      if(state.marginLine){
      }
    },
    closeMargin(state){
      const line = document.getElementsByClassName('detail__headerDesktop')[0]
      const input = document.getElementById("search")
      line.style.borderBottom = "transparent"
      state.marginLine = false
      console.log("transparente")
    }
  },
  getters:{
    getStop(state){
      return state.stop
    }
  },
  actions: {
   async setStop({commit}, id){
     const {data} = await axios.post(`http://localhost:3000/api/stop`, id)
    //  console.log(data)
     commit('setStop', data)
    }
  },
  modules: {
  }
})
