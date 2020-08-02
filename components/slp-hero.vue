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
            heroBgColor: this.bgColor,
            heroBgImage: this.bgImage,
            heroBgSize: this.bgSize,
            heroBgRepeat: this.bgRepeat,
       }
    },
    computed: {
        hasBgImage() {
            return !!this.bgImage
        },
        style() {
            return {
                ...this.heroBgImage && {backgroundImage: `url('${this.heroBgImage}')`},
                ...this.heroBgSize && {backgroundSize: this.heroBgSize},
                ...this.heroBgRepeat && {backgroundRepeat: this.heroBgRepeat},
                ...this.heroPaddingTop && {paddingTop: this.heroPaddingTop},
                ...this.heroBgColor && {backgroundColor: this.heroBgColor},
            }
        },
        heroPaddingTop() {
            const menu = this.$store.state.activeTheme.menu;
            const menuPosition = menu && menu.position;
            const menuHeight = menu && menu.height;
            return menuPosition !== 'top' ? menuHeight : false;
        }
    }
}
</script>
<style lang="scss">
.hero {
    position: relative;
    width: 100%;
    background-color: transparent;
    background-size: cover;

    &--half {
        height: 50vh;
    }

    &--full {
        height: 100vh;
    }
}
</style>