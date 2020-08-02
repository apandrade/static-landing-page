<template>
    <div id="hero" class="hero" :class="'hero--' + heroSize" :style='style'>
        <div class="container container--fluid">
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
                ...this.heroBgRepeat && {backgroundRepeat: this.heroBgRepeat},
                ...this.heroPaddingTop && {paddingTop: this.heroPaddingTop},
            }
        },
        bgColorStyle() {
            return {
                ...this.heroBgColor && {backgroundColor: this.heroBgColor},
                ...this.heroPaddingTop && {paddingTop: this.heroPaddingTop},
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
        heroPaddingTop() {
            const menuPosition = this.$store.state.activeTheme.menu.position;
            const menuHeight = this.$store.state.activeTheme.menu.height;
            return menuPosition !== 'top' ? menuHeight : false;
        }
    }
}
</script>
<style lang="scss">
.hero {
    position: relative;
    width: 100%;
    background-color: var(--secondary-light);
    background-size: cover;
    padding-top: 100px;

    &--half {
        height: 50vh;
    }

    &--full {
        height: calc( 100vh - 100px);/*100px represents top menu height */
    }
}
</style>