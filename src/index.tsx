import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store";
import {EventsListFulfilled} from "./events/redux/event-reducer";
import EventRepository from "./events/event-repository";

const boostrapReact = () => ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
  document.getElementById('root')
);

Promise.resolve().then(boostrapReact)
    .then(() => {
        return EventRepository.getList().then((list) => {
            store.dispatch(EventsListFulfilled(list))
        });
    });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();