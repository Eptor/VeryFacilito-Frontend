<template>
    <div>
        <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
            <a-marker preset="hiro" @markerFound="onMarkerFound">
                <a-box position="0 0.5 0" material="color: red;"></a-box>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    </div>
</template>

<script>
export default {
    name: 'RealidadAumentadaView',
    mounted() {
        this.startCamera()
    },
    methods: {
        async startCamera() {
            try {
                const constraints = {
                    video: {
                        facingMode: 'user', // use the front camera
                        width: { ideal: 4096 },
                        height: { ideal: 2160 }
                    }
                }
                const stream = await navigator.mediaDevices.getUserMedia(constraints)
                this.$refs.video.srcObject = stream
                this.$refs.video.play()
            } catch (error) {
                console.error('Error accessing media devices.', error)
            }
        },
        onMarkerFound() {
            console.log('Patrón detectado');
        }
    }
}
</script>