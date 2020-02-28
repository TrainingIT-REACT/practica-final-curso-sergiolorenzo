import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './App/store';

ReactDOM.render(
  <main>
      <Provider store={store}>
        <App />
      </Provider>
    </main>,
document.getElementById('root'));

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <main>
//         <Provider store={store}>
//           <App />
//         </Provider>
//     </main>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
