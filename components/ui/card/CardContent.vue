<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/utils/common'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn(props.class)">
    <slot />
  </div>
</template>
