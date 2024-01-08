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
			<SheetContent className="py-10 w-full">
				<div className="flex flex-col justify-center items-center gap-10 py-10 h-full">
					{navlinks.map((link: NavLink) => (
						<div key={link.name}>
							<Link href={link.path} className="font-semibold text-3xl">
								{link.name}
							</Link>
						</div>
					))}
				</div>
				<div className="flex justify-center items-center gap-14 text-sm text-black/30">
					<Link href="https://www.youtube.com/@vineswfl.church">YouTube</Link>
					<Link href="https://www.instagram.com/vineswfl.church/">
						Instagram
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
