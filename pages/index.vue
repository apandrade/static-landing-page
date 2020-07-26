<template>
    <div>
      <Menu v-bind="menu">
       <template slot="logo">
          <Logo v-bind="logo"/>
       </template>
      </Menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {
          bgColor: "",
      },
      logo: {
          url:'/site-logo.png',
          position: 'center',
      }
    };
  },
}
</script>