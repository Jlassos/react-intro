const React = require('react')
const Button = require('../components/Button')
const Input = require('../components/Input')
const Form = require('../components/Form')

class Login extends React.Component {
  render() {
    return (
      <div>
        Welcome!
        <Form heading='Login'>
          <Input/>
          <Input/>
          <Button>Login</Button>
        </Form>
      </div>
    )
  }
}

module.exports = Login