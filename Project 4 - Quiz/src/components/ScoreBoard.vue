<template>
    <section class="scoreContainer">
        <p>Player <span>{{playerPoints}}</span> x <span>{{computerPoints}}</span> Computer </p>
        <hr>
    </section>
</template>

<script>
export default {
    name:'ScoreBoard',
    props: ['playerPoints', 'computerPoints']

}
</script>
<style lang="scss">
    /*Score section*/
    .scoreContainer{text-transform: uppercase;font-weight: 700;}
    .scoreContainer span{outline: 1px solid;outline-offset: 5px;margin: 0 8px;}
</style>