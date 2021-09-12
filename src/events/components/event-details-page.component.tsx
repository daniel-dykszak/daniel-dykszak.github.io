import {EventDetailsBreadcrumb} from "./event-details/event-details-breadcrumb.component";
import {EventDetails, EventDetailsTypes} from "./common/event-details.component";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Event} from "../domain/event";
import {findEventById, getIdFromSlug} from "../domain/location-event.service";

export const EventDetailsPage = () => {
    const { eventName } = useParams<{eventName: string}>();
    const eventId = getIdFromSlug(eventName);
    const event = useSelector<RootState, Event | undefined>(
        state => findEventById(state.events.list, eventId)
    );
    return <>
        {event !== undefined && <>
                <EventDetailsBreadcrumb event={event}/>
                <EventDetails type={EventDetailsTypes.EXTENDED} event={event}/>
            </>
        }
    </>
}