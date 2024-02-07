import MobileMenu from "@/components/mobilemenu/MobileMenu";
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center px-3 h-[6rem]">
			<Link href="/">
				<h1 className="uppercase text-lg">
					Vine <span className="font-bold">Church</span>
				</h1>
			</Link>
			<MobileMenu />
		</header>
	);
};

export default Header;
