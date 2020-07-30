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
            default: 'transparent',
        },
        position: {
            type: String,
            default: 'default', 
        },
        height: {
            type: String,
            default: '100px', 
        },
        borderBottom: {
            type: String,
            default: 'none', 
        }
    },
    computed: {
        style() {
            return {
                backgroundColor: this.menuBgColor,
                height: this.height,
                borderBottom: this.menuBorderBottom,
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
<style>
.menu {
    z-index: 999;
}
.menu--top {
    position: relative;
}

.menu--fixed {
    position: fixed;
}

.menu--default {
    position: absolute;
}
</style>