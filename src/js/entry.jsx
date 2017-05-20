// import {fetchdata} from './fetch';
// fetchdata(' http://localhost:8080/src/data.json').then((e) =>{
//     console.log(e);
// });
import React from 'react';
import createstore from './redux/store/store.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './page/app.js';
import appReducer from './redux/reducer/appReducer';
const appstore = createstore(appReducer);
const app = document.createElement('div');
app.style.height = window.screen.availHeight + 'px';
document.body.appendChild(app);
ReactDOM.render(
    <Provider store={appstore}>
        <App />
    </Provider>, app);