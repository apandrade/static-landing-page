<template>
  <div class="logo" :class="'logo--'+ logoPosition" :style="style">
    <a v-if="hasImage" :class="{'logo__image' : hasImage}" href="/" >
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
  width: 200px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: auto;
  display: block;
  max-height: 100%;
  display: flex;
  align-items: center;
  

  @include tablet {
    width: 300px;
    left: unset;
    right: unset;
  }

  &__image {
    display: block;
    img {
      position: absolute;
      height: 100%;
      max-height: 100%;
      top: 0;
    }
  }

  a {
    text-align: left;
    text-decoration: none;
    width: 100%;
    color: var(--text-light);
    font-size: 35px;
    max-width: 100%;
    max-height: 100%;
  }

  span {
    display: block;
  }

  &--right {
    @include tablet {
      right: 0;
      img {
        right: 0;
      }
    }
  }

  &--left {
    @include tablet {
      left: 0;
      img {
        left: 0;
      }
    }    
  }
  
  &--center {
    left: 0;
    right: 0;
    margin-right: auto!important;
    margin-left: auto!important;
    img {
      left: 0;
      right: 0;
      margin-right: auto!important;
      margin-left: auto!important;
    }
  }
}
</style>