"use client";

import Image from "next/image";
import Link from "next/link";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { EventType, deleteEvent } from "@/api/events";
import { urlForImage } from "../../sanity/lib/image";
import { cn, displayDate } from "@/lib/utils";
import { useEffect } from "react";

interface EventsCarouselProps {
	events: EventType[];
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events }) => {
	useEffect(() => {
		if (events[0]) {
			deleteEvent(events[0]);
		}
	}, [events]);

	return (
		<div className="w-[93%] my-10">
			<h2 className="text-3xl text-left font-semibold mb-6">Events</h2>
			<Carousel>
				<CarouselContent className="w-full">
					{events &&
						events.map(
							({
								_id,
								title,
								mainImage,
								startDate,
								endDate,
								description,
								externalLink,
								externalLinkName,
								internalLink,
								internalLinkName,
							}: EventType) => (
								<CarouselItem
									key={_id}
									className={cn("basis-11/12 ml-4 relative h-[250px] pl-0", {
										"basis-[100%]": events.length === 1,
									})}
								>
									<div className="absolute w-full h-[250px] bg-gradient-to-b from-transparent to-black opacity-75 z-[1] rounded-md" />

									<Image
										className="rounded-md"
										fill
										src={urlForImage(mainImage)}
										alt={`${title}'s image`}
									/>

									<div className="z-10 absolute bottom-2 left-2">
										<h3 className="text-white text-xl">{title}</h3>
										{(startDate || endDate) && (
											<p className="text-white text-sm font-light mb-2">
												{displayDate(startDate, endDate)}{" "}
												{description && ` | ${description}`}
											</p>
										)}
										<div className="flex items-center gap-2">
											{externalLink && internalLink ? (
												<>
													<Link
														href={`/${internalLink}`}
														className="text-white bg-vinegreen rounded-sm px-4 py-1"
													>
														{internalLinkName}
													</Link>
													<Link
														href={externalLink}
														className="text-black bg-white rounded-sm px-4 py-1"
													>
														{externalLinkName}
													</Link>
												</>
											) : internalLink ? (
												<Link
													href={`/${internalLink}`}
													className="text-white bg-vinegreen rounded-sm px-5 py-1"
												>
													{internalLinkName}
												</Link>
											) : externalLink ? (
												<Link
													href={externalLink}
													className="text-white bg-vinegreen rounded-sm px-4 py-1"
												>
													{externalLinkName}
												</Link>
											) : null}
										</div>
									</div>
								</CarouselItem>
							)
						)}
					{!Object.keys(events).length && (
						<CarouselItem className="text-black/30 h-[250px] bg-gray-500/15 rounded-md flex justify-center items-center font-semibold ml-4">
							No new events..
						</CarouselItem>
					)}
				</CarouselContent>
				<CarouselPrevious className="hidden" />
				<CarouselNext className="hidden" />
			</Carousel>
		</div>
	);
};

export default EventsCarousel;
