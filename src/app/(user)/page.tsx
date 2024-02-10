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
import Events from "@/components/Events";
import { fetchImageByTitle } from "@/api/images";

export default async function Home() {
	const {
		title,
		slug: { current },
		mainImage,
	}: SermonType = await fetchLatestSermon();
	const latestSermonImage = urlForImage(mainImage);

	const events: EventType[] = await fetchEvents();

	const { mainImage: lifeGroupImage } = await fetchImageByTitle("lifegroups");
	const lifeGroupImageUrl = urlForImage(lifeGroupImage);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between pb-14 lg:max-w-6xl lg:mx-auto">
			<div className="mx-4 relative w-[360px] h-[560px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:w-full lg:h-[700px]">
				<div className="absolute w-[360px] h-[560px] bg-gradient-to-b from-transparent to-black opacity-55 z-[1] rounded-md lg:w-full lg:h-[700px]" />
				<Image
					className="rounded-md"
					style={{ objectFit: "cover" }}
					fill
					src={latestSermonImage}
					priority
					alt={`${title}'s image`}
				/>
				<div className="absolute bottom-0 z-[2] w-full p-4 lg:w-1/2 lg:bottom-4 lg:left-4">
					<p className="text-white bg-white/[.3] rounded-xl font-semibold text-[.75rem] text-center w-[33%] py-0.5 mb-1 lg:text-[.8rem]">
						Latest Sermon
					</p>
					<h2 className="text-3xl font-semibold text-white mb-2 lg:text-4xl">
						{title}
					</h2>
					<div className="flex flex-col justify-center items-center gap-2 text-center lg:flex-row lg:gap-4">
						<Link
							className="bg-vinegreen text-white font-semibold w-full py-2 rounded-md lg:py-3 lg:w-3/4 lg:transition-all lg:duration-300 lg:hover:-translate-y-1"
							href={`/sermons/${current}`}
						>
							Watch Now
						</Link>
						<Link
							className="w-full py-2 font-semibold bg-white rounded-md lg:py-3 lg:w-3/4 lg:transition-all lg:duration-300 lg:hover:-translate-y-1"
							href="/sermons"
						>
							Other Sermons
						</Link>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col items-center lg:flex-row lg:h-full lg:items-start lg:gap-20">
				<div className="w-[93%] my-10 lg:w-[80%]">
					<h2 className="text-3xl text-left font-semibold mb-6">Events</h2>
					{events && <Events events={events} />}

					{lifeGroupImageUrl && (
						<div className="relative text-black/30 h-[450px] rounded-md flex justify-center items-center font-semibold">
							<div className="absolute w-full h-[450px] bg-gradient-to-b from-transparent to-black opacity-75 z-[1] rounded-md" />
							<Image
								className="rounded-md"
								fill
								style={{ objectFit: "cover" }}
								priority
								src={lifeGroupImageUrl}
								alt={`${title}'s image`}
							/>
							<div className="z-10 absolute bottom-5 left-5">
								<h3 className="text-white text-3xl">
									This is Church. Anywhere!
								</h3>

								<p className="text-white text-md font-light mb-2">
									Church happens in small groups!
								</p>

								<div className="flex items-center gap-2">
									<Link
										href="https://vineswfl.churchcenter.com/groups"
										className="text-white bg-vinegreen rounded-md px-5 py-2 lg:text-lg lg:transition-all lg:duration-300 lg:hover:-translate-y-1"
									>
										Join A LifeGroup
									</Link>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="flex w-[93%] flex-col items-center lg:my-10 lg:w-auto">
					<div className="flex flex-col px-4 py-4 justify-center gap-4 bg-white w-[98%] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_10px_16px] mb-6">
						<div>
							<h3 className="text-xl font-semibold">Get Involved</h3>
							<p className="text-black/40">See what God can do through you.</p>
						</div>
						<div className="flex flex-col">
							<Link
								href="/give"
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
							<Link
								href="/grow"
								className="flex items-center gap-2 font-medium"
							>
								<Route size={20} />
								Growth Track
							</Link>
						</div>
					</div>

					<div className="flex flex-col px-4 py-4 justify-center gap-4 bg-white w-[98%] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_10px_16px] mb-6">
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
							<Link
								href="/enjoy"
								className="flex items-center gap-2 font-medium"
							>
								Enjoy YTH
							</Link>
						</div>
					</div>

					<div className="flex flex-col px-4 py-4 justify-center gap-4 bg-white w-[98%] rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_10px_16px]">
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
				</div>
			</div>
		</main>
	);
}
