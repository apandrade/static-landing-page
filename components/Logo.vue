<template>
  <div class="logo" :class="'logo--'+position">
    <a href="/" :style="style">
      <img v-if="hasImage" alt="site logo" :src="logoImage"/>
      <span v-if="hasText">{{text}}</span>
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
    },
    fontFamily: {
      type: String,
    },
    fontColor:{
      type: String,
    },
    position:{
      type: String,
      default: 'left',
    },
  },
  data() {
    return {
      logoImage: this.url,
      logoText: this.text || 'SiteLogo',
      logoFont: this.fontFamily || 'Arial, Helvetica, sans-serif',
      logoFontColor: this.fontColor || '#F5A506',
    }
  },
  computed: {
    hasImage() {
      return !!this.logoImage;
    },
    hasText() {
      return !!this.logoText;
    },
    style() {
      return `font-family: ${this.logoFont}; color: ${this.logoFontColor};`;
    }
  }
}
</script>

<style>
.logo {
  position: absolute;
  height: 100%;
  margin: 0;
  padding: 0;
  animation: appear 1s;
  width: 150px;
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