import Image from "next/image";
import Link from "next/link";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { urlForImage } from "../../../../sanity/lib/image";
import LatestSermon from "@/components/LatestSermon";
import { fetchRecentSermons, SermonType } from "@/api/sermons";
import CtaLink from "@/components/CtaLink";

export default async function SermonsPage() {
	const recentSermons: SermonType[] = await fetchRecentSermons();

	return (
		<main className="flex min-h-screen flex-col pb-14 items-center lg:max-w-7xl lg:mx-auto">
			<div className="lg:w-full lg:h-[500px] lg:mb-10 flex lg:justify-center lg:gap-10">
				<LatestSermon />
				<div className="hidden lg:flex lg:flex-col lg:w-1/3 lg:justify-between">
					{recentSermons &&
						recentSermons
							.slice(0, 2)
							.map(
								({ title, _id, slug: { current }, mainImage }: SermonType) => (
									<div key={_id} className="">
										<Link href={`/sermons/${current}`} className="relative">
											<div className="w-full h-[235px] rounded-md transition-all duration-300 hover:-translate-y-1">
												<Image
													className="rounded-md"
													fill
													style={{ objectFit: "cover" }}
													src={urlForImage(mainImage)}
													alt={`${title}'s image`}
												/>
												<div className="absolute bottom-2 left-2">
													<h3 className="text-white text-xl">{title}</h3>
												</div>
											</div>
										</Link>
									</div>
								)
							)}
				</div>
			</div>

			<div className="w-[93%] mb-8 lg:hidden">
				<h3 className="font-semibold text-xl mb-4">Recent Sermons</h3>
				<Carousel>
					<CarouselContent className="w-full">
						{recentSermons &&
							recentSermons.map(
								({ title, _id, slug: { current }, mainImage }: SermonType) => (
									<CarouselItem
										key={_id}
										className="basis-10/12 ml-4 relative h-[200px] pl-0"
									>
										<Link href={`/sermons/${current}`}>
											<div className="absolute w-full h-[200px] bg-gradient-to-b from-transparent to-black opacity-75 z-[1] rounded-md" />

											<Image
												className="rounded-md"
												fill
												style={{ objectFit: "cover" }}
												src={urlForImage(mainImage)}
												alt={`${title}'s image`}
											/>

											<div className="z-10 absolute bottom-2 left-2">
												<h3 className="text-white text-xl">{title}</h3>
											</div>
										</Link>
									</CarouselItem>
								)
							)}
					</CarouselContent>
				</Carousel>
			</div>
			<div className="h-44 flex justify-center items-center">
				<CtaLink
					href="/sermons/all"
					className="bg-vinedarkgray text-white rounded-md py-2 px-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
					linkTitle="View All Sermons"
				/>
			</div>
		</main>
	);
}
