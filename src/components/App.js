import React from 'react'
import { connect } from 'react-redux'
import GreetingButton from './GreetingButton'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>{ this.props.greeting }</h1>
        <GreetingButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greetingReducer
  }
}

export default connect(mapStateToProps)(App);
