<template>
  <v-app>
    <v-toolbar app class="blue-grey">
      <v-toolbar-title class="headline text-uppercase">
        <span class="orange--text">Vector</span>
        <span class="blue--text">Network</span>
        <span class="font-weight-light yellow--text">Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">GitHub</span>
      </v-btn>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">PLAYING</span>
      </v-btn>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Discord</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <section>
        <Home></Home>
      </section>
    </v-content>
    <MyFooter></MyFooter>
  </v-app>
</template>

<script>
import MyFooter from './components/MyFooter'
import Home from './pages/home'

export default {
  name: 'App',
  components: {
    MyFooter,
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
