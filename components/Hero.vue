<template>
    <div class="hero" :style="style">
        <div class="container--fluid">
            <div class="hero__layer hero__layer--center" :class="'hero__layer--text-' + heroLayerTextAlign">
                <h1>{{title}}</h1>
                <h2 v-if="hasSubtitle">{{subtitle}}</h2>
                <a :href="link">{{linkText}}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
        },
        link: {
            type: String,
            required: true,
        },
        linkText: {
            type: String,
            required: true,
        },
        layerTextAlign: {
            type: String,
            default: 'left'
        }

    },
    data() {
       return {
            heroTitle: this.title,
            heroSubtitle: this.subtitle,
            heroLink: this.link,
            heroLinkText: this.linkText,
            heroLayerTextAlign: this.layerTextAlign,
       }
    },
    computed: {
        hasSubtitle() {
            return !!this.heroSubtitle;
        }
    }
}
</script>
<style>
.hero {
    position: absolute;
    width: 100%;
    background-color:rgb(202, 13, 13);
    height: calc( 100vh - 100px);/*100px represents top menu height */
}

.hero__layer {
    position: absolute;
    height: 300px;
    width: 500px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
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
    text-align: left;
}

.hero__layer--text-right {
    text-align: right;
}

.hero__layer--text-center {
    text-align: center;
}
</style>