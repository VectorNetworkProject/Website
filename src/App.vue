<template>
  <v-app white>
    <MyToolbar></MyToolbar>
    <v-content>
      <router-view></router-view>
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
