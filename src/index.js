import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

// console.log(store.getState())

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
