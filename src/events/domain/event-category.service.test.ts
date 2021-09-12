import {Event} from "./event";
import {getCategoryFromEvents} from "./event-category.service";

describe("event category service", () => {
    describe("getCategoryFromEvents", () => {
        it("should generate category list from event list", () => {
            const categories = getCategoryFromEvents([
                {category: "A"},
                {category: "B"},
                {category: "A"},
                {category: "B"},
                {category: "C"},
            ] as Event[]);
            expect(categories).toEqual(["A", "B", "C"])
        })
    })
})