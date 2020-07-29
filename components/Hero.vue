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
    computed: {
        hasBgImage() {
            return !!this.bgImage
        },
        style() {
            let bgImageStyles = '';
            if(this.hasBgImage)
                bgImageStyles = `background-image: url('${this.heroBgImage}');background-size: ${this.heroBgSize};`;

            return `background-color: ${this.heroBgColor};${bgImageStyles}`;
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