import {combineReducers, compose, createStore, applyMiddleware} from "redux";
import {eventReducer} from "./events/redux/event-reducer";
import {EventMiddleware} from "./events/redux/event-middleware";
import {getPreloadedEventsSubStore} from "./events/redux/event-store";
import {geolocationReducer} from "./geolocation";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducer = combineReducers({
    events: eventReducer,
    geolocation: geolocationReducer
});
export const store = createStore(RootReducer,{
    events: getPreloadedEventsSubStore()
} , composeEnhancers(applyMiddleware(EventMiddleware)));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
