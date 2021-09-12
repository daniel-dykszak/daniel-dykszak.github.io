import {EventStore} from "./event-store";
import {Event} from "../domain/event";
import {eventReducer, EventsAddToFavorites, EventsListFulfilled, EventsRemoveFromFavorites} from "./event-reducer";

describe("eventReducer", () => {
    const defaultState: EventStore = {
        list: [],
        favoriteIds: new Set<string>()
    }
    describe("default state", () => {
        it("should return empty list", () => {
            const defaultState = eventReducer(undefined, {type: "NON_EXISTING"})
            expect(defaultState.list).toEqual([]);
        })
    })
    describe("EventsListFulfilled action", () => {
        it("should store event list", () => {
            const eventList = [
                { id: 1, title: "t1"},
                { id: 2, title: "t2"},
                { id: 3, title: "t3"}
            ] as any as Event[];
            const newState = eventReducer(defaultState, EventsListFulfilled(eventList))
            expect(newState.list).toEqual(eventList);
        });
    });
    describe("EventsAddToFavorites action", () => {
        it("should store new favorite id", () => {
            const event = { id: "1" } as Event;
            const newState = eventReducer(defaultState, EventsAddToFavorites(event))
            expect(newState.favoriteIds.has("1")).toBeTruthy();
            expect(newState.favoriteIds.size).toEqual(1);
        });
        it("should preserve previous favorite ids", () => {
            const event = { id: "3" } as Event;
            const newState = eventReducer({
                list: [],
                favoriteIds: new Set(["1", "2"])
            }, EventsAddToFavorites(event))
            expect(newState.favoriteIds.has("1")).toBeTruthy();
            expect(newState.favoriteIds.has("2")).toBeTruthy();
        });
    });
    describe("EventsRemoveFromFavorites action", () => {
        it("should remove favorite id", () => {
            const event = { id: "1" } as Event;
            const newState = eventReducer({
                list: [],
                favoriteIds: new Set(["1"])
            }, EventsRemoveFromFavorites(event))
            expect(newState.favoriteIds.has("1")).toBeFalsy()
        });
        it("should preserve previous favorite ids", () => {
            const event = { id: "3" } as Event;
            const newState = eventReducer({
                list: [],
                favoriteIds: new Set(["1", "2", "3"])
            }, EventsRemoveFromFavorites(event))
            expect(newState.favoriteIds.has("1")).toBeTruthy();
            expect(newState.favoriteIds.has("2")).toBeTruthy();
        });
    });
})