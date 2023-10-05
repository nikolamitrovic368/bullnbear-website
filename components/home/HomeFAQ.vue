<template>
  <section id="faq" class="home-faq flex flex-col bg-reversed-grey py-60 md:py-80">
    <!-- CONTAINER -->
    <div class="container flex flex-col flex-grow items-center">
      <div class="flex flex-col items-center w-full md:w-auto mb-40 md:mb-50">
        <!-- TAG -->
        <AppSectionTag class="mb-20 md:mb-30">{{ $t("home.faq.tag") }}</AppSectionTag>

        <!-- TITLE -->
        <h2 class="home-faq__title section__title w-full text-center mb-20">
          {{ $t("home.faq.title") }}
        </h2>

        <!-- DESC -->
        <p class="home-faq__desc section__desc w-full text-center">
          {{ $t("home.faq.desc") }}
        </p>
      </div>

      <!-- CONTENT -->
      <div class="flex flex-col items-center w-full">
        <!-- BUTTONS GROUP (SWITCH TAB) -->
        <AppButtonsGroup
          v-model="tabsValue"
          :options="tabsOptions"
          language-key="home.faq.tabsOptions"
          class="mb-40"
        />

        <!-- TAB -->
        <div
          class="
            grid
            grid-rows-1
            md:grid-rows-none
            md:grid-cols-2
            w-full
            gap-y-60
            md:gap-y-0
            md:gap-x-50
            xl:gap-x-100
          "
        >
          <!-- TAB IMAGE -->
          <div class="md:mt-40">
            <img
              src="~/static/images/home/faq/ill.png"
              alt="illustration"
              class="home-faq__item-ill w-full mx-auto md:mr-0 md:ml-auto"
            />
          </div>

          <!-- TAB ACCORDION -->
          <AppAccordion :default-open="0">
            <!-- ACCORDION ITEM -->
            <AppAccordionItem
              v-for="(_, index) in $options.list[tabsValue]"
              :key="index"
              :index="index"
            >
              <!-- PREVIEW TITLE -->
              <template #title>
                <div
                  class="
                    flex-grow
                    text-20
                    md:text-25
                    font-accidental-presidency
                    tracking-xxs
                    text-white
                    transition
                    duration-300
                  "
                >
                  {{ $t(`home.faq.accordionItems.${tabsValue}.${index}.title`) }}
                </div>
              </template>

              <!-- CONTENT -->
              <div class="home-faq__accordion-content p-20 md:p-30">
                <!-- CONTENT TITLE -->
                <div
                  class="home-faq__accordion-content-desc text-time-warp md:text-18 font-medium"
                  v-html="$t(`home.faq.accordionItems.${tabsValue}.${index}.description`)"
                />
              </div>
            </AppAccordionItem>
          </AppAccordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTag from '@/components/shared/AppSectionTag.vue'
import AppButtonsGroup from '@/components/shared/AppButtonsGroup.vue'
import AppAccordion from '@/components/shared/accordion/AppAccordion.vue'
import AppAccordionItem from '@/components/shared/accordion/AppAccordionItem.vue'

export default {
  name: 'HomeFAQ',

  components: {
    AppSectionTag,
    AppButtonsGroup,
    AppAccordion,
    AppAccordionItem
  },

  data () {
    return {
      tabsValue: 'general',
      tabsOptions: [
        { value: 'general', label: 'General' },
        { value: 'vaults', label: 'Vaults' }
      ]
    }
  },

  list: {
    general: [
      { isOpen: false },
      { isOpen: false },
      { isOpen: false },
      { isOpen: false }
    ],

    vaults: [{ isOpen: false }, { isOpen: false }, { isOpen: false }]
  }
}
</script>

<style lang="scss" scoped>
.home-faq {
  &__title {
    max-width: 500px;
  }

  &__desc {
    max-width: 520px;
  }

  /* Small Devices, Tablets */
  @media(min-width: 767px) {
    &__item-ill {
      max-width: 450px
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__item-ill {
      max-width: 400px
    }
  }
}
</style>

<style lang="scss">
.home-faq {
  &__accordion-content {
    background: linear-gradient(
      251.87deg,
      #090A34 5.56%,
      theme('colors.jagger') 99.68%
    );
  }

  &__accordion-content-desc {
    a {
      @apply underline hover:no-underline;
    }
  }
}
</style>
