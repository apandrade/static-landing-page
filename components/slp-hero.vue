<template>
    <div class="hero" :class="'hero--' + heroSize" :style='style'>
        <div class="container--hero container--fluid">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {        
        size: {
            type: String,
            default: 'full'
        },
        bgColor: {
            type: String,
            default: 'red',
        },
        bgImage: {
            type: String,
        },
        bgSize: {
            type: String,
            default: 'cover',
        },
    },
    data() {
       return {
            heroSize: this.size,
            heroBgColor: this.hasBgImage ? 'transparent' : this.bgColor,
            heroBgImage: this.bgImage,
            heroBgSize: this.bgSize,
       }
    },
    methods: {
        bgImageStyle() {
            return {
                backgroundImage: `url('${this.heroBgImage}')`,
                backgroundSize: this.heroBgSize,
            }
        },
        bgColorStyle() {
            return {
                backgroundColor: this.heroBgColor,
            }
        }
    },
    computed: {
        hasBgImage() {
            return !!this.bgImage
        },
        style() {
            return this.hasBgImage ? this.bgImageStyle() : this.bgColorStyle();
        },
    }
}
</script>
<style>
.hero {
    position: absolute;
    width: 100%;
}

.hero--half {
    height: 50vh;
}

.hero--full {
    height: calc( 100vh - 100px);/*100px represents top menu height */
}

.container--hero {
    position: relative;
    height: 100%;
}

</style>