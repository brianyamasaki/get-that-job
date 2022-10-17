<template>
  <button class="btn primary" @click="back">Back to Previous Page</button>
</template>

<script>
  export default {
    methods: {
      back () {
        this.$router.go(-1);
      }
    }
  }
</script>
