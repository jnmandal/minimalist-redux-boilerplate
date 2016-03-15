import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import reducers from './reducers'
import App from './components/App'
// styles
import './styles/styles.scss'
// setup
let devtools = window.devToolsExtension ? window.devToolsExtension() : f => f
let store = compose(devtools)(createStore)(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
