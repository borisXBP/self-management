<template>
  <div class="">index 页面</div>
  <NuxtLink to="/boris">跳转到 boris</NuxtLink>
  <br />
  <Nuxt-Link to="/boris-3333">到动态路由</Nuxt-Link>
  <br />
  <Nuxt-Link to="/parent">parent</Nuxt-Link>
  <br />
  <Nuxt-Link to="/parent/child">parent-child</Nuxt-Link>
  <br />
  <Nuxt-Link to="/parent/two">parent-two</Nuxt-Link>
</template>

<script setup>
</script>

<style scoped></style>