<template>
    <div class="hero__layer" :style="style" :class="'hero__layer--' + heroLayerAlign + ' hero__layer--content-valign-' + heroContentValign">
        <slot></slot>    
    </div>
</template>
<script>
export default {
    props: {       
        position: {
            type: String,
            default: 'left'
        },
        bgColor: {
            type: String,
        },
        contentValign: {
            type: String,
            default: 'center',
        }
    },
    data() {
       return {
            heroLayerAlign: this.position,
            heroLayerBgColor: this.bgColor,
            heroContentValign: this.contentValign,
       }
    },
    computed: {
        style() {           
            return  {
                ...this.heroLayerBgColor && {background: this.heroLayerBgColor},                
            };
        },
    }
}
</script>
<style lang="scss">
.hero {
    &__layer {
        position: absolute;
        height: 300px;
        width: 90%;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        background-size: cover;
        color: var(--text-dark);

        @include desktop {
           width: 50%; 
        }

        &--left {
            left: 0;
        }

        &--right {
            right: 0;
        }

        &--center {
            left: 0;
            right: 0;
            margin-right: auto;
            margin-left: auto;
        }

        &--content-valign-center {
            justify-content: center;
        }

        &--content-valign-bottom {
            justify-content: flex-end;
        }

        &--content-valign-top {
            justify-content: flex-start;
        }      
    }    
}
</style>