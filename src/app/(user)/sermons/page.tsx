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

export default async function SermonsPage() {
	const recentSermons: SermonType[] = await fetchRecentSermons();

	return (
		<main className="flex min-h-screen flex-col pb-14 items-center">
			<LatestSermon />

			<div className="w-[93%] mb-8">
				<h3 className="font-semibold text-xl mb-4">Recent Sermons</h3>
				<Carousel>
					<CarouselContent className="w-full">
						{recentSermons &&
							recentSermons.map(
								({ title, _id, slug: { current }, mainImage }: SermonType) => (
									<CarouselItem
										key={_id}
										className="basis-10/12 ml-4 relative h-[150px] pl-0"
									>
										<Link href={`/sermons/${current}`}>
											<div className="absolute w-full h-[150px] bg-gradient-to-b from-transparent to-black opacity-75 z-[1] rounded-md" />

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
				<Link
					href="/sermons/all"
					className="bg-vinedarkgray text-white rounded-md py-2 px-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
				>
					View All Sermons
				</Link>
			</div>
		</main>
	);
}
