import MobileMenu from "@/components/mobilemenu/MobileMenu";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center px-3 h-[6rem] shadow-[0px_1px_3px_0px_#00000024] bg-white">
			<h1>Vine Church</h1>
			<MobileMenu />
		</header>
	);
};

export default Header;
