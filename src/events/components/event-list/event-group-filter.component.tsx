import {ChangeEvent, FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {Event} from "../../domain/event";
import {getCategoryFromEvents} from "../../domain/event-category.service";
import {NavLink, useHistory, useParams} from "react-router-dom";
import {filterEventsByCategory} from "../../domain/location-event.service";

export const EventGroupFilter = () => {
    const events = useSelector<RootState, Event[]>(state => state.events.list);
    const favoriteIds = useSelector<RootState, Set<string>>(state => state.events.favoriteIds);
    const categoryList = getCategoryFromEvents(events);
    const {category} = useParams<{category: string}>()
    return <div className={"my-2"}>
        <div className={"d-block d-sm-none"}>
            <EventGroupListSelectFilter categories={categoryList} selectedCategory={category}/>
        </div>
        <div className={"d-none d-sm-block"}>
            <EventGroupListBtnFilter categories={categoryList}
                                     selectedCategory={category}
                                     events={events}
                                     favoriteIds={favoriteIds}/>
        </div>
    </div>
}

type EventGroupListFilterProps = {categories: string[], selectedCategory?: string}
    export const EventGroupListSelectFilter: FC<EventGroupListFilterProps> = ({categories, selectedCategory}) => {
    const {push} = useHistory()
    const onChange = (ev: ChangeEvent<HTMLSelectElement>) => {
        const newSelectedCategory = ev.target.value;
        if (newSelectedCategory === "All") {
            push("/events/");
        } else {
            push("/event-category/" + newSelectedCategory);
        }
    }
    return <div className={"d-flex flex-column"}>
        <label htmlFor="eventGroupFilter" className="form-label">Filter By Category:</label>
        <select className="form-select" id={"eventGroupFilter"} onChange={onChange} value={selectedCategory}>
            {<option>All</option>}
            {<option key={"Favorites"} value={"favorites"}>Favorites</option>}
            {categories.map((category) => {
                    return <option value={category} key={category}>
                        {category}
                    </option>
                })};
        </select>
    </div>
};
type EventGroupListBtnFilterProps = {
    categories: string[],
    selectedCategory?: string,
    events: Event[]
    favoriteIds: Set<string>
}
export const EventGroupListBtnFilter: FC<EventGroupListBtnFilterProps> = ({
        categories,
        events,
        selectedCategory,
        favoriteIds}) => {

    return <div className={"d-flex flex-row"}>
        <span className={"me-3"}>Filter by Category: </span>
        <NavLink to={"/events/"} activeClassName={"btn-primary"}
                 className={`btn ${!! selectedCategory ? 'btn-outline-dark': ""} position-relative`}>
            All
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {events.length}
                <span className="visually-hidden">items in category</span>
            </span>
        </NavLink>
        <NavLink to={"/event-category/favorites"}
                 className={`ms-3 btn ${selectedCategory !== 'favorites' ? 'btn-outline-dark': ""} position-relative`}
                 activeClassName={"btn-primary"}>
            Favorites
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {favoriteIds.size}
                <span className="visually-hidden">favorite items</span>
            </span>
        </NavLink>
        {categories.map(category =>
            <NavLink key={category} to={"/event-category/" + category} activeClassName={"btn-primary"}
                     className={`btn position-relative ${selectedCategory !== category ? 'btn-outline-dark': ""} ms-3`}
            >
                {category}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {filterEventsByCategory(events, category || "", favoriteIds).length}
                    <span className="visually-hidden">favorite items</span>
            </span>
            </NavLink>
        )}
    </div>
};