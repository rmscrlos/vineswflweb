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
		<NavigationMenu className="hover:text-black/55 dark:hover:text-white/55 transition-all ease-in-out duration-300 p-4">
			<NavigationMenuList>
				<NavigationMenuItem className="flex items-center gap-10">
					{navlinks.map((link: NavLink) => (
						<NavigationMenuLink
							className="hover:text-black dark:hover:text-white"
							key={link.name}
							href={link.path}
						>
							{link.name}
						</NavigationMenuLink>
					))}
					<NavigationMenuLink
						className="hidden lg:inline"
						href="/stream"
					></NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navbar;
