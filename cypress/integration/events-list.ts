import {EventList} from "./page-objects/event-list";

describe("events list", () => {
    const PO = EventList;
    beforeEach(() => {
        PO.visit();
    })
    it("should render home and events list breadcrumbs", () => {
        PO.getBreadcrumbs()
            .getEventList()
            .should("have.length", 1)
        PO.getBreadcrumbs()
            .getHome()
            .click();
        cy.url().should("eq", Cypress.config().baseUrl + "/#/")
    })
    describe("filterCategory", () => {
        it("should render all categories", () => {
            PO.getFilterOptions("0").should("contain.text", "All")
            PO.getFilterOptions("1").should("contain.text", "Favorites")
            PO.getFilterOptions("2").should("contain.text", "ZOO")
            PO.getFilterOptions("3").should("contain.text", "PARK")
            PO.getFilterOptions("4").should("contain.text", "PUB")
        });
        describe("should render All events correctly", () => {
            it("should render correct count", () => {
                PO.getCountText().first()
                    .should("have.text", "Found 11 events")
            });
            it("should render Stare Zoo event", () => {
                PO.getCardTitle("0")
                    .should("have.text", "Stare Zoo");
                PO.getCardLink("0")
                    .should("have.attr", "href", "#/event/1-Stare-Zoo")
                PO.getCardDescription("0")
                    .should("contain.text", "Stare Zoo w Poznaniu – jeden z dwóch najstarszych ogrodów zoologicznych");
            });
            it("should render Dubliner pub event", () => {
                PO.getCardTitle("7")
                    .should("have.text", "The Dubliner");
                PO.getCardLink("7")
                    .should("have.attr", "href", "#/event/8-The-Dubliner")
                PO.getCardDescription("7")
                    .should("contain.text", "Profesjonalne doradztwo, pyszne piwa, czysto,");
            });
        })
        describe("should render Pub events correctly", () => {
            beforeEach(() => {
                PO.getCategorySelectionBtn("PUB").click();
            });
            it("should render correct count", () => {
                PO.getCountText().first()
                    .should("have.text", "Found 2 events")
            });
            it("should render Jeżycówka event", () => {
                PO.getCardTitle("0")
                    .should("have.text", "Jeżycówka");
                PO.getCardDescription("0")
                    .should("contain.text", "Profesjonalne doradztwo, pyszne piwa, czysto, schludnie, leżaczki,");
            });
            it("should render Dubliner pub event", () => {
                PO.getCardTitle("1")
                    .should("have.text", "The Dubliner");
                PO.getCardDescription("1")
                    .should("contain.text", "Profesjonalne doradztwo, pyszne piwa, czysto,");
            });
        })

        describe("should allow filtering via select on smaller screen resolution", () => {
            beforeEach(() => {
                cy.viewport('iphone-6')
                PO.selectCategory("PUB");
            });
            it("should render correct count", () => {
                PO.getCountText().first()
                    .should("have.text", "Found 2 events")
            });
            it("should render Jeżycówka event", () => {
                PO.getCardTitle("0")
                    .should("have.text", "Jeżycówka");
                PO.getCardDescription("0")
                    .should("contain.text", "Profesjonalne doradztwo, pyszne piwa, czysto, schludnie, leżaczki,");
            });
            it("should render Dubliner pub event", () => {
                PO.getCardTitle("1")
                    .should("have.text", "The Dubliner");
                PO.getCardDescription("1")
                    .should("contain.text", "Profesjonalne doradztwo, pyszne piwa, czysto,");
            });
        })
    })
})