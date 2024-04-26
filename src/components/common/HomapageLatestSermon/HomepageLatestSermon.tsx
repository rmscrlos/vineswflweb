import { SermonType, fetchLatestSermon } from "@/app/api/sermons";
import Image from "next/image";
import { urlForImage } from "sanity/lib/image";
import CtaLink from "../CtaLink";

async function HomepageLatestSermon() {
	const {
		title,
		slug: { current },
		mainImage,
	}: SermonType = await fetchLatestSermon();
	const latestSermonImage = urlForImage(mainImage);

	return (
		<div className="relative w-[93%] h-[560px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:w-full lg:h-[700px]">
			<div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black opacity-55 z-[1] rounded-md" />
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
	);
}

export default HomepageLatestSermon;
