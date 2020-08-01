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
      logoPosition: this.position,
      logoLink: this.link,     
    }
  },
  methods: {
    textStyle() {
      return {
        ...this.logoFontFamily && {fontFamily: this.logoFontFamily},
        ...this.logoFontColor && {color: this.logoFontColor},
        ...this.logoFontSize && {fontSize: this.logoFontSize},
        ...this.logoLineHeight && {lineHeight: this.logoLineHeight},
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
      return this.showText ? this.textStyle() : {};
    }
  }
}
</script>

<style lang="scss">
.logo {
  position: absolute;
  padding: 0;
  animation: appear 1s;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 150px;
  height: auto;
  display: block;

  @include tablet {
    width: 200px;
    left: unset;
    right: unset;
  }

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
    @include tablet {
      right: 0;
    }
  }

  &--left {
    @include tablet {
      left: 0;
    }    
  }
  
  &--center {
    left: 0;
    right: 0;
    margin-right: auto!important;
    margin-left: auto!important;
  }
}
</style>