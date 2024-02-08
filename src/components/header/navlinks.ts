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
		name: "Give",
		path: "/give",
	},
];

export default navlinks;
