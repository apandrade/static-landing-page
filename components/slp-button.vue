<template>
    <button
        :class="buttonType"
        :disabled="buttonDisabled"
        @click="buttonClick($event)">
        {{buttonText}}
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'success',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        url: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: 'Clique Aqui',
        }
    },
    data() {
        return {
            buttonType: this.type,
            buttonDisabled: this.disabled,
            buttonUrl: this.url,
            buttonText: this.text,
        }
    },
    computed: {
        hasLink() {
            return !!this.buttonUrl;
        }
    },
    methods: {
        buttonClick: function(e) {
            this.$emit('click', e);
            if(this.hasLink) {
                var win = window.open(this.buttonUrl, '_blank');
                win.focus();
            }
        }
    }
}
</script>

<style lang="scss">
button {
    padding: 10px 20px;
    color: var(--text-light);
    background-color: var(primary--dark);
    border-radius: 4px;
    border: none;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;

    &[disabled]{
        opacity: 0.5;
        cursor: not-allowed;
    }

    &.danger {
        background-color: var(--secondary-dark);
        color: var(--text-light);
    }

    &.success {
        background-color: var(--primary);
        color: var(--text-light);
    }

    &.info {
        background-color: var(--primary-light);
        color: var(--text-dark);
    }   
}
</style>