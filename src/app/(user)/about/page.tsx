import Image from "next/image";

export default function AboutPage() {
	return (
		<main className="lg:max-w-6xl lg:mx-auto">
			<section className="bg-gray-100 py-20 dark:bg-gray-900">
				<div className="container mx-auto px-4 md:px-6">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
							Our Mission
						</div>
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight">
							Making disciples who make disciples
						</h2>
						<p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
							Our burden is to edify a church of overcomers where every member
							is a minister and every house an extension of the Church thereby
							conquering our generations to Christ through life-groups that
							multiply!
						</p>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl md:text-3xl font-bold mb-8">Our Beliefs</h2>
						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-bold mb-2">The Bible</h3>
								<p className="text-gray-600 dark:text-gray-400">
									We believe the Bible is the inspired, inerrant, and
									authoritative Word of God, and the final authority for all
									matters of faith and practice.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-2">The Trinity</h3>
								<p className="text-gray-600 dark:text-gray-400">
									We believe in one God, eternally existing in three persons:
									the Father, the Son, and the Holy Spirit, each equal in power
									and glory.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-bold mb-2">Salvation</h3>
								<p className="text-gray-600 dark:text-gray-400">
									We believe that salvation is a free gift of God, available to
									all who repent of their sins and put their faith in Jesus
									Christ as their Lord and Savior.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 py-20 dark:bg-gray-900">
				<div className="container mx-auto px-4 md:px-6">
					<div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
						<div>
							<Image
								alt="Pastor John Doe"
								className="rounded-lg object-cover"
								height={500}
								src="/placeholder.svg"
								style={{
									aspectRatio: "400/500",
									objectFit: "cover",
								}}
								width={400}
							/>
						</div>
						<div className="space-y-6">
							<div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
								Meet Our Pastor
							</div>
							<h2 className="text-3xl md:text-4xl font-bold">
								Pastor Raph Fernandes
							</h2>
							<p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
								Raphael Fernandes is the lead pastor and planter of Vine Church
								Southwest Florida, alongside his wife, Juliana. Pastor Raphael
								is an incredible teacher of the word, who values investing in
								the next generation, and is passionate for equipping leaders to
								become successful ministers.
							</p>
							<p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
								He is a man of humility, grace, peace, who walks in the power of
								the Spirit. Here, in Fort Myers, we have the privilege to learn
								from his preaching and teaching, but even more with how he lives
								a life representing the character of Christ and letting his life
								be his greatest message.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container mx-auto px-4 md:px-6">
					<div className="max-w-3xl mx-auto">
						<div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
							Life of the Church
						</div>
						<h2 className="text-3xl md:text-4xl font-bold mb-8">
							How we do life together
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<Image
									alt="Community Event"
									className="rounded-lg object-cover"
									height={400}
									src="/placeholder.svg"
									style={{
										aspectRatio: "600/400",
										objectFit: "cover",
									}}
									width={600}
								/>
								<p className="mt-4 text-gray-600 dark:text-gray-400">
									Our church regularly hosts life groups all Fort Myers,
									providing a space for people to connect and engage with one
									another as they share the word of God.
								</p>
							</div>
							<div>
								<Image
									alt="Food Drive"
									className="rounded-lg object-cover"
									height={400}
									src="/placeholder.svg"
									style={{
										aspectRatio: "600/400",
										objectFit: "cover",
									}}
									width={600}
								/>
								<p className="mt-4 text-gray-600 dark:text-gray-400">
									We love to gather together every Sunday to celebrate the
									goodness of God. We love to be together to worship, pray, and
									learn from the word of God.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
