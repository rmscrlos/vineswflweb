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
		<main className="flex min-h-screen flex-col pb-14 items-center max-w-sm lg:max-w-7xl mx-auto">
			<div className="flex items-center justify-between w-full px-4 lg:px-14">
				<Link
					href="/sermons"
					className="flex items-center font-semibold text-sm"
				>
					<ChevronLeft size={16} />
					Back
				</Link>
				<h3 className="text-xl text-left text-nowrap">All Sermons</h3>
			</div>
			<div className="mt-8 lg:flex lg:flex-wrap lg:justify-center">
				{sermons &&
					sermons.map(({ title, _id, slug, mainImage }: SermonType) => (
						<Link
							key={_id}
							href={`/sermons/${slug?.current}`}
							className="flex items-center justify-between py-2 px-4 rounded-md"
						>
							<Card className="w-[23rem] h-[20rem] overflow-hidden">
								<CardContent className="relative h-[15rem]">
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
