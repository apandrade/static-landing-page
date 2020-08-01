<template>
  <div class="logo" :class="'logo--'+ logoPosition" :style="style">
    <a v-if="hasImage" href="/" >
      <img v-if="hasImage" alt="site logo" :src="logoImage"/>
    </a>
    <a v-else :href="logoLink" >
      {{text}}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
    text: {
      type: String,
      default: 'Site Logo'
    },
    fontFamily: {
      type: String,
    },
    fontSize: {
      type: String,
    },
    lineHeight: {
      type: String,
    },
    fontColor:{
      type: String,
    },
    position:{
      type: String,
      default: 'left',
    },
    width:{
      type: String,
    },
    height:{
      type: String,
    },
    // marginLeft:{
    //   type: String,
    // },
    // marginRight:{
    //   type: String,
    // },
    link:{
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      logoImage: this.imageUrl,
      logoText: this.text,
      logoFontFamily: this.fontFamily,
      logoFontColor: this.fontColor,
      logoLineHeight: this.lineHeight,
      logoFontSize: this.fontSize,
      logoWidth: this.width,
      logoHeight: this.height,
      logoPosition: this.position,
      logoLink: this.link,     
      logoMarginLeft: this.marginLeft,
      logoMarginRight: this.marginRight,
    }
  },
  methods: {
    textStyle() {
      return {
        ...this.logoFontFamily && {fontFamily: this.logoFontFamily},
        ...this.logoFontColor && {color: this.logoFontColor},
        ...this.logoFontSize && {fontSize: this.logoFontSize},
        ...this.logoLineHeight && {lineHeight: this.logoLineHeight},
        // ...this.logoMarginLeft && {marginLeft: this.logoMarginLeft},
        // ...this.logoMarginRight && {marginRight: this.logoMarginRight},
      }
    },
    imageStyle() {
      return {
        ...this.logoWidth && {width: this.logoWidth},
        ...this.logoHeight && {height: this.logoHeight},
        ...this.logoMarginLeft && {marginLeft: this.logoMarginLeft},
        ...this.logoMarginRight && {marginRight: this.logoMarginRight},
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

<style lang="scss">
.logo {
  position: absolute;
  margin: 0;
  padding: 0;
  animation: appear 1s;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 200px;
  height: auto;
  display: block;

  a {
    vertical-align: top;
    display: inline-block;
    text-align: left;
    text-decoration: none;
    width: 100%;
    color: var(--text-light);
    display: inline-block;
    font-size: 35px;
    line-height: 100px;
    height: 100px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  span {
    display: block;
  }

  &--right {
    right: 0;
  }

  &--left {
    left: 0;
  }
  
  &--center {
    left: 0;
    right: 0;
    margin-right: auto!important;
    margin-left: auto!important;
  }
}
</style>