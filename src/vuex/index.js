import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: localStorage.getItem('contagem')!=null?localStorage.getItem('contagem'):0
    },
    mutations: {
      incrementar (state) {
        state.count++;
        localStorage.setItem('contagem', this.state.count);
      },
      decrementar (state) {
        state.count--;
        localStorage.setItem('contagem', this.state.count);
      },
      zerar (state) {
        state.count = 0;
        localStorage.setItem('contagem', this.state.count);
      }
    }
  })

export default store