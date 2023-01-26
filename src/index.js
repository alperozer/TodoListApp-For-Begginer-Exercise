import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer ,{initialState}from './context/reducer';
import {TodoLayer} from './context/TodoContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
    <App />
    </TodoLayer>
  </React.StrictMode>
);

