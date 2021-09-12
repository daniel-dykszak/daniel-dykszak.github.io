import {Event} from "../../domain/event";
import {EventFavoritesBtn} from "./event-favorites-btn.component";
import {FunctionComponent} from "react";
import {GeolocationFromYou} from "../../../geolocation";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {Link} from "react-router-dom";
import {getEventSlug} from "../../domain/location-event.service";

export enum EventDetailsTypes {
    SIMPLE,
    EXTENDED
}
type EventDetailsProp = {
    event: Event,
    type: EventDetailsTypes
}
export const EventDetails: FunctionComponent<EventDetailsProp> = ({
    event,
    type
}) => {
    const hasUserCoords = useSelector<RootState, boolean>(state => !!state.geolocation.userLocation);
    return <article className={"card h-100"}>
        <h2 className={"card-header"}>
            <Link className={"link-primary me-4"}
                  title={`Go to event ${event.title} details`}
                  to={`/event/${getEventSlug(event)}`}>
                {event.title}
            </Link>
        </h2>
        <div className={"position-absolute top-0 end-0"}>
            <EventFavoritesBtn event={event} className={"m-1"} />
        </div>
        <div className="card-body">
            <h3 className="card-title">
                {type === EventDetailsTypes.EXTENDED && <address>
                    {event.location.address}
                </address>}
            </h3>
            <p className="card-text">{event.description}</p>
        </div>
        <footer className={"card-footer"}>
            {hasUserCoords && <GeolocationFromYou
                lat={parseFloat(event.location.lat)}
                lng={parseFloat(event.location.lng)}
                className="text-muted h4"/>}
            <Link to={"/event-category/" + event.category}
                  title={`check ${event.category} category`}
                  className={"float-end btn btn-dark"}>{event.category}</Link>
        </footer>
    </article>
}
