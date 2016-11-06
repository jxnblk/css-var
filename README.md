
# css-var

CSS custom properties helper utility

  npm i css-var

```js
import cv from 'css-var'

// Set a custom property
cv({ blue: '#07c' })

const style = {
  // Use custom property
  color: cv('blue') // 'var(--blue)'
}
```

Currently only works client-side

MIT License
