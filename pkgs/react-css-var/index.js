const { Component } = require('react')
const cv = require('css-var')

module.exports = class CSSVar extends Component {
  componentDidMount () {
    cv(this.props.vars)
  }
  componentWillReceiveProps (next) {
    if (next.vars !== this.props.vars) {
      cv(next.vars)
    }
  }

  render () {
    return false
  }
}
