export interface AnnouncementType {
	_id: string;
	title: string;
	description: string;
	externalLinkName: string;
	externalLink: string;
	internalLinkName: string;
	internalLink: string;
	icon: string;
	iconSize: string;
}

export type AnnouncementColor = "info" | "warning";

export type Sizes = {
	[key: string]: string;
};

export type IconSize = {
	[key: string]: number;
};

export type AnnouncementColors = {
	[key: string]: string;
};
