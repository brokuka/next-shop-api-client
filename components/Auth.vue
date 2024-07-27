<script setup lang="ts">
interface InputGroup {
  id: string
  label?: string
  placeholder?: string
  type: 'email' | 'text' | 'password'
  hint?: string
  disabled?: boolean
}

const INPUTS_GROUP: InputGroup[] = [
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
    placeholder: '2',
    type: 'password',
    hint: 'Пароль должен содержать не менее 8 символов',
    disabled: true,

  },
]
</script>

<template>
  <Card>
    <div class="w-[360px]">
      <CardHeader>
        <CardTitle class="text-blue-700 font-semibold">
          Регистрация и вход
        </CardTitle>

        <CardContent>
          <Tabs default-value="register" class="w-[400px]">
            <TabsList>
              <TabsTrigger value="register">
                Создать аккаунт
              </TabsTrigger>

              <TabsTrigger value="login">
                Войти
              </TabsTrigger>
            </TabsList>

            <TabsContent value="register">
              <div class="flex flex-col gap-4">
                <div v-for="input in INPUTS_GROUP" :key="input.id" class="flex flex-col gap-1.5">
                  <Label
                    v-if="input.label" :class="cn('text-neutral-800', { 'text-neutral-400': input.disabled })"
                    :for="input.id"
                  >{{ input.label }}</Label>

                  <Input
                    :id="input.id" :type="input.type" :placeholder="input.placeholder" :hint="input.hint"
                    :disabled="input.disabled"
                  />
                </div>
              </div>

              <Button>Создать аккаунт</Button>
            </TabsContent>

            <TabsContent value="login">
              Change your password here.
            </TabsContent>
          </Tabs>
        </CardContent>
      </CardHeader>
    </div>
  </Card>
</template>
