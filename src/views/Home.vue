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
            'https://github.com/VectorNetworkProject/Website-Materialize/blob/master/img/Vector_Network_2.png?raw=true'
        },
        {
          src:
            'https://github.com/VectorNetworkProject/Website-Materialize/blob/master/img/vectornetwork1.png?raw=true'
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
