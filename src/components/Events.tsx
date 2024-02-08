"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { EventType, deleteEvent } from "@/api/events";
import { displayDate } from "@/lib/utils";
import { urlForImage } from "../../sanity/lib/image";

interface EventsProps {
	events: EventType[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
	useEffect(() => {
		if (events[0]) {
			deleteEvent(events[0]);
		}
	}, [events]);
	return (
		<div className="my-10 hidden lg:block">
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
						<div key={_id} className="relative h-[450px] mb-8">
							<div className="absolute w-full h-[450px] bg-gradient-to-b from-transparent to-black opacity-75 z-[1] rounded-md" />

							<Image
								className="rounded-md"
								fill
								style={{ objectFit: "cover" }}
								priority
								src={urlForImage(mainImage)}
								alt={`${title}'s image`}
							/>

							<div className="z-10 absolute bottom-5 left-5">
								<h3 className="text-white text-xl lg:text-3xl">{title}</h3>
								{(startDate || endDate) && (
									<p className="text-white text-md font-light mb-2">
										{displayDate(startDate, endDate)}{" "}
										{description && ` | ${description}`}
									</p>
								)}
								<div className="flex items-center gap-2">
									{externalLink && internalLink ? (
										<>
											<Link
												href={`/${internalLink}`}
												className="text-white bg-vinegreen rounded-md px-5 py-2 lg:text-lg"
											>
												{internalLinkName}
											</Link>
											<Link
												href={externalLink}
												className="text-black bg-white rounded-md px-5 py-2 lg:text-lg"
											>
												{externalLinkName}
											</Link>
										</>
									) : internalLink ? (
										<Link
											href={`/${internalLink}`}
											className="text-white bg-vinegreen rounded-md px-5 py-2 lg:text-lg"
										>
											{internalLinkName}
										</Link>
									) : externalLink ? (
										<Link
											href={externalLink}
											className="text-white bg-vinegreen rounded-md px-5 py-2 lg:text-lg"
										>
											{externalLinkName}
										</Link>
									) : null}
								</div>
							</div>
						</div>
					)
				)}
		</div>
	);
};

export default Events;
