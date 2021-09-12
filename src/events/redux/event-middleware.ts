import {EventService} from "../event-service";
import {EventStore} from "./event-store";
import { Middleware } from 'redux';
import {EventActions} from "./event-reducer";

export const EventMiddleware: Middleware<
    {},
    { events: EventStore }
    > = storeApi => next => action => {
    next(action);
    if (
        action.type !== EventActions.EVENTS_ADD_TO_FAVORITES &&
        action.type !== EventActions.EVENTS_REMOVE_FROM_FAVORITES
    ) return;
    const favouritesIds = storeApi.getState().events.favoriteIds;
    EventService.storeFavoritesSet(favouritesIds);
}
