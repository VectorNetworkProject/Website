<template>
  <div class="container">
    <v-layout
      align-center
      column
    >
      <v-flex
        md6
        xs12
        sm8
        text-xs-center
      >
        <v-flex
          v-if="error.statusCode === 404"
          class="display-4"
        >4🤔4</v-flex>
        <v-flex
          v-else
          class="display-4"
        >{{ error.statusCode }}</v-flex>
        <br>
        <v-btn
          color="red"
          href="/"
        >ホームに戻る</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'blog'
}
</script>
