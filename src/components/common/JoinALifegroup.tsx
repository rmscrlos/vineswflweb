import { fetchImageByTitle } from "@/app/api/images";
import Image from "next/image";
import { urlForImage } from "sanity/lib/image";
import CtaLink from "./CtaLink";

async function JoinALifegroup() {
	const { mainImage: lifeGroupImage } = await fetchImageByTitle("lifegroups");
	const lifeGroupImageUrl = urlForImage(lifeGroupImage);

	return (
		<div className="relative text-black/30 h-[450px] rounded-md flex justify-center items-center font-semibold">
			<div className="absolute w-full h-[450px] bg-gradient-to-b from-transparent to-black opacity-75 z-[1] rounded-md" />
			<Image
				className="rounded-md"
				fill
				style={{ objectFit: "cover" }}
				priority
				src={lifeGroupImageUrl}
				alt={`LifeGroup Image`}
			/>
			<div className="z-10 absolute bottom-5 left-5">
				<h3 className="text-white text-3xl">This is Church. Anywhere!</h3>

				<p className="text-white text-md font-light mb-2">
					Church happens in small groups!
				</p>

				<div className="flex items-center gap-2">
					<CtaLink
						linkTitle="Join A LifeGroup"
						href="https://vineswfl.churchcenter.com/groups"
						className="text-white bg-vinegreen rounded-md px-5 py-2 lg:text-lg"
					/>
				</div>
			</div>
		</div>
	);
}

export default JoinALifegroup;
