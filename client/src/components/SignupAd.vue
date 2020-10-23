<template>
  <mdb-card>
    <!-- <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image> -->
    <mdb-card-body class="unique-color-dark">
        <mdb-container>
        <mdb-row>
            <mdb-col col="6" class="border-right border-white">
                <h4 class="white-text ">Sign up and ...</h4>
                <h5 class="white-text mt-3 ml-2"><mdb-icon icon="smile-wink" />&nbsp;&nbsp;Try one month free</h5>
                <h5 class="white-text mt-3 ml-2"><mdb-icon icon="calendar-check" />&nbsp;&nbsp;Cancel at any time</h5>
                <h5 class="white-text mt-3 ml-2"><mdb-icon icon="play-circle" />&nbsp;&nbsp;Get all movies, all series</h5>
            </mdb-col>
            <mdb-col col="6" class="d-flex flex-column justify-content-start align-items-center">
                <p class="white-text text-center mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                
                <router-link to="/register">
                    <mdb-btn color="primary">Try a free month now</mdb-btn>
                </router-link>
            </mdb-col>
        </mdb-row>
        </mdb-container>
    </mdb-card-body>
  </mdb-card>
</template>


<script>
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
    name: "SignupAd",
    components: {
        mdbCard,
        mdbCardImage,
        mdbCardBody,
        mdbCardTitle,
        mdbCardText,
        mdbBtn,
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbIcon
    },

    data() {
        return {
        bla: 'bla'
        };
    }
};
</script>

<style lang="scss" scoped>
    .card {
        background-color: black;
    }
</style>

