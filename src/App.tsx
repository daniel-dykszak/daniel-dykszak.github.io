import "./index.scss";
import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import logo from "./logo.svg"
import {EventListPage} from "./events/components/event-list-page.component";
import {EventHomePage} from "./events/components/event-home-page.component";
import {EventDetailsPage} from "./events/components/event-details-page.component";

export default function App() {
    return (
        <HashRouter>
            <header className={"mx-5"}>
                <h1>
                    <img src={logo} alt="Event plus Logo" style={{width: "16rem", height: "10rem"}}/>
                </h1>
            </header>
            <main className={"mx-5"}>
                <Switch>
                    <Route exact path="/">
                        <EventHomePage />
                    </Route>
                    <Route path="/events">
                        <EventListPage />
                    </Route>
                    <Route path="/event-category/:category">
                        <EventListPage />
                    </Route>
                    <Route path="/event/:eventName">
                        <EventDetailsPage />
                    </Route>
                </Switch>
            </main>
        </HashRouter>
    );
}