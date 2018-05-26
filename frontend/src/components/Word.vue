<template>
  <div class="word">
    <p>{{ name }}</p>
    <p>{{ translation }}</p>
    <p>{{ grammar }}</p>
    <p>{{ story }}</p>
  </div>
</template>

<script>
export default {
  name: 'Word',
  data () {
    return {
      msg: 'Message'
    }
  }
}
</script>
