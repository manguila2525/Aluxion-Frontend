import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    modal:false,
    arrive: null,
    stop: 70,
    dataStop: null
  },
  mutations: {
    setModal(state, payload){
      state.modal = !state.modal
      
    },
    setStop(state, payload){
      state.stop = payload.StopInfo
      state.arrive = payload.Arrive
      // console.log(state.stop)
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
