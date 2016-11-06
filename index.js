
let rootStyle

const setStyle = (obj) => {
  const keys = Object.keys(obj)
  keys.forEach(key => {
    const value = obj[key]
    rootStyle.setProperty(`--${key}`, value)
  })

  return keys
}

const cv = arg => {
  // Make this work server-side
  rootStyle = rootStyle || document.documentElement.style

  if (typeof arg === 'string') {
    return `var(--${arg})`
  }

  if (arg && typeof arg === 'object') {
    return setStyle(arg)
  }
}

Object.defineProperty(cv, 'style', {
  get () {
    return rootStyle
  }
})

module.exports = cv

