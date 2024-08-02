<script setup lang="ts">
const emit = defineEmits<{
  reset: []
}>()

const INPUT_GROUP: AuthInput[] = [
  {
    id: 'email',
    label: 'Введите ваш e-mail',
    placeholder: 'adress@yandex.ru',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Введите пароль',
    placeholder: 'sobaka_gav',
    type: 'password',
  },
]

function onClickResetPassword() {
  emit('reset')
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent>
    <Input
      v-for="input in INPUT_GROUP" :id="input.id" :key="input.id" :type="input.type"
      :placeholder="input.placeholder" :hint="input.hint" :disabled="input.disabled" :label="input.label"
      :autocomplete="input.id"
      :toggle-mask="input.type === 'password'"
    />
  </form>

  <div class="mt-6 flex flex-col items-center gap-2">
    <Button>
      Войти
    </Button>

    <Button variant="link" size="link" type="button" @click="onClickResetPassword">
      Восстановить пароль
    </Button>
  </div>
</template>
