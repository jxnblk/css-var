
# react-css-var

React component for injecting CSS custom properties (i.e. variables)

```sh
npm i react-css-var
```

```jsx
import React from 'react'
import CSSVar from 'react-css-var'

class App extends React.Component {
  render () {
    state = {
      vars: {
        highlight: 'tomato'
      }
    }

    return (
      <div>
        <CSSVar vars={this.state.vars} />
        <h1
          style={{
            color: 'var(--highlight)'
          }}>
          Hello
        </h1>
      </div>
    )
  }
}
```

MIT License
