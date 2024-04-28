import CtaLink from "@/components/common/CtaLink";
import { Card, CardContent } from "components/ui/card";

export default function GrowPage() {
	return (
		<main className="w-full min-h-screen max-w-4xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
			<div className="space-y-6">
				<div className="text-center mb-10">
					<h1 className="text-7xl text-shadow text-black font-bold tracking-tighter sm:text-4xl md:text-7xl">
						Growth Track
					</h1>
					<p className="mt-3 max-w-[700px] mx-auto md:text-xl dark:text-gray-400">
						Discover the next steps in your spiritual journey and unlock your
						full potential as a church member.
					</p>
				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
					<Card>
						<CardContent className="space-y-4 p-6">
							<div>
								<h3 className="text-xl font-bold">Baptism</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Explore the significance of baptism and take the first step in
									your faith journey.
								</p>
							</div>
							<CtaLink
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
								href="https://v0.dev/r/vlZB0DTt4pv"
								linkTitle="Learn More"
							/>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4 p-6">
							<div>
								<h3 className="text-xl font-bold">Maturity Course</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Deepen your understanding of the Christian faith and grow in
									spiritual maturity.
								</p>
							</div>
							<CtaLink
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
								href="https://v0.dev/r/vlZB0DTt4pv"
								linkTitle="Learn More"
							/>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4 p-6">
							<div>
								<h3 className="text-xl font-bold">
									Leadership Training Course
								</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Develop your leadership skills and prepare to serve in a
									leadership role within the church.
								</p>
							</div>
							<CtaLink
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
								href="https://v0.dev/r/vlZB0DTt4pv"
								linkTitle="Learn More"
							/>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="space-y-4 p-6">
							<div>
								<h3 className="text-xl font-bold">Vine School of Ministry</h3>
								<p className="text-gray-500 dark:text-gray-400">
									Dive deeper into your spiritual gifts and calling, and prepare
									for ministry.
								</p>
							</div>
							<CtaLink
								className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
								href="https://v0.dev/r/vlZB0DTt4pv"
								linkTitle="Learn More"
							/>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
}
