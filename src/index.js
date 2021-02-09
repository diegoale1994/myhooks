import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-usesState/CounterApp';
import { CounterWithCustomHook } from './components/01-usesState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { HookApp } from './HookApp';

ReactDOM.render(
  <FormWithCustomHook />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals