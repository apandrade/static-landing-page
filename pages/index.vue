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
      menu: this.$theme.menu || {},
      logo: this.$theme.logo || {},
      hero: this.$theme.hero || {},
      heroLayer: this.$theme.heroLayer || {},
      heroButton: this.$theme.heroButton || {},
    }
  },
}
</script>