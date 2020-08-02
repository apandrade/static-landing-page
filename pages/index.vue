<template>
    <div>
      <slp-menu v-bind="menu">
       <template slot="logo">
          <slp-logo v-bind="logo"/>
       </template>      
      </slp-menu>
      <slp-hero v-bind="hero">
        <slp-hero-layer v-if="!heroLayerCta.hide" v-bind="heroLayerCta">
          <slp-cta slot="cta" v-bind="cta">
            <slp-button v-bind="ctaButton" class="cta__item"></slp-button>
          </slp-cta>
        </slp-hero-layer>
        <slp-hero-layer v-if="!heroLayerVideo.hide" v-bind="heroLayerVideo" class="hero__layer--no-padding hero__layer--content-valign-top-mobile">
          <slp-youtube-video slot="video" v-bind="youtobeVideo"/>
        </slp-hero-layer>
      </slp-hero>
      <slp-content></slp-content>
      <slp-footer></slp-footer>
    </div>
</template>

<script>
export default {
  data() {
    const {activeTheme} =  this.$store.state;
    return {
      head: activeTheme.head || {},
      menu: activeTheme.menu || {},
      logo: activeTheme.logo || {},
      hero: activeTheme.hero || {},
      heroLayerCta: activeTheme.heroLayerCta || {},
      cta: activeTheme.cta || {},
      ctaButton: activeTheme.ctaButton || {},
      heroLayerVideo: activeTheme.heroLayerVideo || {},
      youtobeVideo: activeTheme.youtubeVideo || {},
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