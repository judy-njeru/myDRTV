import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MovieView from "./views/MovieView";
import Search from "./views/Search";
import Watchlist from "./views/Watchlist";
import Account from "./views/Account";
import Register from "./views/Register";
import Login from "./views/Login";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/watchlist",
      name: "Watchlist",
      component: Watchlist
    },
    {
      path: "/account",
      name: "Account",
      component: Account
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/movie-view/:id",
      props: true,
      name: "MovieView",
      component: MovieView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
