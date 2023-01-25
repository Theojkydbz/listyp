
import Vuex from 'vuex'

import auth from './modules/auth'

export default new Vuex.Store({
    modules:{
        auth,
    },
    // Simple functions to mutate a state
    mutations: {
      setItems (state, {resource, items}) {
        state[resource].items = items
      },
      setItem (state, {resource, item}) {
        state[resource].item = item
      }
    }
  })