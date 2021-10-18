<template>
  <!-- User -->
  <div class="m-2 cursor-pointer text-nowrap" v-bind="$attrs">
    <b-avatar variant="light" size="2.5em" :src="$attrs.img" class="mr-3" />{{ $attrs.name }}
  </div>
</template>

<script>
export default {}
</script>