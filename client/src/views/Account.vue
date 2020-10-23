
<template>
  <mdb-container class="account-info">
    <mdb-row>
      <mdb-col md="12">
        <h1>My Account</h1>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col md="4">
        <!-- <mdb-row>
          <mdb-col md="12"> -->
            <mdb-btn flat class="grey-text" v-bind:class="[{'white-text':visible == 'personalInformation'}]" v-on:click="visible = 'personalInformation'">Personal Information</mdb-btn>
            <mdb-btn flat class="grey-text" v-bind:class="[{'white-text':visible == 'changePassword'}]" v-on:click="visible = 'changePassword'">Change Password</mdb-btn>
            <mdb-btn flat class="grey-text" v-bind:class="[{'white-text':visible == 'privacy'}]" v-on:click="visible = 'privacy'">Privacy</mdb-btn>
          <!-- </mdb-col>
        </mdb-row> -->
      </mdb-col>
      <mdb-col md="8" v-if="visible == 'personalInformation'">
        <!-- <form class="text-light">
          <mdb-input type="email" v-model="email" id="email" label="Your email"/>
          <mdb-input type="email" v-model="email" id="email" label="Your email"/>
          <mdb-input type="password" v-model="password" id="passwd" label="Your password"/>
        </form> -->
        <form>
          <label for="frmEmail" class="text-light">Your email</label>
          <input type="email" id="frmEmail" v-model="userInfo.data.email" class="form-control mb-3"/>
          <label for="frmName" class="text-light">Your name</label>
          <input type="text" id="frmName" v-model="userInfo.data.name" class="form-control mb-3"/>
          <div class="text-right">
            <mdb-btn color="primary">Save Changes</mdb-btn>
          </div>
        </form>
      </mdb-col>

      <mdb-col md="8" v-if="visible == 'changePassword'">
        <form>
          <label for="frmPasswordCurrent" class="text-light">Current password</label>
          <input type="password" id="frmPasswordCurrent" v-model="passwords.current" class="form-control mb-3"/>
          <label for="frmPasswordNew" class="text-light">New password</label>
          <input type="password" id="frmPasswordNew" v-model="passwords.new" class="form-control mb-3"/>
          <label for="frmPasswordConfirm" class="text-light">Confirm new password</label>
          <input type="password" id="frmPasswordConfirm" v-model="passwords.confirm" class="form-control mb-3"/>
          <div class="text-right">
            <mdb-btn color="primary">Save Changes</mdb-btn>
          </div>
        </form>
      </mdb-col>

      <mdb-col md="8" v-if="visible == 'privacy'">
        <p class="text-light">DRTV protects your privacy and all data is in accordance with the EU General Data Protection Regulation (GDPR). DRTV's service uses cookies and device usage analysis to be able to deliver the best possible experience and service. Please select what you accept below. Please note that additional cookies are used on the website for it to work. Take a look at our PRIVACY POLICY for more information.</p>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="defaultChecked2" checked>
          <label class="custom-control-label" for="defaultChecked2">Advertising</label>
        </div>
        <p class="text-light">We use Google technology to deliver more relevant marketing to our users, to enable custom marketing, to evaluate campaign performance, and to measure user interaction with DRTV's service.</p>
      </mdb-col>
    </mdb-row>





    <!-- <mdb-row>
      <mdb-tabs
    :active="0"
    pills
    color="secondary"
    class="mb-5"
    :links="[
      { text: 'Active' },
      { text: 'Link' },
      { text: 'Link' },
      { text: 'Help' }]"
    :content="[
      `<h1>hæ</h1>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
      `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>`,
      `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`,
      `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`]"
  />
    </mdb-row> -->
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbBtn,
  mdbTabs
} from "mdbvue";
export default {
  name: "Account",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbInput,
    mdbTabs
  },
  data() {
    return {
      visible: 'personalInformation',
      passwords: {
        current: '',
        new: '',
        confirm: ''
      }
    };
  },
  computed: {
    // getUser() {
    //   return this.$store.state.movies;
    // }
    userInfo() {
      return this.$store.getters.fetchedUser;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.account-info {
  margin-top: 70px;
  color: #fff;

  h1 {
    padding-bottom: 20px;
    text-align: center;
    font-weight: 600;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  label.custom-control-label {
    padding-left: 20px;
    padding-bottom: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    &:before {
      top: 0.35rem;
      width: 1.2rem !important;
      height: 1.2rem !important;
    }

    &:after {
      top: 0.44rem;
      left: -1.4rem;
    }
  }
}
</style>