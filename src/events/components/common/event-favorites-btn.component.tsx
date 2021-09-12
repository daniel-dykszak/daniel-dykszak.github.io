import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {Event} from "../../domain/event";
import {EventsAddToFavorites, EventsRemoveFromFavorites} from "../../redux/event-reducer";
import starRegularSVG from "../../../fontawesome/star-regular.svg";
import starSolidSVG from "../../../fontawesome/star-solid.svg";
type Props = {
    event: Event
    className? :string
}
export const EventFavoritesBtn:React.FunctionComponent<Props> = ({event, className}) => {
    const favList = useSelector<RootState, Set<string>>(
        state => state.events.favoriteIds
    );
    const dispatch = useDispatch<AppDispatch>();
    const isInFavorites = favList.has(event.id);
    const AddToFav = (event: Event) => dispatch(EventsAddToFavorites(event));
    const RemoveFromFav = (event: Event) => dispatch(EventsRemoveFromFavorites(event));
    const btnTitle = isInFavorites ? `Remove ${event.title} from favourites`:
        `Add ${event.title} to favourites`;
    return <>
        <button type="button"
            className={"btn btn-info " + className}
                onClick={() => isInFavorites ? RemoveFromFav(event): AddToFav(event)}
            title={btnTitle}>
            <img height={20} width={20} src={isInFavorites? starSolidSVG: starRegularSVG } alt=""/>
        </button>
    </>
}