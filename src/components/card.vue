<template>
  <div>
    <p :class="$style.card">
      {{text}}12312
    </p>
  </div>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style  lang='stylus' module>
.card 
  padding: 10px;
  color :red;
</style>

