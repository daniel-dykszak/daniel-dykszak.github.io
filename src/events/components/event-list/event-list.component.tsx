import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {Event} from "../../domain/event";
import {filterEventsByCategory} from "../../domain/location-event.service";
import {EventGroupFilter} from "./event-group-filter.component";
import {EventDetails, EventDetailsTypes} from "../common/event-details.component";

export const EventList = () => {
    const list = useSelector<RootState, Event[]>(state => state.events.list);
    const favoriteIds = useSelector<RootState, Set<string>>(state => state.events.favoriteIds);
    const {category} = useParams<{category: string}>();
    const filteredList = filterEventsByCategory(list, category, favoriteIds);
    return <section>
        <header>
            <EventGroupFilter/>
        </header>
        <div className={"container"}>
            <ul className={"row list-unstyled"}>
                {filteredList.map(event =>
                    <li className={"col-md-4 col-sm-6 mb-4"} key={event.id}>
                        <EventDetails type={EventDetailsTypes.SIMPLE} event={event} />
                    </li>
                )}
            </ul>
        </div>
        <footer className={"my-2 ms-1"}>Found {filteredList.length} events</footer>
    </section>
}