import { Image } from "sanity";
import { client } from "../../sanity/lib/client";

export type SermonType = {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	mainImage: Image;
};

export const fetchLatestSermon = async () => {
	const query = `*[_type == "sermon"] | order(publishedAt desc)[0] {
        _id,
        title,
        slug,
        mainImage,
    }`;

	const sermon: SermonType = await client.fetch(query);

	return sermon;
};

export const fetchRecentSermons = async () => {
	const query = `*[_type == "sermon"] | order(publishedAt desc)[1..4] {
		_id,
		title,
		slug,
		mainImage,
	}`;

	const sermons: SermonType[] = await client.fetch(query);

	return sermons;
};
