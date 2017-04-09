// import {fetchdata} from './fetch';
// fetchdata(' http://localhost:8080/src/data.json').then((e) =>{
//     console.log(e);
// });
import React from 'react';
import createstore from './redux/store/store.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './page/app.js'
const store = createstore();
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, app);