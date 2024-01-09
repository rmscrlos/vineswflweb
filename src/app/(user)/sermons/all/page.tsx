import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { fetchSermons, SermonType } from "@/api/sermons";
import { urlForImage } from "../../../../../sanity/lib/image";

export default async function AllSermonsPage() {
	const sermons: SermonType[] = await fetchSermons();
	return (
		<main className="flex min-h-screen flex-col pb-14 items-center">
			<div className="flex items-center justify-between w-[93%]">
				<Link
					href="/sermons"
					className="w-[93%] flex items-center font-semibold text-sm"
				>
					<ChevronLeft size={16} />
					Back
				</Link>
				<h3 className="text-3xl w-fit text-nowrap">All Sermons</h3>
			</div>
			<div className="w-[93%] mt-8">
				{sermons &&
					sermons.map(({ title, _id, slug, mainImage }: SermonType) => (
						<Link
							key={_id}
							href={`/sermons/${slug?.current}`}
							className="flex items-center justify-between py-2 px-4 rounded-md"
						>
							<Card className="w-full overflow-hidden">
								<CardContent className="relative h-[12rem]">
									<Image
										fill
										priority
										style={{ objectFit: "cover" }}
										src={urlForImage(mainImage)}
										alt={`Sermon ${title}'s image`}
									/>
								</CardContent>
								<CardFooter className="p-4">
									<h3 className="text-xl">{title}</h3>
								</CardFooter>
							</Card>
						</Link>
					))}
			</div>
		</main>
	);
}
