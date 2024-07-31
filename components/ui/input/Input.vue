<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '~/utils/common'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  hint?: string
  label?: string
  toggleMask?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const attrs = useAttrs()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const Label = resolveComponent('Label')

const type = ref<HTMLInputElement['type']>(attrs.type as string)
const currentToggleMask = computed(() => type.value === 'password' ? 'material-symbols:visibility-outline-rounded' : 'material-symbols:visibility-off-outline-rounded')

function onMaskInteractive() {
  if (type.value === 'text') {
    type.value = 'password'
    return
  }

  type.value = 'text'
}
</script>

<template>
  <component :is="label ? Label : 'div'" class="flex flex-col gap-1.5">
    <template v-if="label">
      {{ label }}
    </template>

    <div class="relative">
      <input
        v-model="modelValue"
        :class="cn('flex h-10 w-full rounded-md border border-input bg-background pl-3 pr-14 py-2 text-base ring-offset-background placeholder:text-neutral-400 focus-visible:(outline-none focus-visible:ring-2 ring-ring ring-offset-2) font-normal disabled:(bg-neutral-100 cursor-not-allowed opacity-50)', props.class)"
        v-bind="attrs"
        :type
      >

      <button
        v-if="toggleMask"
        class="absolute right-5 top-1/2 inline-flex rounded-md p-1 ring-offset-background -translate-y-1/2 focus-visible:(outline-none ring-offset-0 ring-ring focus-visible:ring-2)"
        @click="onMaskInteractive"
      >
        <Icon class="h-6 w-6 text-neutral-400" :name="currentToggleMask" />
      </button>
    </div>

    <span v-if="hint" :class="cn('text-sm text-neutral-600 font-normal', { 'text-neutral-300': attrs.disabled })">{{
      hint }}</span>
  </component>
</template>
