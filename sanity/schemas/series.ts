const series = {
	name: "series",
	title: "Series",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			title: "Selected",
			name: "selected",
			type: "boolean",
			initialValue: false,
		},
	],
};

export default series;
