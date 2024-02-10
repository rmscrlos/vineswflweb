import MobileMenu from "@/components/mobilemenu/MobileMenu";
import Link from "next/link";
import Navbar from "../Navbar";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center px-3 h-[6rem] lg:max-w-7xl lg:mx-auto">
			<Link href="/">
				<h1 className="uppercase text-lg">
					Vine <span className="font-bold text-vinegreen">Church</span>
				</h1>
			</Link>
			<div className="hidden lg:block">
				<Navbar />
			</div>
			<div className="sm:hidden">
				<MobileMenu />
			</div>
		</header>
	);
};

export default Header;
