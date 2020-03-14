import axios from 'axios'
import { API_URI } from '~/utils/constants'

export const state = () => ({
  list: [],
  fetching: false,
  limit: 10,
  offset: 0,
  hasMore: true
})

export const mutations = {
  set (state, payload) {
    state.list = payload
  },

  fetching (state, payload) {
    state.fetching = payload
  },

  offset (state, payload) {
    state.offset += payload
  },

  hasMore (state, payload) {
    state.hasMore = payload
  }
}

export const actions = {
  async fetch (context) {
    const { limit, offset, list, hasMore } = context.state

    if (hasMore) {
      try {
        context.commit('fetching', true)

        const { data } = await axios.get(`${API_URI}/products?limit=${limit}&offset=${offset}`)

        if (data.length) {
          context.commit('set', [...list, ...data])
          context.commit('offset', limit)
        } else {
          context.commit('hasMore', false)
        }
      } catch (err) {
        if (process.client) {
          window.alert(err.message)
        }
      } finally {
        context.commit('fetching', false)
      }
    }
  }
}
