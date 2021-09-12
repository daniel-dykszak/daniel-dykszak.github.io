import {EventStore} from "./event-store";
import {Event} from "../domain/event";

export const EventActions = {
    "EVENTS_LIST_FULFILLED": "EVENTS_LIST_FULFILLED",
    "EVENTS_ADD_TO_FAVORITES": "EVENTS_ADD_TO_FAVORITES",
    "EVENTS_REMOVE_FROM_FAVORITES": "EVENTS_REMOVE_FROM_FAVORITES"
};

export const EventsListFulfilled = (list: Event[]) => ({
    type: EventActions.EVENTS_LIST_FULFILLED,
    list,
});

export const EventsAddToFavorites = (event: Event) => ({
    type: EventActions.EVENTS_ADD_TO_FAVORITES,
    event,
})
export const EventsRemoveFromFavorites = (event: Event) => ({
    type: EventActions.EVENTS_REMOVE_FROM_FAVORITES,
    event,
})

export const eventReducer = (state: EventStore = {
    list: [],
    favoriteIds: new Set<string>()
}, action: any) => {
    switch (action.type) {
        case EventActions.EVENTS_LIST_FULFILLED:
            return ({
                ...state,
                list: action.list,
            })
        case EventActions.EVENTS_ADD_TO_FAVORITES:
            return ({
                ...state,
                favoriteIds: new Set(
                    [...Array.from(state.favoriteIds), action.event.id]
                )
            })
        case EventActions.EVENTS_REMOVE_FROM_FAVORITES:
            state.favoriteIds.delete(action.event.id)
            return ({
                ...state,
                favoriteIds: new Set(state.favoriteIds)
            })
        default:
            return state
    }
}