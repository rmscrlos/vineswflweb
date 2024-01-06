const graceAndPeace = {
	name: "gnp",
	title: "Grace&Peace",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "videoLink",
			title: "Video Link",
			type: "string",
		},
		{
			name: "audioLink",
			title: "Audio Link",
			type: "string",
		},
		{
			name: "leaderInstructions",
			title: "Leader Instructions",
			type: "blockContent",
		},
		{
			name: "lesson",
			title: "Lesson",
			type: "blockContent",
		},
	],

	preview: {
		select: {
			title: "title",
			staff: "staff.name",
			media: "mainImage",
		},
		prepare(selection: any) {
			const { staff } = selection;
			return Object.assign({}, selection, {
				subtitle: staff && `by ${staff}`,
			});
		},
	},
};

export default graceAndPeace;
