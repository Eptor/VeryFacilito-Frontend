<template>
    <div>
        <a-scene embedded arjs>
            <a-marker type="pattern" url="/pattern-marker.patt" emitevents="true" @markerFound="onMarkerFound">
                <!-- Add your augmented reality content here -->
                <a-box position="0 0.5 0" material="color: yellow;"></a-box>
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