<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container class="pt-5">
        <router-view class="view"></router-view>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    drawer: false,
    group: ''
  }),
};
</script>
