<template>
  <div id="vectorclient">
    <v-parallax
      dark
      height="600"
      src="https://www.vector-network.tk/discord/VectorClient.png"
    >
      <v-layout
        align-center
        justify-center
        column
      >
        <h1 class="display-2 font-weight-regular mb-3 black--text">VectorClient</h1>
        <h4 class="subheading black--text">Discord Rich Presence Client</h4>
        <v-btn
          class="blue lighten-2 mt-5"
          dark
          large
          href="https://github.com/VectorNetworkProject/Rich-Presence/releases"
        >
          Download
        </v-btn>
      </v-layout>
    </v-parallax>
    <v-layout
      align-center
      justify-center
      column
    >
      <v-flex
        xs12
        sm4>
        <div class="text-xs-center">
          <h2 class="headline">VectorClientとは</h2>
          <span class="subheading">プレイ中のゲームにVectorNetworkを表示します。</span>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
