import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const client = createClient({
  space: 'lqo7btdj55t2',
  accessToken: 'CfAiDFKEphtzgfClfCz_5jADzyzwDz7X9Gs01moH8Xk'
})

const getLocale = (locale) => (locale === 'fr' ? locale : 'en-US')

export const getBlogPosts = async (payload) => {
  const locale = payload.locale || payload.i18n.locale
  const limit = payload && payload.limit ? payload.limit : 100

  const entries = await client.getEntries({
    limit,
    content_type: 'blogPost',
    order: '-fields.createdAt',
    locale: getLocale(locale)
  })
  return entries.items
}

export const getBlogPost = async (payload) => {
  const locale = payload.i18n.locale
  const slug = payload.slug || ''

  const entries = await client.getEntries({
    content_type: 'blogPost',
    locale: getLocale(locale),
    'fields.slug': slug
  })
  const { fields } = entries.items[0]

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (asset) => {
        const { title, file } = asset.data.target.fields
        const mimeType = file.contentType
        const mimeGroup = mimeType.split('/')[0]
        switch (mimeGroup) {
          case 'image':
            return `<img src="${file.url}" alt="${title || ''}" />`
          case 'audio':
            return `
              <audio controls src="${file.url}">
                Your browser does not support the <code>audio</code> element.
              </audio>
            `
        }
      }
    }
  }

  fields.richBody = await documentToHtmlString(fields.richBody, options)
  fields.heroTitle = fields.heroImage.fields.title
  fields.heroImage = fields.heroImage.fields.file

  return fields
}
