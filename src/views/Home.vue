<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <my-menu></my-menu>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MyMenu from './menu/menu.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    MyMenu
  }
}
</script>
