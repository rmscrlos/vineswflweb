"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

import navlinks, { NavLink } from "@/components/header/navlinks";

const Navbar: React.FC = () => {
	return (
		<NavigationMenu className="hover:text-black/55 transition-all ease-in-out duration-300 p-4">
			<NavigationMenuList>
				<NavigationMenuItem className="flex items-center gap-10">
					{navlinks.map((link: NavLink) => (
						<NavigationMenuLink
							className="hover:text-black"
							key={link.name}
							href={link.path}
						>
							{link.name}
						</NavigationMenuLink>
					))}
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navbar;
