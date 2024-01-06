const sermonsSchema = {
	name: "sermon",
	title: "Sermons",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "videoLink",
			title: "Video Link",
			type: "string",
		},
		{
			name: "mainImage",
			title: "Main Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "mobileImage",
			title: "Mobile Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "series",
			title: "Series",
			type: "reference",
			to: [{ type: "series" }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			staff: "staff.name",
			media: "mainImage",
		},
		prepare(selection: { staff: any }) {
			const { staff } = selection;
			return Object.assign({}, selection, {
				subtitle: staff && `by ${staff}`,
			});
		},
	},
};

export default sermonsSchema;
