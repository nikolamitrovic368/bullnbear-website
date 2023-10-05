export default function (to, from, savedPosition) {
  if (to.path === '/') {
    return
  }
  if (from.path === '/' || from.path === '/blog') {
    return { x: 0, y: 0, behavior: 'smooth' }
  }
}
