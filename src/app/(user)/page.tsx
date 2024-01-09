import Image from "next/image";
import Link from "next/link";
import {
	ExternalLink,
	HelpingHand,
	Home as HomeIcon,
	Instagram,
	Route,
	Youtube,
} from "lucide-react";

import { urlForImage } from "../../../sanity/lib/image";
import { SermonType, fetchLatestSermon } from "@/api/sermons";
import { EventType, fetchEvents } from "@/api/events";
import EventsCarousel from "@/components/EventsCarousel";

export default async function Home() {
	const {
		title,
		slug: { current },
		mainImage,
	}: SermonType = await fetchLatestSermon();
	const latestSermonImage = urlForImage(mainImage);

	const events: EventType[] = await fetchEvents();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between pb-14">
			<div className="mx-4 relative w-[360px] h-[560px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
				<div className="absolute w-[360px] h-[560px] bg-gradient-to-b from-transparent to-black opacity-55 z-[1] rounded-md" />
				<Image
					className="rounded-md"
					style={{ objectFit: "cover" }}
					fill
					src={latestSermonImage}
					priority
					alt={`${title}'s image`}
				/>
				<div className="absolute bottom-0 z-[2] w-full p-4">
					<p className="text-white bg-white/[.3] rounded-xl font-semibold text-[.75rem] text-center w-[33%] py-0.5 mb-1">
						Latest Sermon
					</p>
					<h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
					<div className="flex flex-col justify-center items-center gap-2 text-center">
						<Link
							className="bg-vinegreen text-white font-semibold w-full py-2 rounded-md"
							href={`/sermons/${current}`}
						>
							Watch Now
						</Link>
						<Link
							className="w-full py-2 font-semibold bg-white rounded-md"
							href="/sermons"
						>
							Other Sermons
						</Link>
					</div>
				</div>
			</div>

			<EventsCarousel events={events} />

			<div className="flex flex-col px-4 py-4 justify-center gap-4 bg-white w-[93%] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_10px_16px] mb-6">
				<div>
					<h3 className="text-xl font-semibold">Get Involved</h3>
					<p className="text-black/40">See what God can do through you.</p>
				</div>
				<div className="flex flex-col">
					<Link
						href="/giving"
						className="flex items-center gap-2 mb-6 font-medium"
					>
						<HelpingHand size={20} />
						Giving
					</Link>
					<Link
						href="https://vineswfl.churchcenter.com/groups"
						className="flex items-center justify-between mb-6 font-medium"
					>
						<div className="flex items-center gap-2">
							<HomeIcon size={20} />
							LifeGroups
						</div>
						<ExternalLink size={18} className="opacity-40" />
					</Link>
					<Link href="/grow" className="flex items-center gap-2 font-medium">
						<Route size={20} />
						Growth Track
					</Link>
				</div>
			</div>

			<div className="flex flex-col px-4 py-4 justify-center gap-4 bg-white w-[93%] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_10px_16px] mb-6">
				<div>
					<h3 className="text-xl font-semibold">For Your Family</h3>
					<p className="text-black/40">
						See what God can do through your family.
					</p>
				</div>
				<div className="flex flex-col">
					<Link
						href="/vinekids"
						className="flex items-center justify-between mb-6 font-medium"
					>
						<div className="flex items-center gap-2">VineKids</div>
					</Link>
					<Link href="/enjoy" className="flex items-center gap-2 font-medium">
						Enjoy YTH
					</Link>
				</div>
			</div>

			<div className="flex flex-col px-4 py-4 justify-center gap-4 bg-white w-[93%] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_10px_16px]">
				<div>
					<h3 className="text-xl font-semibold">Follow On Social</h3>
				</div>

				<div className="flex flex-col">
					<Link
						href="https://www.youtube.com/@vineswfl.church"
						className="flex items-center justify-between mb-6 font-medium"
					>
						<div className="flex items-center gap-2">
							<Youtube />
							YouTube
						</div>
						<ExternalLink size={20} className="opacity-40" />
					</Link>
					<Link
						href="https://www.instagram.com/vineswfl.church/"
						className="flex items-center justify-between font-medium"
					>
						<div className="flex items-center gap-2">
							<Instagram />
							Instagram
						</div>
						<ExternalLink size={20} className="opacity-40" />
					</Link>
				</div>
			</div>
		</main>
	);
}
