import { client } from "../../../sanity/lib/client";

export type AnnouncementType = {
	_id: string;
	title: string;
	description: string;
	announcementColor: string;
	link: string;
	icon: string;
	iconSize: string;
};

export const getAnnouncements = async () => {
	const query = `*[_type == "ann" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
        _id,
        title,
        description,
        announcementColor,
		link,
        icon,
		iconSize,
    }`;

	const announcements = await client
		.fetch<AnnouncementType[]>(query)
		.then((res) => res)
		.catch((err) => {
			console.log(err);
			throw new Error("Failed to fetch announcements");
		});

	return announcements;
};
