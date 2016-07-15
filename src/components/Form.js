const React = require('react')

class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>{this.props.heading}</h1>
        {this.props.children}
      </form>
    )
  }
}

module.exports = Form