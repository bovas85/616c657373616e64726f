<template>
  <gmap-map :options="{styles: styles}" :center="{lat:currentLocation.lat, lng:currentLocation.lng}" :zoom="7" style="width: 100vw; height: 70vh">
    <p>Please select a marker or from the slider below</p>
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <a :href="infoContent.link"><img :src="infoContent.image" alt="Image"></a>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-3">{{ infoContent.title }}</p>
              <p class="subtitle is-6">{{ infoContent.description }}</p>
            </div>
          </div>
  
          <div class="content has-text-left">
            Address:<strong> {{ infoContent.address }}</strong><br>
            Distance: <strong> {{ infoContent.distance }}</strong><br><br>
            <a class="button is-success" :href="infoContent.link">More info</a>
          </div>
        </div>
      </div>
      </div>
    </gmap-info-window>
    <gmap-cluster>
      <gmap-marker :key="idx" v-for="(m, idx) in markers" :position="m.position" :clickable="true" :draggable="true" @click="toggleInfoWindow(m, idx)"></gmap-marker>
    </gmap-cluster>
  </gmap-map>
</template>

<script>
  import { mapStyles } from '../mapStyles.js'
  import { EventBus } from '../eventBus.js'
  import { routes } from '../routesv2.js'
export default {
    props: ['image'],
    data () {
      return {
        styles: mapStyles,
        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        infoOptions: {
          className: 'test',
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        markers: [],
        currentLocation: {
          lat: 0, lng: 0
        },
        searchAddressInput: '',
        center: { lat: 10.0, lng: 10.0 }
      }
    },
    methods: {
      geolocation () {
        navigator.geolocation.getCurrentPosition((position) => {
          this.currentLocation = {
            lat: routes[4].lat,
            lng: routes[4].lng
          }
        })
      },
      toggleInfoWindow (marker, idx) {
        this.infoWindowPos = marker.position
        this.infoContent = marker.infoText

        // check if its the same marker that was selected if yes toggle
        if (this.currentMidx === idx) {
          this.infoWinOpen = !this.infoWinOpen
        } else {
          this.infoWinOpen = true
          this.currentMidx = idx
        }
      }
    },
    mounted () {
      EventBus.$on('SliderClicked', (image, index) => {
        image = image.image
        let position = { lat: image.lat, lng: image.lng }
        this.infoWindowPos = position
        this.currentLocation = position
        this.infoContent = image
        this.infoWinOpen = true
        this.currentMidx = index
      })
      this.geolocation()
      for (let i in routes) {
        routes[i].image = `static/images/${[i]}.jpg`
        this.markers.push({
          position: { lat: routes[i].lat, lng: routes[i].lng },
          infoText: routes[i]
        })
      }
    }
  }
</script>

<style>
.card-image {
  width: 99%;
}
.card-content {
    padding: 10px 0;
}
.vue-map-hidden { display: block !important }
.vue-map-hidden p {
    position: absolute;
    top: -20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: white;
    background: coral;
    width: 100%;
}
</style>
