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
            default: 'half'
        },
        bgColor: {
            type: String,
        },
        bgImage: {
            type: String,
        },
        bgSize: {
            type: String,
        },
        bgRepeat: {
            type: String,
        },
    },
    data() {
       return {
            heroSize: this.size,
            heroBgColor: this.hasBgImage ? 'transparent' : this.bgColor,
            heroBgImage: this.bgImage,
            heroBgSize: this.bgSize,
            heroBgRepeat: this.bgRepeat,
       }
    },
    methods: {
        bgImageStyle() {
            return {
                ...this.heroBgImage && {backgroundImage: `url('${this.heroBgImage}')`},
                ...this.heroBgSize && {backgroundSize: this.heroBgSize},
                ...this.heroBgRepeat && {backgroundRepeat: this.heroBgRepeat}
            }
        },
        bgColorStyle() {
            return {
                ...this.heroBgColor && {backgroundColor: this.heroBgColor},
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
<style lang="scss">
.hero {
    position: absolute;
    width: 100%;
    background-color: var(--secondary-light);
    background-size: cover;

    &--half {
        height: 50vh;
    }

    &--full {
        height: calc( 100vh - 100px);/*100px represents top menu height */
    }
}

.container--hero {
    position: relative;
    height: 100%;
}
</style>