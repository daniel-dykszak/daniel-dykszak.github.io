import {Event} from "../domain/event";
import {EventService} from "../event-service";

export type EventStore = {
    favoriteIds: Set<string>,
    list: Event[],
}

export const getPreloadedEventsSubStore = (): EventStore => {
    return {
        list: [],
        favoriteIds: EventService.getStoredFavoritesSet()
    }
}