<template>
    <nav class="menu container--fluid" :style="style">
        <slot name="logo"></slot>
    </nav>
</template>
<script>
export default {
    props: {
        bgColor: {
            type: String,
            default: 'transparent',
        }
    },
    computed: {
        style() {
            return `background-color: ${this.bgColor}`;
        }
    }
}
</script>
<style>
.menu {
    position: relative;
    height: 100px;
}
nav.container--fluid {
    width: 100%;
    padding-left: 2.5%;
    padding-right: 2.5%;
}
@media ( min-width: 768px ) {
    nav.container--fluid{
        padding-left: 10%;
        padding-right: 10%;
    }
}
</style>