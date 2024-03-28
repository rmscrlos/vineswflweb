const announcements = {
	name: "ann",
	title: "Announcements",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: any) => Rule.required().warning("A title is required"),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule: any) =>
				Rule.required().warning("A description is required"),
		},
		{
			name: "link",
			title: "Link Url",
			type: "string",
		},
		{
			name: "announcementColor",
			title: "Announcement Color",
			type: "string",
			options: {
				list: [
					{ title: "Info", value: "info" },
					{ title: "Warning", value: "warning" },
				],
				layout: "radio",
			},
		},
		{
			name: "icon",
			title: "Icon",
			type: "string",
			options: {
				list: [
					{ title: "Info", value: "Info" },
					{ title: "Triangle Alert", value: "TriangleAlert" },
				],
			},
		},
		{
			name: "iconSize",
			title: "Icon Size",
			type: "string",
			options: {
				list: [
					{ title: "Small", value: "small" },
					{ title: "Medium", value: "medium" },
					{ title: "Large", value: "large" },
				],
				layout: "radio",
			},
		},
	],
};

export default announcements;
