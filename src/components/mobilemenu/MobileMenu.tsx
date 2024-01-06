import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

import navlinks, { NavLink } from "@/components/header/navlinks";

const MobileMenu: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu size={30} />
			</SheetTrigger>
			<SheetContent className="py-10">
				<div className="flex flex-col gap-5 py-10">
					{navlinks.map((link: NavLink) => (
						<div key={link.name} className="border-b-2 w-full ">
							<Link href={link.path} className="self-end w-full">
								{link.name}
							</Link>
						</div>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
