import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function PodcastPage() {
	return (
		<main className="w-full lg:max-w-6xl lg:mx-auto">
			<section className="w-full py-12">
				<div className="container px-4 md:px-6">
					<div className="grid items-center gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<Image
							alt="Podcast Cover"
							className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
							height="600"
							src="/placeholder.svg"
							width="600"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									The Church Podcast
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Join us as we explore the teachings of the Bible and how they
									apply to our daily lives. Featuring insightful discussions and
									inspiring messages from our pastoral team.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12">
				<div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6 lg:gap-12">
					<Card>
						<CardContent className="space-y-3">
							<Image
								alt="Podcast Thumbnail"
								className="aspect-video overflow-hidden rounded-lg object-cover object-center"
								height="225"
								src="/placeholder.svg"
								width="400"
							/>
							<div className="space-y-1">
								<h3 className="text-lg font-semibold">
									The Power of Forgiveness
								</h3>
								<p className="text-gray-500 ">
									Discover the transformative power of forgiveness and how it
									can heal our relationships and set us free.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}

export default PodcastPage;
