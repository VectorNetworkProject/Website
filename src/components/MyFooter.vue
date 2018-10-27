<template>
<v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">最高のミニゲームサーバーになる予定です。</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 -  <strong>VectorNetworkProject</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>
