<template>
    <nav class="menu" :style="style">
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
    width: 95%;
    height: 100px;
    margin: 0 auto;
}
@media ( min-width: 768px ) {
    .menu{
        width: 80%;
    }
}
</style>