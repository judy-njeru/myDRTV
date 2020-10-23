<template>
  <div>
    <mdb-form-inline class="md-form">
      <mdbIcon icon="search"/>
      <mdb-input type="text" placeholder="Search" aria-label="Search" id="txtSearchMedia"/>
      <mdb-icon icon="times"/>
    </mdb-form-inline>
  </div>
</template>

<script>
import MovieInfo from "../components/Media/MovieInfo";
import { mdbIcon, mdbFormInline, mdbInput } from "mdbvue";

export default {
  name: "Search",
  components: {
    mdbIcon,
    mdbFormInline,
    mdbInput
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$parent.$root)
  }
};
</script>

<style lang="scss" scoped>


  // nav.unique-color-dark.navbar.navbar-dark{
  //   background-color: transparent !important;
  //   box-shadow: none;
  //   color: #fff;
  //   background: pink;
  // }

  // #navbarSupportedContent {
  //   a {
  //     color: black;
  //   }
  // }



.md-form {
  width: 100%;
  position: relative;

  .fa-times {
    position: absolute;
    right: 0;
    color: #fff;
    font-size: 1.5rem;
  }
  .fa-search {
    position: absolute;
    bottom: 44px;
  }
}

.active-pink-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-pink input[type="text"] {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-purple-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-purple input[type="text"] {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-cyan-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan input[type="text"] {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan .fa,
.active-cyan-2 .fa {
  color: #4dd0e1;
}
.active-purple .fa,
.active-purple-2 .fa {
  color: #ce93d8;
}
.active-pink .fa,
.active-pink-2 .fa {
  color: #f48fb1;
}
</style>