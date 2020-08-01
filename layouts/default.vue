<template>
  <Nuxt />
</template>

<style lang="scss">
html {
  font-family: $font-default;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: transparent;
  scroll-behavior: smooth;
  color: $black;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
    &--fluid {
      width: 95%;
      margin: 0 auto;
    @include tablet {
      width: 80%;
    }
  }
}
</style>
