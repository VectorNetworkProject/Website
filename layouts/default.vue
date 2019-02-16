<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>VectorNetwork</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
    <v-footer height="auto">
      <v-layout
        class="justify-center row wrap">
        <v-btn
          flat
          round
          class="white--text"
          href="https://discord.gg/EF2G5dh">
          CHAT
        </v-btn>
        <v-flex class="text-xs-center white--text xs12 py-3">
          &copy;2018 - VectorNetworkProject
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>
