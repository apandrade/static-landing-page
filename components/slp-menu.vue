<template>
    <nav class="menu" :class="'menu--' + menuPosition" :style="style">
        <slot name="logo"></slot>
    </nav>
</template>
<script>
export default {
    props: {
        bgColor: {
            type: String,
        },
        position: {
            type: String,
            default: 'top', 
        },
        height: {
            type: String, 
        },
        borderBottom: {
            type: String,
        }
    },
    computed: {
        style() {
            return {
                ...this.menuBgColor && {backgroundColor: this.menuBgColor},
                ...this.menuHeight && {height: this.menuHeight},
                ...this.menuBorderBottom && {borderBottom: this.menuBorderBottom},
            };
        }
    },
    data() {
        return {
           menuBgColor: this.bgColor,
           menuPosition: this.position,
           menuHeight: this.height,
           menuBorderBottom: this.borderBottom,
        }
    }
}
</script>
<style lang="scss">
.menu {
    width: 100%;
    z-index: 999;
    background-color: $menuBgColor;
    border-bottom: none;
    height: 100px;

    &--top {
        position: relative;
    }

    &--fixed {
        position: fixed;
    }
    
    &--default {
        position: absolute;
    }
}
</style>