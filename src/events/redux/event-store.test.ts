import {getPreloadedEventsSubStore} from "./event-store";

jest.mock("../event-service", () => ({
    EventService: {
        getStoredFavoritesSet: () => new Set(["1","2","3"])
    }
}));
describe("getPreloadedEventsSubStore", () => {
    it("should return empty list", () => {
        expect(getPreloadedEventsSubStore().list).toEqual([])
    })
    it("should return favorites list based on event service", () => {
        expect(getPreloadedEventsSubStore().favoriteIds.has("1")).toBeTruthy()
        expect(getPreloadedEventsSubStore().favoriteIds.has("2")).toBeTruthy()
        expect(getPreloadedEventsSubStore().favoriteIds.has("3")).toBeTruthy()
        expect(getPreloadedEventsSubStore().favoriteIds.size).toEqual(3);
    })
});