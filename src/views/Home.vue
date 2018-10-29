<template>
<div class="home">
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <v-layout fluid>
    <v-flex display-3 text-md-center>test</v-flex>
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
