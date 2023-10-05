// https://github.com/michalsnik/aoshttps://github.com/michalsnik/aos

import AOS from 'aos'
export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({ once: true }) // or any other options you need
}
