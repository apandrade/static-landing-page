<template>
    <div v-if="!heroLayerTextHidden" class="hero__layer" :style="style" :class="'hero__layer--text-valign-'+ heroLayerTextValign +
                                                                                    ' hero__layer--' + heroLayerAlign + 
                                                                                    ' hero__layer--text-' + heroLayerTextAlign">
        <h1 class="hero__layer-item">{{title}}</h1>
        <h2 class="hero__layer-item" v-if="hasSubtitle">{{subtitle}}</h2>
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
        link: {
            type: String,
            default: 'https://www.google.com'
        },
        linkText: {
            type: String,
            default: 'Click Here'
        },
        hideLayerText: {
            type: Boolean,
            default: false,
        },
        layerTextAlign: {
            type: String,
            default: 'left'
        },
        layerTextValign: {
            type: String,
            default: 'center'
        },
        layerAlign: {
            type: String,
            default: 'left'
        },
        layerBgColor: {
            type: String,
        },
        fontFamily: {
            type: String,
            default: 'Arial, Helvetica, sans-serif',
        },
    },
    data() {
       return {
            heroTitle: this.title,
            heroSubtitle: this.subtitle,
            heroLink: this.link,
            heroLinkText: this.linkText,
            heroLayerTextAlign: this.layerTextAlign,
            heroLayerTextValign: this.layerTextValign,
            heroLayerAlign: this.layerAlign,
            heroLayerAlign: this.layerAlign,
            heroLayerTextHidden: this.hideLayerText,
            heroLayerBgColor: this.layerBgColor,
            heroFontFamily: this.fontFamily,
       }
    },
    computed: {
        hasSubtitle() {
            return !!this.heroSubtitle;
        },
        style() {
            let layerBgColorStyle = '';
            if(this.heroLayerBgColor)
                layerBgColorStyle = `background: ${this.heroLayerBgColor};`;

            return `font-family:'${this.heroFontFamily}';${layerBgColorStyle}`;
        }
    }
}
</script>
<style>
.hero__layer {
    position: absolute;
    height: 300px;
    width: 50%;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.hero__layer--left {
    left: 0;
}

.hero__layer--right {
    right: 0;
}

.hero__layer--center {
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
}

.hero__layer--text-left {
    align-items: flex-start;
}

.hero__layer--text-right {
    align-items: flex-end;
}

.hero__layer--text-center {
    align-items: center;
}

.hero__layer--text-valign-center {
    justify-content: center;
}

.hero__layer--text-valign-bottom {
    justify-content: flex-end;
}

.hero__layer--text-valign-top {
    justify-content: flex-start;
}

.hero__layer-item {
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

.hero__layer-item:nth-child(1) {
    margin-top: 10px;
}

</style>