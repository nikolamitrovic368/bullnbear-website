import Vue from 'vue'

export const scrollThrottle = (func, ms, context) => {
  let isThrottled = false

  return function wrapper () {
    if (isThrottled) return

    func.apply(context || this, arguments)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false
    }, ms)
  }
}

export const startScroll = (top, behavior = 'smooth', offset = 40) => {
  window.scrollTo({ top: top - offset, behavior })
}

export const scrollToSection = (section) => {
  const sectionTop = document.querySelector(section).getClientRects()['0'].top + window.scrollY
  startScroll(sectionTop)
}

export const extend = (app, mixin) => {
  if (!app.mixins) {
    app.mixins = []
  }
  app.mixins.push(mixin)
}

export function copyToClipboard ({ value, infoMessage = 'Copied to clipboard' }) {
  const tempInput = document.createElement('input')
  tempInput.value = value
  document.body.appendChild(tempInput)
  tempInput.select()
  document.execCommand('copy')
  document.body.removeChild(tempInput)
  Vue.notify({ group: 'global', title: infoMessage })
}

export const getCanonicalUrl = (route) => {
  const forwardSlash =
    route.fullPath[route.fullPath.length - 1] === '/' ? '' : '/'
  return `${process.env.rootDomain}${route.fullPath}${forwardSlash}`
}

export const formatLargeNumber = ({ prependSymbol, value, toFixed = 0 }) => {
  const prepSymbol = prependSymbol || ''
  if (Math.abs(value) >= 1.0e9) {
    // Nine Zeroes for Billions
    return `${prepSymbol}${(Math.abs(value) / 1.0e9).toFixed(toFixed)}B+`
  } else if (Math.abs(value) >= 1.0e6) {
    // Six Zeroes for Millions
    return `${prepSymbol}${(Math.abs(value) / 1.0e6).toFixed(toFixed)}M+`
  } else if (Math.abs(value) >= 1.0e3) {
    // Three Zeroes for Thousands
    return `${prepSymbol}${(Math.abs(value) / 1.0e3).toFixed(toFixed)}K`
  } else {
    // Default
    return `${prepSymbol}${(Math.abs(value)).toFixed(toFixed)}`
  }
}
