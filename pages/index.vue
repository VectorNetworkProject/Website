<template>
  <div id="index">
    <v-parallax
      dark
      src="home/Network.png"
    >
      <v-layout class="align-center">
        <v-flex>
          <h1 class="display-1">{{ $t('index.title') }}</h1>
          <span class="subheading">{{ $t('index.subtext') }}</span>
          <v-divider class="my-3"/>
          <div class="title mb-3">{{ $t('index.subtitle') }}</div>
          <v-btn
            href="minecraft://?addExternalServer=§l§6Vector §bNetwork|play.vector-network.tk:56333"
            class="grey darken-1 mt-5"
          >{{ $t('index.buttons.stable') }}</v-btn>
          <v-btn
            href="minecraft://?addExternalServer=§l§6Vector §bNetwork|play.vector-network.tk:56333"
            class="grey darken-1 mt-5"
          >{{ $t('index.buttons.latest') }}</v-btn>
        </v-flex>
      </v-layout>
    </v-parallax>
  </div>
</template>
