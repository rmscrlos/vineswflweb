export interface NavLink {
	name: string;
	path: string;
}

const navlinks = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Sermons",
		path: "/sermons",
	},
	{
		name: "Grow",
		path: "/grow",
	},
	{
		name: "Giving",
		path: "/giving",
	},
];

export default navlinks;
