<template>
  <section
    id="roadmap"
    class="home-road-map flex flex-col bg-reversed-grey py-60 md:py-80 lg:py-100 xl:py-125"
  >
    <!-- CONTAINER -->
    <div class="container flex flex-col flex-grow items-center">
      <!-- HEAD -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="home-road-map__head flex flex-col items-center mb-50"
      >
        <!-- TAG -->
        <AppSectionTag class="mb-20 md:mb-30">
          {{ $t("home.roadmap.tag") }}
        </AppSectionTag>

        <!-- TITLE -->
        <h2 class="section__title text-center md:text-left mb-20">{{ $t("home.roadmap.title") }}</h2>

        <!-- DESC -->
        <p class="home-road-map__desc section__desc w-full text-center">
          {{ $t("home.roadmap.desc") }}
        </p>
      </div>

      <!-- LIST -->
      <div class="home-road-map__list-wrap flex flex-col flex-grow w-full px-20">
        <ul class="home-road-map__list relative md:overflow-hidden">
          <!-- ITEM -->
          <li
            v-for="(item, index) in $options.list"
            :key="index"
            data-aos="offset"
            data-aos-easing="ease-in-sine"
            :data-aos-delay="item.animDelay"
            data-aos-duration="1000"
            class="home-road-map__list-item relative w-full md:w-1/2 md:my-30 cursor-pointer"
            :class="[
              { 'second-item': index === 1 },
              { 'is-done': item.isDone },
            ]"
          >
            <div class="home-road-map__list-item-wrap">
              <div class="home-road-map__content relative text-center rounded-md mb-24 pb-20 pt-10 px-20 z-20">
                <!-- TITLE -->
                <h3
                  class="
                    home-road-map__content-title
                    text-white
                    font-accidental-presidency
                    tracking-xxs
                    text-18
                    md:text-20
                    rounded-full
                    pt-8
                    pb-12
                  "
                >
                  {{ $t(`home.roadmap.list.${index}.title`) }}
                </h3>

                <!-- INFO -->
                <div class="px-10 mt-20">
                  <!-- INFO TITLE -->
                  <h5 class="font-accidental-presidency tracking-xxs text-white text-left text-25 mb-12">
                    {{ $t(`home.roadmap.list.${index}.infoTitle`) }}
                  </h5>

                  <!-- INFO DESC -->
                  <p class="home-road-map__content-desc w-full text-white text-left">
                    {{ $t(`home.roadmap.list.${index}.infoDesc`) }}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTag from '@/components/shared/AppSectionTag.vue'

export default {
  name: 'HomeRoadMap',

  components: { AppSectionTag },

  list: [
    { isDone: true, animDelay: '250' },
    { isDone: true, animDelay: '350' },
    { isDone: false, animDelay: '450' },
    { isDone: false, animDelay: '550' },
    { isDone: false, animDelay: '650' },
    { isDone: false, animDelay: '750' },
    { isDone: false, animDelay: '850' },
    { isDone: false, animDelay: '950' }
  ]
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_mixins";

.home-road-map {
  &__head {
    @include animationOffset("offset", "0px", "300px");
  }

  &__desc {
    max-width: 610px;
  }

  &__list,
  &__list-item {
    &::before,
    &::after {
      color: #1A2747;
    }
  }

  &__list {
    &::before {
      @apply absolute block w-2;
      content: "";
      background: rgba(217, 217, 217, 0.32);
    }

    &::after {
      @apply
        absolute bottom-80
        flex items-center justify-center
        rounded-full
        z-40;

      @include getIcon(\e908);

      font-size: 35px;
      background: linear-gradient(
        236.66deg,
        #8034BB 17.42%,
        #2A2031 80.4%
      );
    }
  }

  &__list-item {
    @include animationOffset("offset", "0px", "300px");

    &::before {
      @apply
        absolute bottom-0
        flex items-center justify-center
        w-36 h-36
        text-18
        -ml-1
        rounded-full
        z-30;

      @include getIcon(\e911);

      top: 6.5%;
      background: linear-gradient(
        231.58deg,
        #8534C5 19.52%,
        #2C2132 79.68%
      );
    }

    &.is-done {
      &::before {
        @include getIcon(\e907);
        background: linear-gradient(
          90deg,
          theme('colors.wild-caribbean-green') 12.48%,
          theme('colors.in-the-vines') 89.53%
        );
      }

      &:nth-child(odd),
      &:nth-child(even) {
        .home-road-map {
          &__content {
            &::before {
              background-color: #20D2AF;
            }
          }
        }
      }
      .home-road-map {
        &__content {
          background: linear-gradient(
            251.87deg,
            theme('colors.konkikyo-blue')
            5.56%,
            #162B4B 48.7%,
            theme('colors.jagger') 99.68%
          );
        }

        &__content-title {
          background: linear-gradient(
            180deg,
            theme('colors.wild-caribbean-green') 0%,
            theme('colors.in-the-vines') 100%
          );
        }
      }
    }

    &:nth-child(even) {
      @apply float-right clear-right;

      &::before {
        top: 6.5%;
      }
    }

    &:nth-child(odd),
    &:nth-child(even) {
      .home-road-map {
        &__content {
          &::before {
            @apply absolute w-10 h-2 transition-all ease-in-out duration-500;
            content: "";
            background-color: #8535C5;
            z-index: -1;
          }
        }
      }
    }
  }

  &__content {
    background: linear-gradient(
      251.87deg,
      rgba(25, 26, 62, 0.3) 5.56%,
      rgba(62, 47, 72, 0.3) 99.68%
    );
  }

  &__content-title {
    background: linear-gradient(
      11.84deg,
      #0F1035 -7.38%,
      #AD7FC0 181.68%
    );
  }

  &__content-desc {
    max-width: 220px;
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 993px) {
    &__list-item {
      &:nth-child(odd),
      &:nth-child(even) {
        .home-road-map {
          &__content {
            &::before {
              @apply -left-90;
            }
          }
        }

        &:hover {
          .home-road-map {
            &__content {
              &::before {
                @apply w-80;
              }
            }
          }
        }
      }

      &:nth-child(even) {
        .home-road-map {
          &__list-item-wrap {
            padding-left: 114px;
          }
        }
      }

      &:nth-child(odd) {
        .home-road-map {
          &__list-item-wrap {
            padding-right: 114px;
          }

          &__content {
            &::before {
              left: inherit;
              right: -90px !important;
            }
          }
        }
      }
    }
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) and (max-width: 992px) {
    &__list-item {
      &:nth-child(odd),
      &:nth-child(even) {
        .home-road-map {
          &__content {
            &::before {
             left: -39px;
            }
          }
        }

        &:hover {
          .home-road-map {
            &__content {
              &::before {
                @apply w-34;
              }
            }
          }
        }
      }

      &:nth-child(even) {
        .home-road-map {
          &__list-item-wrap {
            padding-left: 60px;
          }
        }
      }

      &:nth-child(odd) {
        .home-road-map {
          &__list-item-wrap {
            padding-right: 60px;
          }

          &__content {
            &::before {
              left: inherit;
              right: -39px !important;
            }
          }
        }
      }
    }
  }

  /* Large Devices, Wide Screens */
  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &__list-wrap {
      max-width: 1020px;
    }

    &__list {
      &::before {
        @apply left-1/2 right-0 bottom-0 top-60;
        height: calc(100% - 155px);
      }

      &::after {
        @apply right-0 left-0 w-45 h-45 mx-auto;
      }
    }

    &__list-item {
      @apply float-left clear-left;

      &::before {
        right: -19px !important;
      }

      &:nth-child(2) {
        padding-top: 140px;

        &::before {
          @apply -left-1;
        }
      }

      &:nth-child(even) {
        &::before {
          left: -16px;
        }
      }

      &:nth-child(odd),
      &:nth-child(even) {
        .home-road-map {
          &__content {
            &::before {
              top: 31px;
            }
          }
        }
      }

      &.second-item {
        &::before {
          top: 42.5% !important;
        }
      }
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__list-wrap {
      max-width: 370px;
    }

    &__list {
      &::before {
        @apply absolute left-1/2 right-0 bottom-0 top-60 block w-2;
        content: "";
        left: 17px;
        top: 50px;
        height: calc(100% - 155px);
      }

      &::after {
        @apply w-36 h-36 -left-1;
      }
    }

    &__list-item-wrap {
      @apply pl-50;
    }

    &__list-item {
      @apply float-none clear-both pb-50;

      &::before {
        @apply left-0;
      }

      &:nth-child(odd),
      &:nth-child(even) {
        .home-road-map {
          &__content {
            &::before {
              left: -15px;
              top: 35px;
              width: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
