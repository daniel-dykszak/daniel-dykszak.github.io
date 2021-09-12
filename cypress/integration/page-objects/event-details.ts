/// <reference types="cypress" />

class EventDetailsBreadcrumb {
    static getHome() {
        return cy.get(`a[title="home"]`)
    }
    static getEventList () {
        return cy.get(".breadcrumb-item")
            .filter(':contains("Event list")');
    }
}

export class EventDetails {
    static getBreadcrumbs() {
        return EventDetailsBreadcrumb;
    }
    static visit(id: string, eventName: string) {
        const slug = id + "-" + eventName.replace(" ", "-");
        cy.visit("#/event/" + slug);
    }
}