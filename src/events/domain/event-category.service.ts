import {Event} from "./event";

export const getCategoryFromEvents = (events: Event[]) => {
    const removeDuplicates = (el: string, index: number, arr: string[]) =>
        arr.indexOf(el) === index

    return events.map(event => event.category)
        .filter(removeDuplicates)
}