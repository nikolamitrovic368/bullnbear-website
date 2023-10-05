import { UBXN } from '@/core/tokens'

export default {
  /* NAVIGATION */
  nav: {
    staticLinks: ['Trading Vaults', 'NFT', 'Roadmap'],
    dropdownLinks: [
      {
        title: 'More info',
        options: [
          {
            value: 'Blog',
            subValue: 'Check our latest articles'
          },
          {
            value: 'FAQ',
            subValue: 'Frequently Asked Questions'
          },
          {
            value: 'Contact Us',
            subValue: 'Let\'s get in touch'
          },
          {
            value: 'Infos',
            subValue: 'Check out our documentation'
          }
        ]
      }
    ],
    blog: {
      backLink: 'Back To Home'
    },
    blogDetailed: {
      backLink: 'Back To Blog'
    }
  },

  /* HEADER */
  header: {
    btnText: "Démarrer L'application"
  },

  /* HOME */
  home: {
    /* HERO */
    hero: {
      title: 'Automatic Decentralized Trading Protocol',
      subtitle: [
        'The power of DeFi at the service of your capital.',
        'Put your capital on autopilot on the most secure trading protocol'
      ],
      btnText: 'Start trading',
      imagesText: 'Certified by'
    },
    /* SUMMARY */
    summary: {
      marketCap: {
        title: 'MarketCap'
      },
      circulatingSupply: {
        title: 'Circulating Supply'
      },
      UBXNStaked: {
        title: `${UBXN} Staked`
      },
      totalBurned: {
        title: 'Total Burned'
      }
    },
    /* ABOUT US */
    aboutUs: {
      tag: 'ABOUT US',
      title: 'UP TO 100x MORE PROFIT THAN A FARMING POOL',
      desc: 'BullnBear has created a unique secure and decentralized trading protocol, allowing for potentially <strong>higher return</strong> than the farming pools available.',
      list: ['100% automatic', 'Audited and Secure', 'Plug and Play system'],
      btnText: 'See Vaults'
    },
    /* WHY US */
    whyUs: {
      tag: 'WHY CHOOSE US',
      title: 'Secure trading on DEFI',
      desc: 'Based on a specific strategy, each vault trades in a specific market. Once capital is deposited, the vault will trade and optimize gas fees automatically.',
      list: [
        {
          title: '24/7',
          desc: '24/7 operation of bots using blockchain and cloud technology'
        },
        {
          title: '100% BLOCKCHAIN',
          desc: 'Traceable on the blockchain, everything can be tracked and analyzed'
        },
        {
          title: 'TRANSPARENT FEE',
          desc: '15% fee charged only in case of gain, otherwise, creation of a virtual debt'
        },
        {
          title: 'SECURE & AUDITED',
          desc: 'Vaults secured and audited by solidproof and immunefi'
        }
      ],
      btnText: 'Start trading'
    },
    /* ROADMAP */
    roadmap: {
      tag: 'ROAD MAP',
      title: 'BULL&BEAR ROAD MAP',
      desc: 'Successful investments require a clear road and a team that consistently proves they can walk it. See where we are and what’s to come.',
      list: [
        {
          title: 'March, 2022',
          infoTitle: 'Launch Beta',
          infoDesc: 'Launch of v0.1 of BullnBear with 7 vaults.'
        },
        {
          title: 'April, 2022',
          infoTitle: 'Official Launch',
          infoDesc: 'Launch after the bounty on immunefy.'
        },
        {
          title: 'Q2 2022',
          infoTitle: 'NFT sale',
          infoDesc: 'Bull & Bear fight club NFT collection launch.'
        },
        {
          title: 'Q2 2022',
          infoTitle: 'SuperVaults',
          infoDesc: 'Auto rebalancing for the 5 best vaults.'
        },
        {
          title: 'Q3 2022',
          infoTitle: 'ETH Network',
          infoDesc: 'Launch of BullnBear on ETH network.'
        },
        {
          title: 'Q3 2022',
          infoTitle: 'Polygon network',
          infoDesc: 'Launch of BullnBear on Polygon network.'
        },
        {
          title: 'Q4 2022',
          infoTitle: 'Leveraging Vaults',
          infoDesc: 'Launch of the system of leverage trading on vaults.'
        },
        {
          title: 'Q4 2022',
          infoTitle: 'Prediction game',
          infoDesc: 'Launch of several games for BullnBear.'
        }
      ]
    },
    /* NFT */
    nft: {
      tag: 'NFT',
      title: 'THE BULL & BEAR FIGHT CLUB COLLECTION',
      desc: 'Thanks to Bull & Bear NFTs, take advantage of Vaults BullnBear without any fees, with 0% performance fees!',
      btnText: 'More Infos'
    },
    /* FAQ */
    faq: {
      tag: "FAQ'S",
      title: 'GENERAL ASKED QUESTIONS',
      desc: 'Growth favours those who keep looking for answers. Find the one for you below.',
      tabsValue: 'general',
      tabsOptions: ['General', 'Vaults'],
      accordionItems: {
        general: [
          {
            title: 'What is BullnBear?',
            description:
              'BullnBear offers decentralized trading solutions, via "vaults" in which users can deposit their capital and which will be traded on decentralized markets in a secure manner.'
          },
          {
            title: 'What are the risks?',
            description:
              'Although the algorithms have built-in safeties, trading is always risky. Losses can occur in the case of negative trades. The goal of the algorithms is to be better than the market, but when the market goes down, it is possible that there will be losses. Consider algorithms in the long term and as a diversification tool in your portfolio.'
          },
          {
            title: 'How much does it cost?',
            description:
              `There are no fees for deposits and withdrawals. The system is based on performance fees and a transaction fee. Regarding performance fees, in case of profit, the vault will convert 15% into ${UBXN} which will be distributed to the liquidity pool, the algo developer or burned.`
          },
          {
            title: `What is the link with the ${UBXN}?`,
            description:
              `In order to link this to the ${UBXN} ecosystem, all trading fees and performance fees are converted to ${UBXN} automatically, creating continuous buying pressure. There is no need to add ${UBXN} in the vault, everything is done automatically.`
          }
        ],
        vaults: [
          {
            title: 'What is a vault?',
            description:
              'A vault is a smart-contract that allows users to deposit their capital and in exchange receive "shares" of the vault. At any time, a user can convert the vault back to capital.'
          },
          {
            title: 'Is it secure?',
            description:
              'Yes it\'s safe! Our vaults have been created by our team and tested with the utmost care. The smart-contracts have been then audited by SolidProof, one of the most reputable auditing companies. All the info can be found on our <a href="https://upbots.gitbook.io/superbots/superbots-intro" target="_blank">gitbook</a>.'
          },
          {
            title: 'Why there are different vaults?',
            description:
              'Each vault refers to a different algorithm, and each algorithm is based on a different trading strategy. All the data is presented so that you can make the right choice. A trading algorithm is a set of indicators put together to determine the entry and exit points on the price of a value. The algorithms are developed by experts and the UpBots/BullnBear community.'
          }
        ]
      }
    },
    /* PARTNERS */
    partners: {
      tag: 'PARTNERS',
      title: 'Our Awesome Partners',
      desc: 'No grand road should ever be walked alone. See our partners who are coming along with us.'
    },
    /* TWEETS */
    tweets: {
      tag: 'TWEETS',
      title: 'LATEST TWEETS',
      desc: 'A strong community is the life force or any undertaking, so we keep ours as close as we do our partners. Check out our recent social activity.'
    },
    /* BLOG */
    blog: {
      tag: 'BLOG',
      title: 'LATEST POSTS',
      desc: 'We write so our community can grow together with us. That\'s the foundation of our blog. Check out our latest articles below.',
      noData: 'No data available',
      checkAllBlogPostsBtn: 'Check all blog posts'
    }
  },

  /* BLOG */
  blog: {
    hero: {
      title: 'Welcome to Our Blog',
      desc: 'We write so our community can grow together with us. That\'s the foundation of our blog. Check out our latest articles below.',
      btnText: 'Learn More'
    },
    blogTitle: 'New Posts'
  },

  /* BLOG DETAILED */
  blogDetailed: {
    recentPost: 'Recent Post',
    followUs: 'Follow Us',
    tags: 'Tags'
  },

  /* CONTACT US */
  contactUs: {
    title: 'Contact Us',
    desc: 'Please, fill the form and we will contact you soon',
    form: {
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Full Name',
      emailLabel: 'Email',
      emailPlaceholder: 'example@mail.com',
      messageLabel: 'Message',
      messagePlaceholder: 'type your message here',
      emailSubject: 'BullnBear Contact Form Submission',
      submitBtn: 'Send'
    }
  },

  /* FOOTER */
  footer: {
    /* ROW 1 */
    row1: {
      desc: 'BullnBear enables investors to let bots manage their assets without having to manage anything, and without any entry or exit fees. All transactions are secure due to them taking place on the blockchain via DEX.',
      constactInfo: {
        mail: 'contact@bullnbear.finance'
      }
    },
    /* ROW 2 */
    row2: {
      title: 'Links',
      links: ['UpBots', 'Contact Us']
    },
    /* ROW 3 */
    row3: {
      title: 'Ressources',
      links: ['Documentation', 'Source', 'Blog']
    },
    /* ROW 4 */
    row4: {
      title: 'Social Media'
    }
  },

  /* COPYRIGHT */
  copyright: {
    text: {
      prependText: 'Copyright',
      appendText: 'All Rights Reserved'
    }
  }
}
