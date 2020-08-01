<template>
<div class="container--error">
    <div v-if="error.statusCode === 404" class="error__message">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <NuxtLink to="/">Voltar para página inicial</NuxtLink>
    </div>
    <div v-else class="error__message">
        <h1>500</h1>
        <h2>Desculpe, ocorreu um erro.</h2>
        <NuxtLink class="error__button" to="/">Voltar para página inicial</NuxtLink>
    </div>
</div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss">
.container--error {
    background-color: #ffe000;
    font-family: 'Advent Pro';
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.error__message {
    text-align: center;
    h1 {
        font-size: 5rem;
        margin-bottom: 10px;
        @include tablet {
            font-size: 8rem;
        }        
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 50px;
        @include tablet {
            font-size: 5rem;
        } 
    }
    a {
        font-size: 1.2rem;
        color: gray;
        text-decoration: none;
        font-weight: bold;
        background-color: transparent;
        border-radius: 15px;
        padding: 10px;
        border: 5px solid gray;
        &:hover {
            background-color: rgba(242, 247, 247, 0.8);
        }
        @include tablet {
            font-size: 3rem;
        } 
    }
}
</style>
