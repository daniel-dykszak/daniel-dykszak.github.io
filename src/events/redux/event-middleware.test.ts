import {EventService} from "../event-service";
import {EventMiddleware} from "./event-middleware";
import {EventActions} from "./event-reducer";

jest.mock("../event-service", () => ({
    EventService: {
        storeFavoritesSet: jest.fn()
    }
}));
describe("EventMiddleware", () => {
    it("should call next with proper action", () => {
        const nextFn = jest.fn()
        const action = {type: "TEST_ACTION"};
        EventMiddleware({} as any)(nextFn)(action);
        expect(nextFn).toHaveBeenCalled();
        expect(nextFn).toHaveBeenCalledWith(action);
    });
    it("should store favourites id using EventService.storeFavoritesSet method", () => {

        const nextFn = jest.fn()
        const action = {type: EventActions.EVENTS_ADD_TO_FAVORITES};
        const newFavoritesIds = new Set(["1"])
        const storeApi = {getState: () => ({
                events: {favoriteIds: newFavoritesIds}
            })} as any;
        EventMiddleware(storeApi)(nextFn)(action);
        expect(EventService.storeFavoritesSet).toHaveBeenCalled();
        expect(EventService.storeFavoritesSet).toHaveBeenCalledWith(newFavoritesIds);
    })
})