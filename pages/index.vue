<template>
    <div>
      <Menu v-bind="menu">
       <template slot="logo">
          <Logo v-bind="logo"/>
       </template>      
      </Menu>
      <Hero v-bind="hero">
        <HeroLayer v-bind="heroLayer"/>
      </Hero>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
          bgColor: '#000',
      },
      logo: {
          url:'https://via.placeholder.com/250x100',
          position: 'center',
      },
      hero: {        
        hideLayerText: false,
        size: 'half',
        bgImage: '/bg-hero.png',
        bgColor: 'green',
      },
      heroLayer: {
        title: 'Hero Title',
        subtitle: 'Hero Subtitle',
        link: '/',
        linkText: 'Click Here',
        layerTextAlign: 'center',
        layerTextValign: 'bottom',
        layerAlign: 'center',
        layerBgColor: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Advent Pro',
      }
    };
  },
}
</script>