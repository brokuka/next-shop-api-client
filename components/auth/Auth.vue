<script setup lang="ts">
type DefaultNavigateTo = 'register' | 'login' | 'reset-password'

const DEFAULT_NAVIGATE_TO: DefaultNavigateTo = 'register'

const route = useRoute()

const to = ref<DefaultNavigateTo>(checkValidQuery(route.query.to as string) ?? DEFAULT_NAVIGATE_TO)

const reactiveQuery = computed(() => route.query.to)
const isLoginOrRegister = computed(() => to.value === 'register' || to.value === 'login')

onMounted(() => {
  if (reactiveQuery.value)
    return

  navigateTo({ query: { to: to.value } })
})

function checkValidQuery(value: string) {
  const arrayOfTyped = ['register', 'login', 'reset-password']

  if (!arrayOfTyped.includes(value))
    return

  return value as DefaultNavigateTo
}

function onUpdateTab(value: string | number) {
  if (typeof value !== 'string')
    return

  to.value = value as DefaultNavigateTo
}

function goToResetPasswordScreen() {
  to.value = 'reset-password'
}

function backToLoginScreen() {
  to.value = 'login'
}

function closeAuth() {
  navigateTo('/', { replace: true })
}

watch(to, (newValue) => {
  navigateTo({ query: { to: newValue } })
})

/*
Улучшение UX, теперь пользователи могут навигировать
по форме с помощью стрелками страницы в браузере
*/
watch(reactiveQuery, (newValue) => {
  if (to.value === newValue)
    return

  const validQuery = checkValidQuery(newValue as string)

  if (!validQuery)
    return

  to.value = validQuery
})
</script>

<template>
  <Card class="relative max-w-[670px] w-full flex justify-center px-4 py-10">
    <div class="w-[360px]">
      <CardHeader :class="cn('mb-4', { 'mb-6': !isLoginOrRegister })">
        <CardTitle class="text-center text-blue-700 font-semibold">
          Регистрация и вход
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs v-if="isLoginOrRegister" class="flex flex-col gap-6" :model-value="to" @update:model-value="onUpdateTab">
          <TabsList class="self-center">
            <TabsTrigger value="register">
              Создать аккаунт
            </TabsTrigger>

            <TabsTrigger value="login">
              Войти
            </TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <AuthRegister />
          </TabsContent>

          <TabsContent value="login">
            <AuthLogin @reset="goToResetPasswordScreen" />
          </TabsContent>
        </Tabs>

        <template v-else>
          <Button
            class="absolute left-5 top-5" size="icon" variant="ghost" aria-label="Назад"
            @click="backToLoginScreen"
          >
            <Icon class="h-6 w-6 text-neutral-500" name="material-symbols:arrow-left-alt-rounded" />
          </Button>

          <AuthResetPassword />
        </template>

        <Button class="absolute right-5 top-5" size="icon" variant="ghost" aria-label="Закрыть" @click="closeAuth">
          <Icon class="h-6 w-6 text-neutral-500" name="material-symbols:close" />
        </Button>
      </CardContent>
    </div>
  </Card>
</template>
