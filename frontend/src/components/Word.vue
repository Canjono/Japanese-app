<template>
    <div class="word">
        <p>{{ word.name }}</p>
        <p>{{ word.translation }}</p>
        <p>{{ word.grammar }}</p>
        <p>{{ word.story }}</p>
    </div>
</template>

<script>
export default {
    name: 'Word',
    props: {
        word: Object
    }
}
</script>
