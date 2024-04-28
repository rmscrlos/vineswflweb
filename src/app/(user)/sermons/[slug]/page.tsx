"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactPlayer from "react-player";
import { PortableText } from "@portabletext/react";
import { HelpingHand } from "lucide-react";

import { SermonType, fetchSermonBySlug } from "@/app/api/sermons";
import { Skeleton } from "components/ui/skeleton";
import ShareSermon from "components/common/ShareSermon";

function SermonPage() {
	const [sermon, setSermon] = useState<SermonType | null>(null);
	const { slug } = useParams();
	const publishedDate = new Date(sermon?.publishedAt || "").toLocaleDateString(
		"en-US",
		{ year: "numeric", month: "long", day: "numeric" }
	);

	const sermonUrl = `https://www.vineswfl.church/sermons/${slug}`;

	useEffect(() => {
		fetchSermonBySlug(slug).then((res: any) => setSermon(res));
	}, [slug]);

	return (
		<main className="flex min-h-screen flex-col pb-14 mx-4 lg:max-w-6xl lg:mx-auto">
			{sermon ? (
				<div>
					<div className="overflow-hidden rounded-lg mb-2 h-[360px] lg:h-[600px]">
						<ReactPlayer
							url={sermon.videoLink}
							controls
							width="100%"
							height="100%"
						/>
					</div>

					<div className="flex flex-col mb-6">
						<h3 className="text-2xl font-medium">{sermon?.title}</h3>
						<p className="text-xs font-medium text-white/50">{publishedDate}</p>
					</div>
					<div className="text-sm font-light">
						{sermon.body && <PortableText value={sermon.body} />}
					</div>
				</div>
			) : (
				<div>
					<div className="mb-4">
						<Skeleton className="w-[358px] h-[360px] rounded-md md:w-full md:h-[600px]" />
					</div>
					<div className="flex flex-col gap-2 mb-10">
						<Skeleton className="w-[200px] h-6 rounded-md" />
						<Skeleton className="w-[100px] h-4 rounded-md" />
					</div>

					<div className="text-sm font-light flex flex-col gap-2">
						<Skeleton className="w-full h-4 rounded-md" />
						<Skeleton className="w-full h-4 rounded-md" />
						<Skeleton className="w-full h-4 rounded-md" />
					</div>
				</div>
			)}

			<div className="my-10 flex items-center justify-center gap-10">
				<Link href="/give" className="flex items-center font-medium">
					<div className="flex items-center gap-2 flex-col">
						<HelpingHand size={30} />
						Give
					</div>
				</Link>

				<ShareSermon sermonTitle={sermon?.title} sermonUrl={sermonUrl} />
			</div>

			{sermon?.sermonSummary && (
				<div className="bg-white/[.1] rounded-md p-8 flex- justify-center items-center text-center lg:mx-auto lg:w-[40%]">
					<h3 className="mb-4 font-medium text-lg">
						Want to take what you&apos;ve learn from learned from this sermon to
						the next level?
					</h3>
					<Link
						className="bg-white text-darkbg px-4 py-2 rounded-md uppercase text-xs font-medium"
						href={sermon.sermonSummary}
					>
						View Discussion Questions
					</Link>
				</div>
			)}
		</main>
	);
}

export default SermonPage;
