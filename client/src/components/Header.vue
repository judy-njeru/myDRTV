<template>
  <!--Navbar-->
  <mdb-navbar class="unique-color-dark" dark>
    <!-- Navbar brand -->
    <mdb-navbar-brand href="https://mdbootstrap.com/">DRTV</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item active>
          <router-link to="/home">Home</router-link>
        </mdb-nav-item>
        <mdb-nav-item  v-if="isLoggedIn">
          <router-link to="/watchlist">Watchlist</router-link>
        </mdb-nav-item>
        <mdb-nav-item v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </mdb-nav-item>
        <mdb-nav-item v-if="!isLoggedIn">
          <router-link to="/register">Register</router-link>
        </mdb-nav-item>
        <mdb-nav-item v-if="isLoggedIn" v-on:click.native="logoutUser">
          Logout
        </mdb-nav-item>
        <!-- User Account -->
      </mdb-navbar-nav>

      <router-link v-if="isLoggedIn" to="/account">
        <mdb-icon icon="user"/>
      </router-link>
      <!-- Search  -->

      <router-link to="/search">
        <mdbIcon icon="search"/>
      </router-link>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem,
  mdbFormInline,
  mdbIcon
} from "mdbvue";

export default {
  name: "Header",

  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbFormInline,
    mdbInput,
    mdbIcon
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser")
      this.$router.push('/')
    }
  }
};
</script>


<style lang="scss">
#header {
  margin-bottom: 70px;
}
nav {
  width: 100%;
}

.nav-link {
  a {
    color: #fff;
  }
}
i.fa-user {
  color: #fff;
  padding-right: 10px;
}

i.fa-search {
  color: #fff;
}
</style> 




