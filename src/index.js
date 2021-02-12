import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-usesState/CounterApp';
import { CounterWithCustomHook } from './components/01-usesState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { CallBackHook } from './components/06-memos/CallBackHook';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';
import { Padre } from './components/07-tarea/Padre';
//import { HookApp } from './HookApp';

ReactDOM.render(
  <Padre />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals