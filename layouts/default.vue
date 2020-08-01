<template>
  <Nuxt />
</template>

<style lang="scss">
:root {
  --primary: #546e7a;
  --primary-light: #819ca9;
  --primary-dark: #29434e;
  --secondary: #bf360c;
  --secondary-light: #f9683a;
  --secondary-dark: #870000;
  --text-dark: #000;
  --text-light: #fff;
}
html {
  font-family: 'Source Sans Pro',
                -apple-system,
                BlinkMacSystemFont,
                'Segoe UI',
                Roboto,
                'Helvetica Neue',
                Arial,
                sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: transparent;
  scroll-behavior: smooth;
  color: var(--text-dark);
}

.container {
    &--fluid {
      position: relative;
      width: 95%;
      margin: 0 auto;
    @include tablet {
      width: 80%;
    }
  }
}
</style>
