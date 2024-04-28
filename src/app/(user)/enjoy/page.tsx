import Image from "next/image";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function EnjoyPage() {
	return (
		<main className="lg:max-w-6xl lg:mx-auto">
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-2">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl text-[#7920FA] text-shadow-enjoy font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Enjoy YTH
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl">
									We are a vibrant youth group dedicated to fostering a
									community of faith, fellowship, and fun. Our mission is to
									empower young people to grow in their relationship with God
									and to make a positive impact in their lives and the world
									around them.
								</p>
							</div>
						</div>
						<Image
							alt="Hero"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
							src="/enjoypurple.png"
							width={500}
							height={500}
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="space-y-4">
						<div className="space-y-2">
							<h2 className="text-[#7920FA] text-shadow-enjoy text-3xl font-bold tracking-tighter sm:text-4xl">
								Upcoming Events
							</h2>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
								Check out our upcoming youth group events and join us for a time
								of fellowship, worship, and fun.
							</p>
						</div>
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<Link href="#">
								<Card className="h-full w-full">
									<CardHeader>
										<CardTitle>Youth Retreat</CardTitle>
										<CardDescription>
											Join us for a weekend of spiritual renewal and outdoor
											adventure.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col gap-1">
											<div className="text-sm font-medium text-gray-500">
												June 10-12, 2023
											</div>
											<p className="text-sm text-gray-500">
												Spend a weekend away from the distractions of everyday
												life and focus on your relationship with God.
											</p>
										</div>
									</CardContent>
								</Card>
							</Link>
							<Link href="#">
								<Card className="h-full w-full">
									<CardHeader>
										<CardTitle>Game Night</CardTitle>
										<CardDescription>
											Join us for a night of friendly competition and laughter.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col gap-1">
											<div className="text-sm font-medium text-gray-500">
												July 15, 2023
											</div>
											<p className="text-sm text-gray-500">
												Bring your favorite board games and snacks for a night
												of fun and fellowship.
											</p>
										</div>
									</CardContent>
								</Card>
							</Link>
							<Link href="#">
								<Card className="h-full w-full">
									<CardHeader>
										<CardTitle>Serve the City</CardTitle>
										<CardDescription>
											Join us as we serve our local community and make a
											difference.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col gap-1">
											<div className="text-sm font-medium text-gray-500">
												August 20, 2023
											</div>
											<p className="text-sm text-gray-500">
												We&apos;ll be volunteering at a local food bank and
												helping to beautify a neighborhood park.
											</p>
										</div>
									</CardContent>
								</Card>
							</Link>
							<Link href="#">
								<Card className="h-full w-full">
									<CardHeader>
										<CardTitle>Worship Night</CardTitle>
										<CardDescription>
											Join us for an evening of worship, prayer, and fellowship.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col gap-1">
											<div className="text-sm font-medium text-gray-500">
												September 2, 2023
											</div>
											<p className="text-sm text-gray-500">
												Come together with other young believers to lift up the
												name of Jesus.
											</p>
										</div>
									</CardContent>
								</Card>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
