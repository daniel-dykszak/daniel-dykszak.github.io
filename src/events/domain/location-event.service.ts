import {Event} from "./event";

export const findEventById = (list: Event[], eventId: string): Event | undefined => {
    return list.find(e => e.id === eventId);
}

export const getEventSlug = (event: Event): string => {
    const titleForUrl = event.title.replace(/\s/g, "-")
    return `${event.id}-${titleForUrl}`
}

export const getIdFromSlug = (slug: string): string => {
    return slug.split("-")[0];
}

export const filterEventsByCategory = (
    events: Event[],
    category: string,
    favoritesIds: Set<string>): Event[] => {
    return events.filter((event) => {
        if (!category) return true;
        if (category === "favorites") return favoritesIds.has(event.id);
        return event.category === category;
    });
}
