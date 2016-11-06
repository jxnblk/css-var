
import cv from '..'
import chroma from 'chroma-js'

const negate = (color) => {
  const rgb = chroma(color).rgb()
  const neg = rgb.map((val, i) => 255 - val)
  return chroma(neg).hex()
}

const setColors = () => {
  const bg = chroma.random().hex()
  const text = negate(bg)
  cv({ text, bg })
}

document.body.style.color = cv('text')
document.body.style.backgroundColor = cv('bg')

setColors()
setInterval(setColors, 2000)


