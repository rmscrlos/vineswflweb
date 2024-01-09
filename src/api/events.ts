import { Image } from "sanity";
import { client } from "../../sanity/lib/client";

export type EventType = {
	_id: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	mainImage: Image;
	internalLinkName: string;
	internalLink: string;
	externalLinkName: string;
	externalLink: string;
};

export const fetchEvents = async () => {
	const query = `*[_type == 'events']{
        _id,
        title,
        description,
        startDate,
        endDate,
        mainImage,
        internalLinkName,
        internalLink,
        externalLinkName,
        externalLink
  }`;

	const res: EventType[] = await client.fetch(query, {}, { cache: "no-cache" });

	const events = res.sort(
		(a: EventType, b: EventType) =>
			new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
	);

	return events;
};

export const deleteEvent = (event: EventType) => {
	if (
		(event.endDate &&
			new Date().getTime() >= new Date(event?.endDate).getTime()) ||
		new Date().getTime() >= new Date(event.startDate).getTime()
	) {
		console.log(event.title, event.endDate, event._id);
		client.delete(`${event._id}`);
	} else {
		return;
	}
};
