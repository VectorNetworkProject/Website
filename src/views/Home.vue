<template>
<div class="home">
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <v-layout align-center fluid text-md-center>
    <v-flex display-3>VectorNetwork</v-flex>
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
            'https://cdn.discordapp.com/attachments/464557289802825749/510465959371210752/unknown.png'
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/464557289802825749/510466055487881226/unknown.png'
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/464557289802825749/510466447345188865/unknown.png'
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/464557289802825749/510466582858956810/unknown.png'
        },
        {
          src:
            'https://cdn.discordapp.com/attachments/464557289802825749/510466703436546048/unknown.png'
        }
      ]
    }
  }
}
</script>
