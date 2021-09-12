import {Link} from "react-router-dom";
import {FunctionComponent} from "react";

export const EventListBreadcrumb: FunctionComponent = () => {
    return <ul className={"breadcrumb breadcrumb-container"}>
        <li className={"breadcrumb-item"}>
            <Link title={"home"} to="/">Home</Link>
        </li>
        <li className={"breadcrumb-item breadcrumb-item__inactive"}>
            Event list
        </li>
    </ul>
}