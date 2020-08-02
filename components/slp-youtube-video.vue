<template>
    <div class="video">
        <iframe :width="videoWidth" :height="videoHeight" :src="videoUrl">
        </iframe>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: '420'
        },
        height: {
            type: String,
            default: '315'
        },
        url: {
            type: String,
            required: true,
        },
    },
    data() {
        return{
            videoWidth: this.width,
            videoHeight: this.height,
            videoUrl: this.url,
        }
    },
}
</script>

<style lang="scss">
.video {
    width: 100%;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    @include tablet {
        width: max-content;
    }
    iframe {
        width: 100%;
        @include tablet {
            width: unset;
        }
    }
}

</style>