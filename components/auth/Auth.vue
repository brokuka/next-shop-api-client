<script setup lang="ts">
const isClickedResetPassword = ref(false)
</script>

<template>
  <Card class="max-w-[670px] flex justify-center px-4 py-10">
    <div class="w-[360px]">
      <CardHeader :class="cn('mb-4', { 'mb-6': isClickedResetPassword })">
        <CardTitle class="text-center text-blue-700 font-semibold">
          Регистрация и вход
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs v-if="!isClickedResetPassword" default-value="register" class="flex flex-col gap-6">
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
            <AuthLogin v-model:clickResetPassword="isClickedResetPassword" />
          </TabsContent>
        </Tabs>

        <AuthResetPassword v-else />
      </CardContent>
    </div>
  </Card>
</template>
