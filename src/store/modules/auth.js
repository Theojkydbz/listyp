import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:3002'
  });

export default {
    namespaced: true,
    state:{
        user:{},
        isAuthResolved: false
    },
    getters:{
        authUser (state) {
            return state.user || null
        },
        isAuthenticated (state) {
            return !!state.user
        }
    },
    actions:{
        loginWithEmailAndPassword (context, userData){
            return instance.post('/api/v1/users/login', userData)
                .then(res => {
                    const user = res.data
                    localStorage.setItem('meetuper-jwt', user.token)
                    context.commit('setAuthUser', user)
                })
        },
        registerUser (context,userData) {
            return instance.post('/api/v1/users/register', userData)
        },
        logout ({commit}) {
            return new Promise((resolve) => {
              localStorage.removeItem('meetuper-jwt')
              commit('setAuthUser', null)
              resolve(true)
            })
          },
        getAuthUser({commit, getters}){
            const authUser = getters['authUser']
            const token = localStorage.getItem('meetuper-jwt')

            if (authUser) { return Promise.resolve(authUser) }

            const config = {
                headers: {
                'Cache-Control': 'no-cache',
                'authorization' : 'Bearer '+token
                }
            }

            return instance.get('/api/v1/users/me', config)
                .then((res) => {
                    const user = res.data
                    localStorage.setItem('meetuper-jwt', user.token)
                    commit('setAuthUser', user)
                    commit('setAuthState', true)
                    return user
                })
                .catch(() => {
                    commit('setAuthUser', null)
                    commit('setAuthState', true)
                    return undefined
                })
        }
    },
    mutations: {
        setAuthUser (state, user) {
          return state.user = user
        },
        setAuthState (state, authState) {
          return state.isAuthResolved = authState
        }
    }

}
