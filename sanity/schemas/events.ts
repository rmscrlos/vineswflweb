const eventsSchema = {
	name: "events",
	title: "Events",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			title: "Start Date",
			name: "startDate",
			type: "datetime",
			options: {
				dateFormat: "YYYY-MM-DD",
				timeFormat: "HH:mm",
				timeStep: 15,
				calendarTodayLabel: "Today",
			},
		},
		{
			title: "End Date",
			name: "endDate",
			type: "datetime",
			options: {
				dateFormat: "YYYY-MM-DD",
				timeFormat: "HH:mm",
				timeStep: 15,
				calendarTodayLabel: "Today",
			},
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "externalLinkName",
			title: "External Link/Button Name",
			type: "string",
		},
		{
			name: "externalLink",
			title: "External Link",
			type: "string",
		},
		{
			name: "internalLinkName",
			title: "Internal Path/Button Name",
			type: "string",
		},
		{
			name: "internalLink",
			title: "Internal Path",
			type: "string",
		},
		{
			name: "icon",
			title: "Classes",
			type: "string",
		},
	],
};

export default eventsSchema;
