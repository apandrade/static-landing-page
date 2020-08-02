<template>
    <div class="hero__layer" :style="style" :class="'hero__layer--' + heroLayerAlign +
    ' hero__layer--content-valign-' + heroLayerContentValign +
    ' hero__layer--content-align-' + heroLayerContentAlign">
        <slot name="cta"></slot>
        <slot name="video"></slot>   
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
        contentAlign: {
            type: String,
            default: 'center',
        },
        contentValign: {
            type: String,
            default: 'center',
        },
        height: {
            type: String,
        },
        width: {
            type: String,
        }
    },
    data() {
       return {
            heroLayerAlign: this.position,
            heroLayerBgColor: this.bgColor,
            heroLayerContentAlign: this.contentAlign,
            heroLayerContentValign: this.contentValign,
            heroLayerHeight: this.height,
            heroLayerWidth: this.width,
       }
    },
    computed: {
        style() {           
            return  {
                ...this.heroLayerBgColor && { background: this.heroLayerBgColor },
                ...this.heroLayerHeight && { height: this.heroLayerHeight }, 
                ...this.heroLayerWidth && { width: this.heroLayerWidth },         
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
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;

        @include desktop {
           width: 50%; 
        }

        &--left {
            @include tablet {
                left: 0;
                right: unset;
                margin-right: unset;
                margin-left: unset;
            }
        }

        &--right {
            @include tablet {
                right: 0;
                left: unset;
                margin-right: unset;
                margin-left: unset;
            }
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

        &--content-align-center {
            align-items: center;
        }

        &--content-align-bottom {
            align-items: flex-end;
        }

        &--content-align-top {
            align-items: flex-start;
        } 

        &--no-padding {
            padding: 0;
        }
    }    
}
</style>