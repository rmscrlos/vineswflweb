import { type SchemaTypeDefinition } from "sanity";

import announcements from "./schemas/announcements";
import blockContent from "./schemas/blockContent";
import events from "./schemas/events";
import graceandpeace from "./schemas/graceandpeace";
import images from "./schemas/images";
import series from "./schemas/series";
import sermons from "./schemas/sermons";
import sidebarLinks from "./schemas/sidebarLinks";
import staff from "./schemas/staff";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		announcements,
		blockContent,
		events,
		graceandpeace,
		images,
		series,
		sermons,
		sidebarLinks,
		staff,
	],
};
