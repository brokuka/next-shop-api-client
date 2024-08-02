<template>
  <form class="flex flex-col gap-6" @submit.prevent>
    <Input
      label="Введите ваш
        e-mail" placeholder="adress@yandex.ru" autocomplete="email"
    />

    <Button class="self-center">
      Восстановить пароль
    </Button>
  </form>
</template>
