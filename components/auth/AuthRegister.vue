<script setup lang="ts">
const INPUT_GROUP: AuthInput[] = [
  {
    id: 'name',
    label: 'Введите ваше имя',
    placeholder: 'Ольга',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Введите ваш e-mail',
    placeholder: 'adress@yandex.ru',
    type: 'email',
  },
  {
    id: 'password',
    label: 'Придумайте пароль',
    placeholder: 'sobaka_gav',
    type: 'password',
    hint: 'Пароль должен содержать не менее 8 символов',
  },
  {
    id: 'confirm_password',
    label: 'Повторите пароль',
    placeholder: 'sobaka_gav',
    type: 'password',
  },
]
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent>
    <Input
      v-for="input in INPUT_GROUP" :id="input.id" :key="input.id" :type="input.type"
      :placeholder="input.placeholder" :hint="input.hint" :disabled="input.disabled" :label="input.label"
      :autocomplete="input.id" :toggle-mask="input.type === 'password'"
    />
  </form>

  <div class="text-center">
    <Button class="my-6">
      Создать аккаунт
    </Button>

    <span class="inline-block text-xs text-neutral-600">Регистрируясь, Вы присоединяетесь к
      <Button variant="link" size="link">
        Правилам работы
        магазина
      </Button> и подтверждаете, что ознакомлены с
      <Button variant="link" size="link">
        Политикой конфиденциальности
      </Button>.</span>
  </div>
</template>
