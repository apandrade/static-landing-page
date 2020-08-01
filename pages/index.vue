<template>
    <div>
      <slp-menu v-bind="menu">
       <template slot="logo">
          <slp-logo v-bind="logo"/>
       </template>      
      </slp-menu>
      <slp-hero v-bind="hero">
        <slp-hero-layer v-bind="heroLayer">
          <slp-button v-bind="heroButton" class="hero__layer-item"></slp-button>
        </slp-hero-layer>
      </slp-hero>
      <slp-content></slp-content>
      <slp-footer></slp-footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      head: this.$store.state.activeTheme.head || {},
      menu: this.$store.state.activeTheme.menu || {},
      logo: this.$store.state.activeTheme.logo || {},
      hero: this.$store.state.activeTheme.hero || {},
      heroLayer: this.$store.state.activeTheme.heroLayer || {},
      heroButton: this.$store.state.activeTheme.heroButton || {},
    }
  },
  head() {
    return {
      title: this.head.title,
      meta: this.head.meta,
      link: this.head.link,
    }
  }
}
</script>