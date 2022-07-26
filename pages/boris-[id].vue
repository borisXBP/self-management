<template>
  <div class="">接收到的参数是{{ id }}</div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
</script>

<style scoped></style>