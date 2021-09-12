import {EventList} from "./event-list/event-list.component";
import {EventListBreadcrumb} from "./event-list/event-list-breadcrumb.component";

export const EventListPage = () => {
    return <>
        <EventListBreadcrumb/>
        <EventList/>
    </>
}