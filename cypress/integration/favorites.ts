import {EventList} from "./page-objects/event-list";
import {EventDetails} from "./page-objects/event-details";

describe("event favorites", () => {
    it("should preserve added to favorites", () => {
        EventList.visit();
        EventList.getAddToFavoritesBtn("Nowe Zoo").should("be.not.empty")
        EventList.getAddToFavoritesBtn("Nowe Zoo").click();
        EventList.getRemoveFromFavoritesBtn("Nowe Zoo").should("be.not.empty")

        EventDetails.visit("2", "nowe zoo");
        EventList.visit();

        EventList.getRemoveFromFavoritesBtn("Nowe Zoo").click();
        EventList.getAddToFavoritesBtn("Nowe Zoo").should("be.not.empty")
    });

    it("should filter by favorites", () => {
        EventList.visit();
        EventList.getAddToFavoritesBtn("Nowe Zoo").click();
        EventList.getCategorySelectionBtn("favorites").click();
        EventList.getCountText().first()
            .should("have.text", "Found 1 events")
        EventList.getCardTitle("0")
            .should("have.text", "Nowe Zoo");
    });
});