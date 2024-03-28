import { File, Image, TypedObject } from "sanity";
import { client } from "sanity/lib/client";

export type SermonType = {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	mainImage: Image;
	publishedAt?: string;
	videoLink?: string;
	body?: TypedObject;
	sermonSummary: string;
};

export const fetchSermons = async () => {
	const query = `*[_type == "sermon" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
		_id,
		title,
		slug,
		mainImage,
	}`;

	const sermons: SermonType[] = await client.fetch(
		query,
		{},
		{
			cache: "no-cache",
		}
	);

	return sermons;
};

export const fetchLatestSermon = async () => {
	const query = `*[_type == "sermon" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0] {
        _id,
        title,
        slug,
        mainImage,
    }`;

	const sermon: SermonType = await client.fetch(
		query,
		{},
		{ cache: "no-cache" }
	);
	return sermon;
};

export const fetchRecentSermons = async () => {
	const query = `*[_type == "sermon" && !(_id in path("drafts.**"))] | order(publishedAt desc)[1..5] {
		_id,
		title,
		slug,
		mainImage,
	}`;

	const sermons: SermonType[] = await client.fetch(
		query,
		{},
		{ cache: "no-cache" }
	);

	return sermons;
};

export const fetchSermonBySlug = async (
	slug: string | string[] | undefined
): Promise<SermonType> => {
	const query = `*[_type == "sermon" && !(_id in path("drafts.**")) && slug.current == "${slug}"] {
		title,
		videoLink,
		_id,
		publishedAt,
		mainImage,
		body,
		"sermonSummary": sermonSummary.asset->url
	}`;

	const sermon: SermonType = await client
		.fetch(query, { slug })
		.then((res) => res[0]);

	return sermon;
};
