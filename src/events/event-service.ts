import EventRepository from "./event-repository";
import {Event} from "./domain/event";

export class EventService {
    private static localStorageFavKey = "favorites-event-ids";

    static getList(): Promise<Event[]> {
        return EventRepository.getList();
    }

    static getStoredFavoritesSet(): Set<string> {
        const storageFav = window.localStorage.getItem(EventService.localStorageFavKey);
        if (storageFav) {
            return new Set(
                storageFav.split(",")
            );
        } else return new Set();
    }
    static storeFavoritesSet(favouriteIds: Set<string>): void {
        const localstorageItem = Array.from(favouriteIds).join(",");
        window.localStorage.setItem(EventService.localStorageFavKey, localstorageItem);
    }
}