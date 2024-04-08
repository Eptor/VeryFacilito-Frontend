<template>
    <div>
        <video ref="video" autoplay></video>
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
        }
    }
}
</script>