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
</style>