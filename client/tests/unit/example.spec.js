import { expect } from 'chai'
// import { shallowMount } from '@vue/test-utils'
import { mutations } from './../../src/store'
// import HelloWorld from '@/components/HelloWorld.vue'

const { ADD_USER } = mutations
const { ADD_TO_WATCHLIST } = mutations

describe('mutations', () => {
  it('should add a new user', () => {
    let state = {
      user: {}
    }
    const user = {
      id: '1',
      data: {
        name: 'a',
        email: 'a@a.com',
        password: '123',
        likes: [],
        dislikes: [],
        watchlist: []
      }
    }
    ADD_USER(state, {payload: user})
    expect(state.user).to.equal(user)
  })

  it('should add a movie to watchlist', () => {
    let state = {
      user: {
        id: '1',
        data: {
          name: 'a',
          email: 'a@a.com',
          password: '123',
          likes: [],
          dislikes: [],
          watchlist: []
        }
      }
    }
    const watchlistCountBefore = state.user.data.watchlist.length
    const payload = {
      movieID: '987',
      title: 'Black Panther',
      poster: 'abcd'
    }
    ADD_TO_WATCHLIST(state, {payload: payload})
    const watchlistCountAfter = state.user.data.watchlist.length
    expect(watchlistCountAfter).to.equal(watchlistCountBefore + 1)
  })
})


// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
// })
