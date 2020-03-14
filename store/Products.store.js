import axios from 'axios'
import { API_URI } from '~/utils/constants'

export const state = () => ({
  list: []
})

export const mutations = {
  set (state, payload) {
    state.list = payload
  }
}

export const actions = {
  async fetch (context) {
    try {
      const { data } = await axios.get(`${API_URI}/products`)
      context.commit('set', data)
    } catch (err) {
      window.alert(err.message)
    }
  }
}
