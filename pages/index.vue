<template>
    <div>
      <Menu :bg-color="menu.bgColor">
       <template slot="logo">
          <Logo :url="logo.url" :position="logo.position"/>
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
          position: 'left',
      }
    };
  },
}
</script>