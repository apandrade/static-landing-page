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

<style>
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color:#fff;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}
button[disabled]{
    opacity: 0.5;
    cursor: not-allowed;
}

button.danger {
    background-color: #ff4949;
    color: #000;
}

button.success {
    background-color: #13ce66;
    color: #000;
}

button.info {
    background-color: #50bfff;
    color: #000;
}
</style>