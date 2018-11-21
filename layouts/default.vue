<template>
  <v-app white>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dark
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
    <v-footer
      :fixed="fixed"
      height="auto"
      color="primary lighten-1"
      app
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          color="white"
          flat
          round
          href="https://twitter.com/Vector_Network_"
        >Twitter</v-btn>
        <v-btn
          color="white"
          flat
          round
          href="https://github.com/VectorNetworkProject"
        >GitHub</v-btn>
        <v-btn
          color="white"
          flat
          round
          href="https://discord.gg/EF2G5dh"
        >Discord</v-btn>
        <v-flex
          primary
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;2018 — <strong>VectorNetworkProject</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' }
        ],
        miniVariant: false,
      }
    }
  }
</script>
