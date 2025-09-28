<script setup>
import { defineProps } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100',
  },
});
</script>

<template>
  <!-- :class=`${{bg }}` -->
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <!-- content -->
    <slot></slot>
  </div>
</template>
