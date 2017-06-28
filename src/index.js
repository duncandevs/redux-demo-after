import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux'

var defaultState = {
  msgcount: 0,
  messages: []
}

const store = createStore(reducer)
const reducer = (state = defaultState,action)=>{
  //takes in state and action and reduces
  console.log(action)
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
