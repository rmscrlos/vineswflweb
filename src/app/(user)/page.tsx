import Image from "next/image";
import Link from "next/link";
import {
	ChevronRight,
	ExternalLink,
	HelpingHand,
	Home as HomeIcon,
	Instagram,
	Route,
	UsersRound,
	Youtube,
} from "lucide-react";

import { urlForImage } from "../../../sanity/lib/image";
import { SermonType, fetchLatestSermon } from "@/api/sermons";
import { EventType, fetchEvents } from "@/api/events";
import Events from "@/components/Events";
import { fetchImageByTitle } from "@/api/images";
import QuickLinksCard from "@/components/QuickLinksCard";
import CtaLink from "@/components/CtaLink";

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
						<CtaLink
							className="bg-vinegreen text-white font-semibold w-full py-2 rounded-md lg:py-3 lg:w-3/4"
							linkTitle="Watch Now"
							href={`/sermons/${current}`}
						/>
						<CtaLink
							className="w-full py-2 font-semibold bg-white rounded-md lg:py-3 lg:w-3/4"
							href="/sermons"
							linkTitle="Other Sermons"
						/>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col items-center lg:flex-row lg:h-full lg:items-start lg:gap-10">
				<div className="w-[93%] my-10 lg:flex-1">
					<div className="mb-8">
						<h2 className="text-3xl text-left font-semibold mb-6">New Here?</h2>
						<div className="w-full flex">
							<Link
								className="rounded-lg border border-neutral-200 bg-white shadow w-full py-3 px-5 text-lg font-semibold flex items-center gap-2"
								href="https://vineswfl.churchcenter.com/people/forms/42333"
								target="_blank"
							>
								<span>
									<UsersRound />
								</span>
								Connect With Us
								<ChevronRight className="ml-auto" />
							</Link>
						</div>
					</div>
					<div>
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
				</div>

				<div className="flex w-[93%] flex-col items-center lg:my-10 lg:w-auto">
					<div className="mb-4 w-full">
						<QuickLinksCard
							title="Get Involved"
							description="See what God can do through you."
						>
							<div className="flex flex-col">
								<Link
									href="/give"
									className="flex items-center gap-2 mb-1 font-medium py-2 px-1 rounded-lg hover:bg-vinegreen/10"
								>
									<HelpingHand size={20} />
									Giving
								</Link>
								<Link
									href="https://vineswfl.churchcenter.com/groups"
									className="flex items-center justify-between mb-1 font-medium py-2 px-2 rounded-lg hover:bg-vinegreen/10"
								>
									<div className="flex items-center gap-2">
										<HomeIcon size={20} />
										LifeGroups
									</div>
									<ExternalLink size={18} className="opacity-40" />
								</Link>
								<Link
									href="/grow"
									className="flex items-center gap-2 font-medium  py-2 px-1 rounded-lg hover:bg-vinegreen/10"
								>
									<Route size={20} />
									Growth Track
								</Link>
							</div>
						</QuickLinksCard>
					</div>

					{/* COMMENTING THIS OUT FOR NOW UNTIL PAGES ARE MADE */}
					{/* <div className="w-full mb-4">
						<QuickLinksCard
							title="For Your Family"
							description="See what God can do through your family."
						>
							<div className="flex flex-col">
								<Link
									href="/vinekids"
									className="flex items-center justify-between mb-1 font-medium  py-2 px-1 rounded-lg hover:bg-vinegreen/10"
								>
									<div className="flex items-center gap-2">VineKids</div>
								</Link>
								<Link
									href="/enjoy"
									className="flex items-center gap-2 font-medium py-2 px-1 rounded-lg hover:bg-vinegreen/10"
								>
									Enjoy YTH
								</Link>
							</div>
						</QuickLinksCard>
					</div> */}

					<div className="w-full">
						<QuickLinksCard title="Follow On Social">
							<div className="flex flex-col">
								<Link
									href="https://www.youtube.com/@vineswfl.church"
									className="flex items-center justify-between mb-1 font-medium py-2 px-1 rounded-lg hover:bg-vinegreen/10"
								>
									<div className="flex items-center gap-2">
										<Youtube />
										YouTube
									</div>
									<ExternalLink size={20} className="opacity-40" />
								</Link>
								<Link
									href="https://www.instagram.com/vineswfl.church/"
									className="flex items-center justify-between font-medium py-2 px-1 rounded-lg hover:bg-vinegreen/10"
								>
									<div className="flex items-center gap-2">
										<Instagram />
										Instagram
									</div>
									<ExternalLink size={20} className="opacity-40" />
								</Link>
							</div>
						</QuickLinksCard>
					</div>
				</div>
			</div>
		</main>
	);
}
