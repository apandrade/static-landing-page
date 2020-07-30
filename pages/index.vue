<template>
    <div>
      <Menu v-bind="menu">
       <template slot="logo">
          <Logo v-bind="logo"/>
       </template>      
      </Menu>
      <Hero v-bind="hero">
        <HeroLayer v-bind="heroLayer">
          <CustomButton v-bind="heroButton" class="hero__layer-item"></CustomButton>
        </HeroLayer>
      </Hero>
    </div>
</template>

<script>
export default {
  data() {
    return this.$theme;
  },
}
</script>