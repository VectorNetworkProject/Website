<template>
  <v-app>
    <MyToolbar></MyToolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <MyFooter></MyFooter>
  </v-app>
</template>

<script>
import MyFooter from './components/MyFooter'
import MyToolbar from './components/MyToolbar'

export default {
  name: 'App',
  components: {
    MyToolbar,
    MyFooter
  },
  data () {
    return {}
  }
}
</script>
