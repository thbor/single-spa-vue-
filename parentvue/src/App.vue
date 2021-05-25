<template>
  <div id="app">
    <router-link to="/" style="margin-right:10px">加載父應用</router-link>
    <router-link to="/childvue" style="margin-right:10px">加載vue子應用</router-link>
    <router-link to="/childreact" style="margin-right:10px">加載React子應用</router-link>
    <!-- <router-view/> -->
    <div id="childvue"></div>
    <div id="childreact"></div>

  </div>
</template>

<style>

</style>
