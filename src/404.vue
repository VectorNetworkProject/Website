<template>
<div class="404">
  <v-flex display-4 text-md-center>4🤔4</v-flex><br>
  <v-flex display-2 red--text text-md-center>ページが存在しません。</v-flex>
  <v-layout row warp align-center>
    <v-flex class="text-xs-center">
      <router-link :to="{path:'/'}" tag="Home">
        <v-btn color="error" id="Home" text-xs-center>トップに移動する</v-btn>
      </router-link>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {}
  }
}
</script>
