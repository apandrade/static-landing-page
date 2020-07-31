<template>
    <div>
      <Menu v-bind="menu">
       <template slot="logo">
          <Logo v-bind="logo"/>
       </template>      
      </Menu>
      <Hero v-bind="hero">
        <HeroLayer v-bind="heroLayer">
          <Button v-bind="heroButton" class="hero__layer-item"></Button>
        </HeroLayer>
      </Hero>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: this.$store.$theme.menu || {},
      logo: this.$store.$theme.logo || {},
      hero: this.$store.$theme.hero || {},
      heroLayer: this.$store.$theme.heroLayer || {},
      heroButton: this.$store.$theme.heroButton || {},
    }
  },
}
</script>