import {render} from '@testing-library/react';
import {Event} from "../../domain/event";
import {EventDetailsBreadcrumb} from "./event-details-breadcrumb.component";
import {MemoryRouter} from "react-router-dom";

describe("EventDetailsBreadcrumb component", () => {
    it("should match snapshot", () => {
        const event = {
            category: "someCategory",
            title: "someTitle"
        } as Event;
        const component = render(<MemoryRouter>
            <EventDetailsBreadcrumb event={event}/>
        </MemoryRouter>, {}).baseElement;
        expect(component).toMatchSnapshot();
    });
})