<template>
  <div id="app" class="container-fluid">
    <h1 class="branding">lookr uppr</h1>
    <h2 class="blurb">No fluff reverse phone lookup</h2>

    <LookrUppr msg="enter a number to get started"/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LookrUppr from './components/LookrUppr.vue'


export default {
  name: 'app',
  components: {
    // HelloWorld,
    LookrUppr
  }
}
</script>
/* custom component styles */
<style>

</style>
