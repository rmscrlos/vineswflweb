const sermonsSchema = {
	name: "sermon",
	title: "Sermons",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "videoLink",
			title: "Video Link",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "mainImage",
			title: "Main Image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (Rule: any) => Rule.required(),
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
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
			validation: (Rule: any) => Rule.required().max(500),
		},
		{
			title: "Sermon LifeGroup Summary",
			name: "sermonSummary",
			type: "file",
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
