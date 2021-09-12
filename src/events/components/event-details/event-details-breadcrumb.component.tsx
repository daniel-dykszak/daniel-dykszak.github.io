import {Link} from "react-router-dom";
import {FunctionComponent} from "react";
import {Event} from "../../domain/event";

export type EventDetailsBreadcrumbProps = {
    event: Event
}
export const EventDetailsBreadcrumb: FunctionComponent<EventDetailsBreadcrumbProps> =
    ({event}) => {
        return <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link title={"Home"} to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link title={`Category ${event.category}`} to={`/event-category/${event.category}`}>
                        {event.category}
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {event.title}
                </li>
            </ol>
        </nav>;
    };