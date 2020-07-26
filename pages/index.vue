<template>
    <div>
      <Menu v-bind="menu">
       <template slot="logo">
          <Logo v-bind="logo"/>
       </template>      
      </Menu>
      <Hero v-bind="hero"/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
          bgColor: '',
      },
      logo: {
          url:'/site-logo.png',
          position: 'center',
      },
      hero: {
        title: 'Hero Title',
        subtitle: 'Hero Subtitle',
        link: '/',
        linkText: 'Click Here',
        layerTextAlign: 'center'
      }
    };
  },
}
</script>