<template>
  <div class="logo" :class="'logo--'+ logoPosition" :style="style">
    <a href="/" >
      <img v-if="hasImage" alt="site logo" :src="logoImage"/>
      <span v-if="showText">{{text}}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    text: {
      type: String,
      default: 'Site Logo'
    },
    fontFamily: {
      type: String,
      default: 'Arial, Helvetica, sans-serif',
    },
    fontSize: {
      type: String,
      default: '25px',
    },
    lineHeight: {
      type: String,
      default: '30px',
    },
    fontColor:{
      type: String,
      default: '#000',
    },
    position:{
      type: String,
      default: 'left',
    },
    width:{
      type: String,
      default: '250px',
    },
    height:{
      type: String,
      default: '100%',
    },
    marginLeft:{
      type: String,
      default: '50px',
    },
    marginRight:{
      type: String,
      default: '50px',
    },
  },
  data() {
    return {
      logoImage: this.url,
      logoText: this.text,
      logoFont: this.fontFamily,
      logoFontColor: this.fontColor,
      logoLineHeight: this.lineHeight,
      logoFontSize: this.fontSize,
      logoWidth: this.width,
      logoHeight: this.height,
      logoPosition: this.position,
      logoMarginLeft: this.marginLeft,
      logoMarginRight: this.marginRight,
    }
  },
  methods: {
    textStyle() {
      return {
        fontFamily: this.logoFont,
        color: this.logoFontColor,
        fontSize: this.logoFontSize,
        lineHeight: this.lineHeight,
        marginLeft: this.logoMarginLeft,
        marginRight: this.marginRight,
      }
    },
    imageStyle() {
      return {
        width: this.logoWidth,
        height: this.logoHeight,
        marginLeft: this.logoMarginLeft,
        marginRight: this.marginRight,
      }
    },
  },
  computed: {
    hasImage() {
      return !!this.logoImage;
    },
    showText() {
      return !this.hasImage;
    },
    style() {
      return this.showText ? this.textStyle() : this.imageStyle();
    }
  }
}
</script>

<style>
.logo {
  position: absolute;
  margin: 0;
  padding: 0;
  animation: appear 1s;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}

.logo a {
  vertical-align: top;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.logo img {
  width: 100%;
  height: 100%;
}

.logo span {
  display: block;
}

.logo--right {
  right: 0;
}

.logo--left {
  left: 0;
}

.logo--center {
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>