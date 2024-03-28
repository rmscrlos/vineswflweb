import {
	AnnouncementColors,
	IconSize,
	Sizes,
} from "common/announcement/Announcement.type";

export const baseClasses =
	"flex justify-left items-center gap-3 p-4 rounded-lg border-2";

export const titleSizes: Sizes = {
	small: "text-md",
	medium: "text-lg",
	large: "text-xl",
};

export const descriptionSizes: Sizes = {
	small: "text-xs",
	medium: "text-sm",
	large: "text-md",
};

export const iconSizes: IconSize = {
	small: 18,
	medium: 24,
	large: 30,
};

export const backgroundClasses: AnnouncementColors = {
	info: "bg-vinegreen/10",
	warning: "bg-yellow-100/25",
};

export const borderColorClasses: AnnouncementColors = {
	info: "border-vinegreen",
	warning: "border-yellow-500",
};

export const textColors: AnnouncementColors = {
	info: "text-vinegreen",
	warning: "text-yellow-500",
};

export const iconColors: AnnouncementColors = {
	info: "#43bab6",
	warning: "#f59e0b",
};
