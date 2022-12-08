import axios from 'axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
    users: ['Samuel Abatneh'],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    setUsers: (state, users) => (state.users = users)
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const users = await axios.get(`https://face-detect.up.railway.app/users`)
        console.log(users.data)
        commit('setUsers', users.data)
      } catch (err) { console.log(err) }
    },
  }
})

/*

*/