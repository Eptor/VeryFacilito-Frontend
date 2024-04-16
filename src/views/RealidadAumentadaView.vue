<template>
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-box position="0 0.5 0" material="color: yellow;"></a-box>
        <a-marker-camera preset="hiro"></a-marker-camera>
    </a-scene>
</template>

<script>
export default {
    name: "App",
    methods: {
        onMarkerFound() {
            console.log("Marcador 'hiro' encontrado");
        },
        onMarkerLost() {
            console.log("Marcador 'hiro' perdido");
        }
    }
};
</script>

<style lang="scss"></style>