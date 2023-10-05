<template>
  <div>
    <!-- HEADER -->
    <AppHeader>
      <template #nav-list>
        <div class="flex items-center flex-grow">
          <NuxtLink
            :to="localePath({ name: 'blog' }, $i18n.locale)"
            class="group flex items-center uppercase text-white font-medium whitespace-nowrap ml-auto cursor-pointer"
          >
            <AppIcon
              name="arrow"
              size="22"
              class="group-hover:-translate-x-5 transform rotate-180 transition duration-300"
            />
            <span class="ml-5">{{ $t("nav.blogDetailed.backLink") }}</span>
          </NuxtLink>
        </div>
      </template>
    </AppHeader>

    <!-- BLOG CONTENT -->
    <div class="blog-detailed pb-60 md:pb-80 lg:pb-100 xl:pb-125 pt-125">
      <div class="container">
        <div
          class="
            blog-detailed__grid
            grid
            grid-rows-1
            lg:grid-rows-none
            gap-y-40
            lg:gap-y-0
            lg:gap-x-40
          "
        >
          <!-- LEFT SIDE -->
          <div>
            <!-- BLOG IMG -->
            <div class="blog-detailed__hero-img-wrap rounded-md overflow-hidden mb-20">
              <img
                :src="post.heroImage.url"
                alt=""
                class="w-full h-full object-cover object-left"
              />
            </div>

            <!-- BLOG AUTHOR AVATAR | CREATED AT -->
            <div class="flex md:items-center mb-40">
              <div class="flex flex-col md:flex-row md:items-center mr-20">
                <div class="flex items-center md:mr-40 mb-10 md:mb-0">
                  <div class="w-40 h-40 rounded-full overflow-hidden">
                    <img
                      :src="post.author.fields.image.fields.file.url"
                      :alt="post.author.fields.image.fields.file.fileName"
                    />
                  </div>
                  <span class="text-white font-semibold ml-10">{{ post.author.fields.name }}</span>
                </div>

                <div class="font-medium text-time-warp">
                  {{ post.createdAt | date }}
                </div>
              </div>

              <!-- SOCIAL SHARING MEDIA -->
              <div class="ml-auto">
                <client-only>
                  <v-popover
                    offset="16"
                    :placement="$mq === 'sm' || $mq === 'md' ? 'bottom' : 'left'"
                    popover-wrapper-class="blog-detailed__social-sharing-tooltip"
                  >
                    <!-- This will be the popover target (for the events and position) -->
                    <div
                      class="
                        gradient-primary
                        flex
                        items-center
                        justify-center
                        w-40
                        h-40
                        rounded-full
                        cursor-pointer
                      "
                    >
                      <AppIcon name="share" size="22" class="text-white" />
                    </div>

                    <!-- This will be the content of the popover -->
                    <template slot="popover">
                      <!-- You can put other components too -->
                      <AppSocialSharing
                        :sharing="socialSharingLink"
                        :networks="$options.networks"
                        class="
                          flex
                          items-center
                          divide-black
                          divide-opacity-10
                        "
                        :class="$mq === 'sm' || $mq === 'md' ? 'flex-col divide-y' : 'divide-x'"
                        custom-classes="flex items-center py-12 md:py-0 md:px-12"
                      >
                        <!-- COPY LINK   -->
                        <template #append>
                          <div
                            class="flex items-center py-12 md:py-0 md:px-12 cursor-pointer"
                            @click="copySocialSharingLink"
                          >
                            <AppIcon name="copy" size="18" class="text-white transform rotate-90" />
                          </div>
                        </template>
                      </AppSocialSharing>
                    </template>
                  </v-popover>
                </client-only>
              </div>
            </div>

            <!-- ARTICLE (RICH BODY) -->
            <article class="contentful-article">
              <div v-html="post.richBody" />
            </article>
          </div>

          <!-- RIGHT SIDE -->
          <div
            class="
              blog-detailed__right-side
              flex
              flex-col
              w-full
              lg:w-auto
              space-y-40
              mx-auto
              lg:mx-0
            "
          >
            <!-- RECENT POST -->
            <BlogDetailedRecentPost :post-id="post.slug" :data="posts" />

            <!-- FOLLOW US -->
            <BlogDetailedFollowUs />

            <!-- TAGS -->
            <BlogDetailedTags :data="post.tags" />
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <AppFooter />

    <!-- COPYRIGHT -->
    <AppCopyright />
  </div>
</template>

<script>
import { getBlogPosts, getBlogPost } from '~/core/contentful'
import { getCanonicalUrl, copyToClipboard } from '@/core/helper-functions'

import AppIcon from '@/components/shared/AppIcon.vue'
import AppSocialSharing from '@/components/shared/AppSocialSharing.vue'

import BlogDetailedRecentPost from '@/components/blog/blog-detailed/BlogDetailedRecentPost.vue'
import BlogDetailedFollowUs from '@/components/blog/blog-detailed/BlogDetailedFollowUs.vue'
import BlogDetailedTags from '@/components/blog/blog-detailed/BlogDetailedTags.vue'
import AppHeader from '@/components/reusable/header/AppHeader.vue'
import AppFooter from '@/components/reusable/AppFooter.vue'
import AppCopyright from '@/components/reusable/AppCopyright.vue'

export default {
  name: 'BlogDetailed',

  components: {
    AppIcon,
    AppSocialSharing,
    BlogDetailedRecentPost,
    BlogDetailedFollowUs,
    BlogDetailedTags,
    AppHeader,
    AppFooter,
    AppCopyright
  },

  async asyncData ({ route, i18n }) {
    const posts = await getBlogPosts({ i18n })
    const post = await getBlogPost({ slug: route.params.id, i18n })

    return { posts, post }
  },

  data () {
    return {
      socialSharingLink: { url: '', title: '' }
    }
  },

  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https:${this.post.heroImage.url}`
        },
        {
          hid: 'og:image:secure_url',
          property: `https:${this.post.heroImage.url}`
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.post.title
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https:${this.post.heroImage.url}`
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png'
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '400'
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '300'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: getCanonicalUrl(this.$route)
        }
      ],

      link: [
        {
          rel: 'canonical',
          href: getCanonicalUrl(this.$route)
        }
      ]
    }
  },

  mounted () {
    this.setSocialSharingLink()
  },

  methods: {
    setSocialSharingLink () {
      const url = `${window.location && window.location.origin}/blog/${
        this.post.slug
      }`
      this.socialSharingLink = { ...this.socialSharingLink, url }
    },

    copySocialSharingLink () {
      copyToClipboard({ value: this.socialSharingLink.url })
    }
  },

  networks: [
    {
      network: 'email',
      name: 'Email',
      icon: 'mail',
      iconSize: '24',
      color: '#FFFFFF'
    },
    {
      network: 'facebook',
      name: 'Facebook',
      icon: 'facebook',
      iconSize: '18',
      color: '#FFFFFF'
    },
    {
      network: 'messenger',
      name: 'Messenger',
      icon: 'messenger',
      iconSize: '24',
      color: '#FFFFFF'
    },
    {
      network: 'telegram',
      name: 'Telegram',
      icon: 'telegram',
      iconSize: '21',
      color: '#FFFFFF'
    },
    {
      network: 'twitter',
      name: 'Twitter',
      icon: 'twitter',
      iconSize: '20',
      color: '#FFFFFF'
    },
    {
      network: 'whatsapp',
      name: 'Whatsapp',
      icon: 'whatsapp',
      iconSize: '22',
      color: '#FFFFFF'
    }
  ]
}
</script>

<style lang="scss" scoped>
.blog-detailed {
  &__popper {
    .popper {
      &:before {
        @apply absolute w-0 h-0 -top-10;
        content: "";
        left: 15px;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #e92fa0 transparent;
      }
    }
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1024px) {
    &__grid {
      grid-template-columns: 2fr 1fr;
    }

    &__hero-img-wrap {
      height: 450px;
    }
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) and (max-width: 1023px) {
    &__hero-img-wrap {
      height: 300px;
    }
  }

  /* Medium Devices, Desktops */
  @media(max-width: 1023px) {
    &__right-side {
      max-width: 500px;
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__hero-img-wrap {
      height: 200px;
    }
  }
}
</style>

<style lang="scss">
.tooltip {
  &.popover {
    .blog-detailed {
      &__social-sharing-tooltip {
        .popover-inner {
          @apply rounded-full;
          background: linear-gradient(
            263.44deg,
            theme('colors.brilliant-azure') 0%,
            theme('colors.jewel-caterpillar') 100%
          );
        }

        .popover-arrow {
          border-color: #c586c9;
        }
      }
    }
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &.popover {
      .blog-detailed {
        &__social-sharing-tooltip {
          .popover-inner {
            @apply rounded-full px-0 py-10;
          }
        }
      }
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &.popover {
      .blog-detailed {
        &__social-sharing-tooltip {
          .popover-inner {
            @apply rounded-full px-10 py-0;
          }
        }
      }
    }
  }
}

.contentful-article {
  audio {
    @apply my-20;
  }

  h2 {
    @apply text-35 text-white font-accidental-presidency tracking-xxs mt-40 mb-20;
    line-height: 1.2;
  }

  h3 {
    @apply text-25 text-white font-accidental-presidency tracking-xxs mt-30 mb-20;
    line-height: 1.3;

    a {
      @apply text-splash-of-grenadine;
    }
  }

  p {
    @apply text-time-warp my-20;

    a {
      @apply text-splash-of-grenadine underline hover:no-underline;
    }
  }

  ul {
    @apply list-disc text-white pl-14 my-20;
  }
}
</style>
