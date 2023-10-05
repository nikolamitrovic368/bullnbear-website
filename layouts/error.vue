<template>
  <div
    class="
      error
      flex
      flex-col
      min-h-screen
      w-full
      bg-dark-rift
    "
  >
    <div
      class="
        container
        flex
        flex-col
        flex-grow
        space-y-20
        md:space-y-40
        pt-40
        pb-40
        md:pb-80
      "
    >
      <!-- LOGO -->
      <NuxtLink to="/" class="error__logo flex justify-center mx-auto">
        <img src="~/static/images/logo/full-logo.svg" alt="logo" class="max-h-full" />
      </NuxtLink>

      <!-- TEXT -->
      <div class="flex items-center justify-center flex-grow w-full mx-auto">
        <span class="error__text text-white leading-1 font-bold">404</span>
      </div>

      <!-- BACK TO HOME -->
      <div class="flex items-center flex-col">
        <NuxtLink to="/" class="flex flex-col items-center w-full mb-40">
          <AppButton title="Go Back To Home" class="error__btn w-full">
            Go Back To Home
          </AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton.vue'

export default {
  name: 'Error',

  components: { AppButton }
}

</script>

<style lang="scss">
.error {
  &__logo {
    max-width: 250px;
  }

  &__btn {
    max-width: 250px;
  }

  @media(min-width: 1280px) {
    &__text {
      font-size: 350px;
    }
  }

  @media(min-width: 768px) and (max-width: 1279px) {
    &__text {
      font-size: 250px;
    }
  }

  @media(max-width: 767px) {
    &__text {
      font-size: 140px;
    }
  }
}
</style>
