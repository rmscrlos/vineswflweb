import MobileMenu from "@/components/mobilemenu/MobileMenu";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center px-3 h-[6rem]">
			<h1>Vine Church</h1>
			<MobileMenu />
		</header>
	);
};

export default Header;
