<template>
  <v-app>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
 import Header from "@/components/HeaderPgu";
 import Footer from './components/FooterPgu'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>

.v-application {
  font-size: 14px;
}
</style>