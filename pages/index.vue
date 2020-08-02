<template>
    <div>
      <slp-menu v-bind="menu">
       <template slot="logo">
          <slp-logo v-bind="logo"/>
       </template>      
      </slp-menu>
      <slp-hero v-bind="hero">
        <slp-hero-layer v-bind="heroLayerCta">
          <slp-cta v-bind="cta">
            <slp-button v-bind="ctaButton" class="cta__item"></slp-button>
          </slp-cta>
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
      heroLayerCta: this.$store.state.activeTheme.heroLayerCta || {},
      cta: this.$store.state.activeTheme.cta || {},
      ctaButton: this.$store.state.activeTheme.ctaButton || {},
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