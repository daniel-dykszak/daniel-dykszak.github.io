import {Event} from "./domain/event";

export default class EventRepository {
    public static getList(): Promise<Event[]> {
        return fetch("/api/events.json").then(
            (value: Response) => value.json()
        );
    }
}