import {Event} from "./event";
import {filterEventsByCategory, findEventById, getEventSlug, getIdFromSlug} from "./location-event.service";

describe("location-event service", () => {
    describe("findEventById", () => {
        it("should find event by id in event list", () => {
            const events = [
                {id: "1", title: "some title1"},
                {id: "2", title: "some title2"},
                {id: "3", title: "some title3"},
            ] as Event[];
            expect(findEventById(events, "2")).toEqual(events[1])
        })
    })
    describe("getEventSlug", () => {
        it("should concatenate id and title", () => {
            const event = {
                id: "id",
                title: "title"
            } as Event;
            expect(getEventSlug(event)).toEqual("id-title" )
        });
        it("should sanitize spaces in title", () => {
            const event = {
                id: "id",
                title: "title with spaces"
            } as Event;
            expect(getEventSlug(event)).toEqual("id-title-with-spaces")
        });
    });
    describe("getIdFromSlug", () => {
        it("should get id from slug", () => {
            expect(getIdFromSlug("1-title")).toEqual("1")
        })
    });
    describe("filterEventsByCategory", () => {
        it("should return all if no category was selected", () => {
            const events = [
                {id: "1", category: "ZOO"},
                {id: "2", category: "PARK"}
            ] as Event[]
            expect(filterEventsByCategory(events, "", new Set()))
                .toEqual(events);
        })
        it("should return all events marked as favorite for category favorites", () => {
            const events = [
                {id: "1", category: "ZOO"},
                {id: "2", category: "PARK"},
                {id: "3", category: "PARK"},
            ] as Event[]
            expect(filterEventsByCategory(events, "favorites", new Set(["1", "3"])))
                .toEqual([events[0], events[2]]);
        })
        it("should return all events from given category", () => {
            const events = [
                {id: "1", category: "ZOO"},
                {id: "2", category: "PARK"},
                {id: "3", category: "PARK"},
            ] as Event[]
            expect(filterEventsByCategory(events, "PARK", new Set(["1", "3"])))
                .toEqual([events[1], events[2]]);
        })
    })
})