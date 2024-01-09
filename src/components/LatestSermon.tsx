import React from "react";
import Image from "next/image";

import { SermonType, fetchLatestSermon } from "@/api/sermons";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

const LatestSermon: React.FC = async () => {
	const {
		title,
		slug: { current },
		mainImage,
	}: SermonType = await fetchLatestSermon();
	const latestSermonImage = urlForImage(mainImage);
	return (
		<Link href={`/sermons/${current}`}>
			<div className="mx-4 relative w-[360px] h-[360px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] mb-8">
				<div className="absolute w-[360px] h-[360px] bg-gradient-to-b from-transparent to-black opacity-55 z-[1] rounded-md" />
				<Image
					className="rounded-md"
					style={{ objectFit: "cover" }}
					fill
					src={latestSermonImage}
					priority
					alt={`${title}'s image`}
				/>
				<div className="absolute bottom-0 z-[2] w-full p-4">
					<p className="text-white bg-white/[.3] rounded-xl font-light text-[.75rem] text-center w-[33%] py-0.5 mb-1">
						Latest Sermon
					</p>
					<h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
				</div>
				<div className="absolute bottom-0 z-[2] w-full p-4">
					<p className="text-white bg-white/[.3] rounded-xl font-semibold text-[.75rem] text-center w-[33%] py-0.5 mb-1">
						Latest Sermon
					</p>
					<h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default LatestSermon;
