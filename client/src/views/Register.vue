
<template>
  <div class="container login-container">
    <div class="row">
      <div class="col-md-8 login-card">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title class="text-center">Sign up</mdb-card-title>
            <form class="grey-text">
              <mdb-input type="text" v-model="name" id="name" label="Your name"/>
              <mdb-input type="email" v-model="email" id="email" label="Your email"/>
              <mdb-input type="password" v-model="password" id="password" label=" Your password"/>
              <mdb-input
                type="password"
                v-model="confirmpassword"
                id="confirmPassword"
                label="Confirm your password"
              />
            </form>
            <div class="text-center py-4 mt-3">
              <mdb-btn color="cyan" v-on:click="registerUser">Register</mdb-btn>
            </div>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>


<script>
import { mdbInput, mdbCard, mdbCardBody, mdbCardTitle, mdbBtn } from "mdbvue";
export default {
  name: "Register",
  components: {
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbInput
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  },

  methods: {
    registerUser() {
      let payload = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("addUser", payload);
    }
  }
};
</script>

<style lang="scss" scoped>
div.login-container {
  div.login-card {
    margin: 0 auto;
  }
}
</style>