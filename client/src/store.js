import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

export const mutations = {
  FETCH_MOVIES: (state, action) => {
    state.movies = action.payload;
  },

  FETCH_MOVIE: (state, action) => {
    state.movie = action.payload;
  },

  RESET_MOVIE: (state) => {
    state.movie = {};
  },

  ADD_USER: (state, action) => {
    state.user = action.payload;
  },

  FETCH_USER: (state, action) => {
    state.user = action.payload;
  },

  LOGOUT_USER: (state, action) => {
    state.user = action.payload;
  },

  ADD_TO_WATCHLIST: (state, action) => {
    state.user.data.watchlist.push(action.payload);
  },

  REMOVE_FROM_WATCHLIST: (state, action) => {
    state.user.data.watchlist = state.user.data.watchlist.filter(item => item.movieID != action.payload.movieID);
  },

  ADD_LIKE: (state, action) => {
    // action.payload.status == 1 ? state.movie.data.likes++ : state.movie.data.likes--
    state.movie.data.likes++
    state.user.data.likes.push(action.payload.movieID)
  },

  REMOVE_LIKE: (state, action) => {
    state.movie.data.likes--
    state.user.data.likes = state.user.data.likes.filter(like => like != action.payload.movieID);
  },

  ADD_DISLIKE: (state, action) => {
    console.log(action.payload)
    state.movie.data.dislikes++
    state.user.data.dislikes.push(action.payload.movieID)
  },

  REMOVE_DISLIKE: (state, action) => {
    state.movie.data.dislikes--
    state.user.data.dislikes = state.user.data.dislikes.filter(dislike => dislike != action.payload.movieID);
  },

  // THUMBS_UP: (state, action) => {
  //   state.movie.data.likes = action.payload;
  // },

  // THUMBS_DOWN: (state, action) => {
  //   state.user = action.payload;
  // }

}

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    user: {}
  },

  mutations,

  actions: {
    fetchMovies({ commit }) {
      axios
        .get("https://drtv-ab06b.firebaseapp.com/api/movies")
        .then(response => {
          commit("FETCH_MOVIES", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    fetchMovie({ commit }, payload) {
      axios
        .get(`https://drtv-ab06b.firebaseapp.com/api/movies/${payload}`)
        .then(response => {
          commit("FETCH_MOVIE", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    resetMovie({ commit }) {
      commit("RESET_MOVIE");
    },

    addUser({ commit }, payload) {
      axios
        .post("https://drtv-ab06b.firebaseapp.com/api/user", payload)
        .then(response => {
          console.log(response);
          commit("ADD_USER", {
            payload: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    },

    async fetchUser({ commit }, payload) {
      // console.log(payload)
      return await axios
        .get(`https://drtv-ab06b.firebaseapp.com/api/users/${payload.email}`, payload)
        .then(response => {
          // console.log(response);
          commit("FETCH_USER", {
            payload: response.data
          });
          return response.data
        })
        .catch(error => {
          console.log(error);
        });
    },

    logoutUser({ commit }) {
      // console.log(payload)
      commit("LOGOUT_USER", {
        payload: {}
      });
    },

    addToWatchlist({ commit }, payload) {
      axios
        .post("https://drtv-ab06b.firebaseapp.com/api/watchlist", payload)
        .then(response => {
          commit("ADD_TO_WATCHLIST", {
            payload: response.data
          });
          // return response
        })
        .catch(error => {
          console.log(error);
        });
    },

    removeFromWatchlist({ commit }, payload) {
      console.log('REMOVE')
      console.log(this.state.user.data.watchlist)
      console.log(payload)

      commit("REMOVE_FROM_WATCHLIST", {
        payload: payload
      })
    },

    addLike({ commit }, payload) {
      // commit("ADD_LIKE");
      console.log("STORE")
      // console.log(commit)
      console.log(payload)
      axios
      .post("https://drtv-ab06b.firebaseapp.com/api/movie-likes", payload)
      .then(response => {
        // console.log(payload)
        console.log(response.data)
        commit("ADD_LIKE", {
          payload: payload
          // payload: {...response.data, ...payload}
        });
        // return response.data
      })
      .catch(error => {
        console.log(error);
      });
    },

    removeLike({ commit }, payload) {
      commit("REMOVE_LIKE", {
        payload: payload
      })
    },

    addDislike({ commit }, payload) {
      // commit("ADD_DISLIKE", {
      //   payload: payload
      // })
      axios
      .post("https://drtv-ab06b.firebaseapp.com/api/movie-dislikes", payload)
      .then(response => {
        // console.log(payload)
        console.log(response.data)
        commit("ADD_DISLIKE", {
          // payload: {...response.data, ...payload}
          payload: payload
        });
        // return response.data
      })
      .catch(error => {
        console.log(error);
      });
    },

    removeDislike({ commit }, payload) {
      commit("REMOVE_DISLIKE", {
        payload: payload
      })
    }
  },

  getters: {
    fetchedMovies: state => {
      return state.movies;
    },
    fetchedMovie: state => {
      return state.movie;
    },
    fetchedUser: state => {
      return state.user;
    },
    isLoggedIn: state => {
      return state.user.data && state.user.id ? true : false
    }
  },
  plugins: [new VuexPersistence().plugin]
});

// export default store;

