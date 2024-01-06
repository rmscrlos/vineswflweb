const Images = {
	name: "Images",
	title: "Images",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
					options: {
						isHighlighted: true, // <-- make this field easily accessible
					},
				},
				{
					// Editing this field will be hidden behind an "Edit"-button
					name: "attribution",
					type: "string",
					title: "Attribution",
				},
			],
		},
		{
			name: "mobileImage",
			title: "Mobile image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
					options: {
						isHighlighted: true, // <-- make this field easily accessible
					},
				},
				{
					// Editing this field will be hidden behind an "Edit"-button
					name: "attribution",
					type: "string",
					title: "Attribution",
				},
			],
		},
	],
};

export default Images;
