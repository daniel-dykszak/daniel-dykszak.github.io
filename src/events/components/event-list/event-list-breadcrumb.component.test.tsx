import {render} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import {EventListBreadcrumb} from "./event-list-breadcrumb.component";

describe("EventListBreadcrumb component", () => {
    it("should match snapshot", () => {
        const component = render(<MemoryRouter>
            <EventListBreadcrumb/>
        </MemoryRouter>, {}).baseElement;
        expect(component).toMatchSnapshot();
    });
})