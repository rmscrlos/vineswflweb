"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import Navbar from "common/Navbar";
import MobileMenu from "components/mobilemenu/MobileMenu";

const Header: React.FC = () => {
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();
	useEffect(() => {
		if (theme === "dark" && !pathname.startsWith("/sermons/")) {
			setTheme("light");
		}
	}, [theme, setTheme, pathname]);
	return (
		<header className="flex justify-between items-center px-3 h-[6rem] lg:max-w-6xl lg:mx-auto lg:mb-4">
			<Link href="/">
				<h1 className="uppercase text-lg">
					Vine <span className="font-bold text-vinegreen">Church</span>
				</h1>
			</Link>
			<div className="hidden lg:block">
				<Navbar />
			</div>
			<div className="flex gap-4 items-center lg:hidden">
				<MobileMenu />
			</div>
		</header>
	);
};

export default Header;
