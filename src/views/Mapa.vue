<template>
    <div id="map" style="height: 1000px;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    name: 'LeafletMap',
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const map = L.map('map').setView([51.505, -0.09], 10);
                    this.$nextTick(() => {
            map.invalidateSize();
            });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        }).addTo(map);
      },
    },
  };
  
  </script>
  