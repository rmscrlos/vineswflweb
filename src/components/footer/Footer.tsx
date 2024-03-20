import React from "react";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-vinedarkgray text-white py-6 px-8 lg:flex lg:items-center lg:justify-around  lg:h-[400px]">
			<div className="border-b-2 mb-6 lg:w-1/6">
				<h3 className="font-semibold text-4xl text-center mb-5">
					a church of overcomers
				</h3>
			</div>
			<div className="mb-4">
				<h3 className="font-semibold text-lg mb-2">Quick Links</h3>
				<ul className="text-md text-white/65 flex flex-col gap-1 font-light">
					<Link href="/about">About</Link>
					<Link href="/grow">Grow</Link>
					<Link href="/give">Give</Link>
				</ul>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold text-lg mb-2">Media</h3>
				<ul className="text-md text-white/65 flex flex-col gap-1 font-light">
					<Link href="/sermons">Sermons</Link>
					<Link href="#">Podcast</Link>
				</ul>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold text-lg mb-2">Follow Us</h3>
				<ul className="text-md text-white/65 flex items-center gap-4 font-light">
					<Link href="https://www.instagram.com/vineswfl.church/">
						<Instagram />
					</Link>
					<Link href="https://www.youtube.com/channel/UCkX2YX1Wq6pKtj6j4b8l3Xg">
						<Youtube size={30} />
					</Link>
				</ul>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold text-lg mb-2">When & Where</h3>
				<ul className="text-md text-white/65 flex flex-col gap-1 font-light">
					<li>Every Sunday at 10:30 AM EST</li>
					<li>7806 Collge Pkwy, Fort Myers, FL 33907</li>
				</ul>
			</div>
			<div className="mb-8">
				<h3 className="font-semibold text-lg mb-2">Contact</h3>
				<ul className="text-md text-white/65 flex flex-col gap-1 font-light">
					<Link href="mailto:adm@vineswfl.church" className="underline">
						adm@vineswfl.church
					</Link>
					<li>(239) 738-9780</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
