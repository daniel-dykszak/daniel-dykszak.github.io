/// <reference types="cypress" />

class EventListBreadcrumb {
    static getHome() {
        return cy.get(`a[title="home"]`)
    }
    static getEventList () {
        return cy.get(".breadcrumb-item")
            .filter(':contains("Event list")');
    }
}

export class EventList {
    private static eventGroupFilterSelector = "#eventGroupFilter";
    static visit () {
        cy.visit("#/events")
    }
    static getBreadcrumbs() {
        return EventListBreadcrumb;
    }

    static getCountText() {
        return cy.get("footer.my-2.ms-1")
    }
    static getFilterOptions(position: string) {
        return cy.get(`${this.eventGroupFilterSelector} option:eq(${position})`)
    }
    static getCardTitle(position: string) {
        return cy.get(`.card .card-header:eq(${position})`)
    }
    static getCardLink(position: string) {
        return cy.get(`.card .card-header a:eq(${position})`)
    }
    static getCardDescription(position: string) {
        return cy.get(`.card .card-text:eq(${position})`)
    }
    static selectCategory(category: string) {
        return cy.get(this.eventGroupFilterSelector)
            .select(category)
    }
    static getCategorySelectionBtn(category: string) {
        return cy.get(`a[href$="${category}"]`).first()
    }
    static getAddToFavoritesBtn(category: string) {
        return cy.get(`button[title="Add ${category} to favourites"]`);
    }

    static getRemoveFromFavoritesBtn(category: string) {
        return cy.get(`button[title="Remove ${category} from favourites"]`);
    }
}