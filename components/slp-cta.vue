<template>
    <div class="cta" :style="style" :class="'cta--text-' + textAlign">
        <h1 class="cta__item">{{ctaTitle}}</h1>
        <h2 class="cta__item">{{ctaSubtitle}}</h2>
        <slot></slot> 
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Your Hero Title goes here'
        },
        subtitle: {
            type: String,
            default: 'Your subtitle goes here'
        },
        textAlign: {
            type: String,
            default: 'left'
        },
        textValign: {
            type: String,
            default: 'center'
        },
        fontFamily: {
            type: String,
        },
    },
    data() {
       return {
            ctaTitle: this.title,
            ctaSubtitle: this.subtitle,
            ctaTextAlign: this.textAlign,
            ctaTextValign: this.textValign,
            ctaFontFamily: this.fontFamily,
       }
    },
    computed: {
        style() {           
            return  {
                ...this.ctaFontFamily && {fontFamily: this.ctaFontFamily},             
            };
        },
    },
}
</script>

<style lang="scss">
.cta {
    &--text-left {        
        text-align: left;
    }

    &--text-right {        
        text-align: right;
    }

    &--text-center {        
        text-align: center;            
    }
    
    &__item {
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    &__item:nth-child(1) {
        margin-top: 10px;
    }
}
</style>