import Image from "next/image";

import giveTextGif from "@/lib/images/givetext.gif";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TextGivingDataType {
	id: number;
	number: string;
	description: string;
	example: string;
}

interface WaysToGiveType {
	title: string;
	link: string;
}

const waysToGiveData: WaysToGiveType[] = [
	{
		title: "Kindrid",
		link: "https://www.kindridgiving.com/App/Form/49349df5-7ef7-40b8-bff6-8540066588f9",
	},
	{
		title: "Paypal",
		link: "https://www.paypal.com/donate/?hosted_button_id=HW4LX5VZLYKDS",
	},

	{
		title: "Cash App",
		link: "https://cash.app/$vineftmyers?qr=1",
	},
];

const textGivingData: TextGivingDataType[] = [
	{
		id: 1,
		number: "1",
		description: "Text amount to 239-201-4883",
		example: "e.g. 10",
	},
	{
		id: 2,
		number: "2",
		description: `To categorize your gift add word "tithes" or "offering" after amount.`,
		example: "e.g. 10 tithes",
	},
];

export default function GivingPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between pb-14 max-w-sm px-2 lg:max-w-7xl mx-auto">
			<div className="bg-white flex justify-center items-center h-[400px] rounded-lg shadow-[rgba(67,_186,_182,_0.1)_0px_9px_30px] mb-10">
				<h1 className="text-center font-semibold text-xl px-4 text-vinegreen">
					See what God can do through your generosity.
				</h1>
			</div>

			<div className="my-10 text-center bg-white text-darkbg p-4 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
				<h3 className="font-semibold text-3xl mb-4">Online Giving</h3>
				<p className="mb-4">
					Simple and secure. Giving Online is the easiest and best way to give.
				</p>

				<div className="flex flex-col justify-center items-center">
					{waysToGiveData.map(({ title, link }: WaysToGiveType) => (
						<Link
							key={title}
							href={link}
							rel="noreferrer"
							className="bg-vinegreen text-white rounded-md px-5 py-2 mb-4 inline-block w-1/2 text-center"
						>
							{title}
						</Link>
					))}
				</div>
			</div>
			<div className="my-10 text-center bg-white text-darkbg p-4 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
				<h3 className="font-semibold text-3xl mb-4">Text Giving</h3>
				<p className="mb-4">
					Text giving uses industry-leading security to protect your personal
					information, and is never charged to your phone bill.
				</p>
				<Image className="rounded-lg" src={giveTextGif} alt="give text gif" />
				<div>
					{textGivingData.map(
						({ id, number, description, example }: TextGivingDataType) => (
							<div
								key={id + description}
								className="flex justify-between items-center gap-5"
							>
								<div className="bg-black/5 w-3/12 h-[4.5rem] font-bold text-[2rem] text-darkbg rounded-md flex justify-center items-center m-[1rem]">
									{number}
								</div>
								<div className="text-left w-3/4">
									<h4 className="text-sm font-bold">{description}</h4>
									<p className="text-lg">{example}</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</main>
	);
}
