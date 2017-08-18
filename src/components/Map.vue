<template>
  <div class="map">
    <vue-map></vue-map>
    <div class="container">
      <carousel v-if="loaded" paginationActiveColor="#42b983" paginationColor="#b2ebd1" easing="linear" :paginationSize="8" :speed="300">
        <slide :key="index" v-for="(image, index) in images">
            <a @click="emitGlobalClickEvent(image, index)">
              <span class="caption">{{ image.title }}</span>
              <img :src="image.image">
            </a>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import VueMap from './VueMap.vue'
import { routes } from '../routesv2.js'
import { EventBus } from '../eventBus.js'

export default {
  components: { VueMap },
  data () {
    return {
      loaded: false,
      images: routes
    }
  },
  mounted () {
    this.loaded = true
  },
  methods: {
    emitGlobalClickEvent (image, index) {
      EventBus.$emit('SliderClicked', {image, index})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .caption
    width: 50%
    color: white
    position: absolute
    z-index: 10000
    left: 50%
    top: 50%
    font-size: 18px
    text-shadow: 1px 1px 10px black
    background: rgba(0,0,0,.3)
    padding: 0 3px
    transform: translate(-50%, -50%)
    &:hover
      color: white
      text-decoration: none
  
  .VueCarousel-slide
    position: relative
    background: #42b983
    color: #fff
    font-family: Arial
    font-size: 24px
    text-align: center
    min-height: 200px
  
  
  .VueCarousel-slide img 
    position: absolute
    top: 50%
    left: 50%
    cursor: pointer
    transform: translate(-50%, -50%)
</style>
