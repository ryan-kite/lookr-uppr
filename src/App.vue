<template>
  <div id="app" class="container-fluid">
    <transition
      name="custom-classes-transition1"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutUp">
        <h1 v-show="isLogoLoaded" class="branding">lookr uppr</h1>
    </transition>

    <transition
      name="custom-classes-transition2"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated zoomOut">
      <h2 v-show="isSlugLoaded" class="blurb">No fluff reverse phone lookup</h2>
    </transition>

     
    <LookrUppr msg="enter a number to get started"/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LookrUppr from './components/LookrUppr.vue'


export default {
  name: 'app',
  data () {
    return {
      isLogoLoaded: false,
      isSlugLoaded: false,
    }
  },
  components: {
    LookrUppr
  },
  mounted: function () {
    var app = this
    setTimeout(function(){ app.isLogoLoaded = true }, 600)
    setTimeout(function(){ app.isSlugLoaded = true }, 1200)
  }
}
</script>
/* custom component styles */
<style>

</style>
