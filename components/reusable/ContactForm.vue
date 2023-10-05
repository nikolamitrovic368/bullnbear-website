<template>
  <section id="contact-us" class="contact-us relative bg-reversed-grey py-60 md:py-80">
    <div class="contact-us__container relative flex flex-col w-full px-20 mx-auto z-20">
      <!-- HEAD -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="contact-us__head flex flex-col items-center mb-40 md:mb-50"
      >
        <!-- TITLE -->
        <h2 class="section__title mb-20">{{ $t("contactUs.title") }}</h2>

        <!-- DESC -->
        <p class="contact-us__desc section__desc w-full text-center">
          {{ $t("contactUs.desc") }}
        </p>
      </div>

      <!-- FORM -->
      <form
        ref="contactForm"
        method="POST"
        :action="actionUrl"
        class="flex flex-col"
        @submit.prevent="formSubmit"
      >
        <!-- FULL NAME | EMAIL FIELDS -->
        <div
          class="
            grid
            grid-rows-1
            md:grid-rows-none
            md:grid-cols-2
            gap-y-30
            md:gap-y-0
            md:gap-x-30
            lg:gap-x-40
            w-full
            mb-30
            md:mb-40
          "
        >
          <!-- FULL NAME -->
          <div class="contact-us__form-input-wrap">
            <label for="name" class="contact-us__form-input-label">
              <span>{{ $t("contactUs.form.fullNameLabel") }}</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              :placeholder="$t('contactUs.form.fullNamePlaceholder')"
              required
              class="gradient-secondary contact-us__form-input"
            />
          </div>

          <!-- EMAIL -->
          <div class="contact-us__form-input-wrap">
            <label for="email" class="contact-us__form-input-label">
              <span>{{ $t("contactUs.form.emailLabel") }}</span>
            </label>
            <input
              id="email"
              type="email"
              name="_replyto"
              :placeholder="$t('contactUs.form.emailPlaceholder')"
              required
              class="gradient-secondary contact-us__form-input"
            />
          </div>
        </div>

        <!-- MESSAGE -->
        <div class="contact-us__form-textarea-wrap mb-40">
          <label for="textarea" class="contact-us__form-textarea-label">
            <span>{{ $t("contactUs.form.messageLabel") }}</span>
          </label>
          <textarea
            id="textarea"
            name="message"
            :placeholder="$t('contactUs.form.messagePlaceholder')"
            class="
              gradient-secondary
              contact-us__form-textarea
              w-full
              placeholder-time-warp
              text-time-warp
              resize-none
              rounded-lg
              px-20
              py-14
              transition
              duration-300
            "
          />
        </div>

        <!-- EMAIL SUBJECT -->
        <input
          id="email-subject"
          type="hidden"
          name="_subject"
          :value="$t('contactUs.form.emailSubject')"
        />

        <!-- SUBMIT FORM -->
        <AppButton type="submit" class="contact-us__form-btn w-full mx-auto">
          {{ $t("contactUs.form.submitBtn") }}
        </AppButton>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/shared/AppButton.vue'

export default {
  name: 'ContactForm',

  components: { AppButton },

  props: {
    actionUrl: {
      type: String,
      default: 'https://formspree.io/f/mbjwpekn'
    }
  },

  methods: {
    formSubmit () {
      this.$refs.contactForm.submit()
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-us {
  &::before {
    @apply absolute right-0;
    content: '';
    bottom: -310px;
    background: url("~/static/images/contact-us/rock.png") no-repeat;
    width: 700px;
    height: 942px;
    z-index: -1;
  }

  &__container {
    max-width: 800px;
  }

  &__form-input-wrap,
  &__form-textarea-wrap {
    @apply flex flex-col items-start w-full space-y-8;
  }

  &__form-input-label,
  &__form-textarea-label {
    @apply relative text-time-warp;
  }

  &__form-input-label {
    &:before {
      @apply absolute font-semibold text-splash-of-grenadine text-18;
      content: "*";
      right: -12px;
      top: -2px;
    }
  }

  &__form-input,
  &__form-textarea {
    @apply focus:outline-none;
  }

  &__form-input {
    @apply
      w-full
      text-time-warp
      placeholder-time-warp
      px-18
      rounded-lg
      transition
      duration-300;
  }

  &__form-textarea {
    min-height: 150px;
  }

  &__form-btn {
    max-width: 150px;
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &__form-input {
      @apply h-70
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__form-input {
      @apply h-50
    }
  }
}
</style>
