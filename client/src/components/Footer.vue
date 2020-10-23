<template>
  <!-- Footer -->
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="12" class="social-links">
          <mdb-icon fab icon="twitter"/>
          <mdb-icon fab icon="facebook"/>
          <mdb-icon fab icon="instagram"/>
          <mdb-icon fab icon="youtube"/>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col sm="4">
          <ul>
            <li class="list-unstyled">
              <a href="#!">Cookie Preferences</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">Privacy</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">Legal Notice</a>
            </li>
          </ul>
        </mdb-col>
        <mdb-col sm="4">
          <ul>
            <li class="list-unstyled">
              <a href="#!">Media Center</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">Audio and Subtitles</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">Audio Description</a>
            </li>
          </ul>
        </mdb-col>
        <mdb-col sm="4">
          <ul>
            <li class="list-unstyled">
              <a href="#!">Help Center</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">Terms Of Use</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">Contact Us</a>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright:
        <a href>MYDRTV</a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>


<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";
export default {
  name: "Footer",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>


<style lang="scss" scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 80px !important;
  background: transparent !important;

  &.footer-view {
    position: relative !important;
  }
  .social-links {
    display: flex;
    justify-content: left;
    padding-bottom: 20px;

    i {
      padding-right: 20px;
      font-size: 1.6rem;
    }
  }

  ul {
    padding-left: 0px;
  }
}
</style>
