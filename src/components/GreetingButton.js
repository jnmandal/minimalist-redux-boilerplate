import React from 'react'
import { connect } from 'react-redux'
import { setGreeting } from '../actions/actions'

class GreetingButton extends React.Component {
  onClick () {
    let greeting = prompt('enter greeting');
    this.props.dispatch(setGreeting(greeting));
  }
  render () {
    return (
      <button onClick={this.onClick.bind(this)}>
        greetings
      </button>
    );
  }
}

export default connect()(GreetingButton);
