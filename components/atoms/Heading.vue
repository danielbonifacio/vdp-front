<template>
  <component :is="`h${level}`">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: [Number, String],
      default: 1
    }
  }
}
</script>

<style>

</style>
