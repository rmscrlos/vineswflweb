import CtaLink from "@/components/common/CtaLink";
import Image from "next/image";

export default function VineKidsPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between pb-14">
			<section className="w-full py-6 md:py-12">
				<div className="container grid-in-container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-2 text-center">
						<div className="space-y-2">
							<Image
								alt="VineKidz"
								className="mx-auto rounded-full"
								height="200"
								src="/placeholder.svg"
								style={{
									aspectRatio: "200/200",
									objectFit: "cover",
								}}
								width="200"
							/>
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none">
									VineKids
								</h1>
								<p className="text-gray-500">Sundays @ 10:30am</p>
							</div>
						</div>
						<div className="mx-auto max-w-prose space-y-4">
							<p className="text-base sm:text-xl md:text-2xl">
								Welcome to VineKids! We believe every child is a gift from God
								and we are committed to partnering with families to help kids
								know Jesus, grow in their relationship with Him, and share His
								love with others.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-6 md:py-12 bg-gray-200">
				<div className="container grid-in-container px-4 md:px-6">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="flex flex-col items-center justify-center space-y-4">
							<ChurchIcon className="h-12 w-12 text-gray-500" />
							<div className="space-y-2 text-center">
								<h3 className="text-xl font-bold">Bible-Based Teachings</h3>
								<p className="text-gray-500">
									Our lessons are grounded in the truth of God&apos;s Word,
									helping children build a strong foundation of faith.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-4">
							<HeartIcon className="h-12 w-12 text-gray-500" />
							<div className="space-y-2 text-center">
								<h3 className="text-xl font-bold">Loving Environment</h3>
								<p className="text-gray-500">
									We strive to create a safe, nurturing space where children
									feel loved, accepted, and valued.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-4">
							<SmileIcon className="h-12 w-12 text-gray-500" />
							<div className="space-y-2 text-center">
								<h3 className="text-xl font-bold">Fun & Engaging</h3>
								<p className="text-gray-500">
									Our interactive lessons and activities make learning about God
									an enjoyable experience for kids.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-6 md:py-12">
				<div className="container grid-in-container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
								What to Expect
							</h2>
							<p className="text-gray-500">
								Here&apos;s a glimpse of what your child will experience at
								VineKidz.
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center justify-center space-y-4">
								<Image
									alt="Worship"
									className="rounded-full"
									height="200"
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width="200"
								/>
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Worship</h3>
									<p className="text-gray-500">
										Kids will engage in age-appropriate worship through music,
										dance, and creative expression.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4">
								<Image
									alt="Bible Lessons"
									className="rounded-full"
									height="200"
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width="200"
								/>
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Bible Lessons</h3>
									<p className="text-gray-500">
										Children will explore Bible stories and learn valuable
										lessons through interactive teaching.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4">
								<Image
									alt="Small Groups"
									className="rounded-full"
									height="200"
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width="200"
								/>
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Life Groups</h3>
									<p className="text-gray-500">
										Kids will connect weekly with their peers and leaders in a
										small-group setting for discussion and prayer.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-6 md:py-12 bg-gray-200">
				<div className="container grid-in-container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
								Meet Our Team
							</h2>
							<p className="text-gray-500">
								Our dedicated team of volunteers is passionate about ministering
								to kids.
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center justify-center space-y-4">
								<Image
									alt="John Doe"
									className="rounded-full"
									height="200"
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width="200"
								/>
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Juliana Fernandes</h3>
									<p className="text-gray-500">
										Children&apos;s Ministry Pastor
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4">
								<Image
									alt="Jane Smith"
									className="rounded-full"
									height="200"
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width="200"
								/>
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">John Ferreira</h3>
									<p className="text-gray-500">Worship Leader</p>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4">
								<Image
									alt="Bob Johnson"
									className="rounded-full"
									height="200"
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width="200"
								/>
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Adriana Almeida</h3>
									<p className="text-gray-500">Life Group Coordinator</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-6 md:py-12">
				<div className="container grid-in-container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
								Get Involved
							</h2>
							<p className="text-gray-500">
								There are many ways to serve and support the VineKidz ministry.
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center justify-center space-y-4">
								<HelpingHandIcon className="h-12 w-12 text-gray-500" />
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Volunteer</h3>
									<p className="text-gray-500">
										Join our team of dedicated volunteers and help shape the
										next generation.
									</p>
									<CtaLink
										className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
										href="#"
										linkTitle="Sign Up"
									/>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4">
								<GiftIcon className="h-12 w-12 text-gray-500" />
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Donate</h3>
									<p className="text-gray-500">
										Your financial support helps us provide engaging programs
										and resources for the children.
									</p>
									<CtaLink
										className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
										href="/give"
										linkTitle="Give Now"
									/>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center space-y-4">
								<ChurchIcon className="h-12 w-12 text-gray-500" />
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">Pray</h3>
									<p className="text-gray-500">
										Join us in lifting up the children, families, and volunteers
										of VineKidz in prayer.
									</p>
									<CtaLink
										className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
										href="#"
										linkTitle="Request Prayer"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

function ChurchIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
			<path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
			<path d="M18 22V5l-6-3-6 3v17" />
			<path d="M12 7v5" />
			<path d="M10 9h4" />
		</svg>
	);
}

function GiftIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="20 12 20 22 4 22 4 12" />
			<rect width="20" height="5" x="2" y="7" />
			<line x1="12" x2="12" y1="22" y2="7" />
			<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
			<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
		</svg>
	);
}

function HeartIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
		</svg>
	);
}

function HelpingHandIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19" />
			<path d="m2 14 6 6" />
		</svg>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

function SmileIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M8 14s1.5 2 4 2 4-2 4-2" />
			<line x1="9" x2="9.01" y1="9" y2="9" />
			<line x1="15" x2="15.01" y1="9" y2="9" />
		</svg>
	);
}
