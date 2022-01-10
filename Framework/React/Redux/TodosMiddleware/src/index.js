import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

function logger(store) {
  const next = store.dispatch

  // Previously:
  // store.dispatch = function dispatchAndLog(action) {

  return function dispatchAndLog(action) {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
}

function logger2(store) {
  const next = store.dispatch

  // Previously:
  // store.dispatch = function dispatchAndLog(action) {

  return function dispatchAndLog(action) {
    console.log('dispatching222', action)
    let result = next(action)
    return result
  }
}

function applyMiddlewareByMonkeypatching(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()

  // Transform dispatch function with each middleware.
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store);
    console.log("[COZE_LOG] store.dispatch", store.dispatch);
    // 원래것을 가리키게 하면 안돼?
  })
}


const store = createStore(rootReducer);

applyMiddlewareByMonkeypatching(store, [logger, logger2]);

console.log("[COZE_LOG] store.dispatch", store.dispatch);

console.log("[COZE_LOG] here");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
