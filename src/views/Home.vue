<template>
<div class="home">
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <v-layout fluid align-center>
    <v-flex text-xs-center>
      <v-flex display-2>ようこそ</v-flex>
      <v-btn href="minecraft://?addExternalServer=The Pit for MCPE|play.vector-network.tk:19132" color="green">Add Server</v-btn>
      <v-btn href="https://discord.gg/EF2G5dh" color="blue">Discord</v-btn>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src:
            'https://github.com/VectorNetworkProject/Website/blob/master/src/assets/home/Vector_Network.png?raw=true'
        },
        {
          src:
            'https://i.gyazo.com/97daa4313f117b2e8b8d8867d1677ddd.png'
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/391394853268750337/505503553901559849/unknown.png'
        }
      ]
    }
  }
}
</script>
