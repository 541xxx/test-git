<template>
  <div>
    <p :class="$style.card">
      {{text}}123121231231235123123
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

