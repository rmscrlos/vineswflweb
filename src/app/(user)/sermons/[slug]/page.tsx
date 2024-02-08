"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactPlayer from "react-player";
import { PortableText } from "@portabletext/react";
import {
	Facebook,
	Files,
	Instagram,
	MoreHorizontal,
	Twitter,
	Youtube,
	HelpingHand,
} from "lucide-react";

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { SermonType, fetchSermonBySlug } from "@/api/sermons";
import { Skeleton } from "@/components/ui/skeleton";

export default function SermonPage() {
	const [open, setOpen] = useState(false);
	const [sermon, setSermon] = useState<SermonType | null>(null);
	const { setTheme } = useTheme();
	const { slug } = useParams();
	const publishedDate = new Date(sermon?.publishedAt || "").toLocaleDateString(
		"en-US",
		{ year: "numeric", month: "long", day: "numeric" }
	);

	useEffect(() => {
		setTheme("dark");
		return () => {
			setTheme("light");
		};
	}, [setTheme]);

	useEffect(() => {
		fetchSermonBySlug(slug).then((res: any) => setSermon(res[0]));
	}, [slug]);

	const handleCopy = () => {
		navigator.clipboard.writeText("HELLO WORLD!");
	};

	return (
		<main className="flex min-h-screen flex-col pb-14 mx-4">
			{sermon ? (
				<div>
					<div className="overflow-hidden rounded-lg mb-2">
						<ReactPlayer url={sermon.videoLink} controls width="100%" />
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
						<Skeleton className="w-[358px] h-[360px] rounded-md" />
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

				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center gap-2 flex-col h-fit rounded-full p-2 border-2 "
						>
							<MoreHorizontal />
						</Button>
					</DrawerTrigger>
					<DrawerContent className="">
						<DrawerHeader className="text-left flex flex-col gap-10">
							<div>
								<div className="mb-4">
									<DrawerTitle className="text-xl">Share</DrawerTitle>
									<p className="text-xs text-white/[.7]">
										Share on your social medias or copy the link
									</p>
								</div>
								<DrawerDescription>
									<div className="flex items-center gap-8">
										<Link
											href="#"
											className="flex items-center border-white/[.3] border rounded-full p-3"
										>
											<Twitter size={26} />
										</Link>
										<Link
											href="#"
											className="flex items-center border-white/[.3] border rounded-full p-3"
										>
											<Facebook size={26} />
										</Link>
										<button
											onClick={handleCopy}
											className="flex items-center border-white/[.3] border rounded-full p-3"
										>
											<Files size={26} />
										</button>
									</div>
								</DrawerDescription>
							</div>
							<div>
								<div className="mb-4">
									<DrawerTitle className="text-xl">Follow us</DrawerTitle>
									<p className="text-xs text-white/[.7]">
										Follow us on our social medias
									</p>
								</div>
								<DrawerDescription className="flex items-center gap-8">
									<Link
										href="https://www.youtube.com/@vineswfl.church"
										className="flex items-center border-white/[.3] border rounded-full p-3"
									>
										<Youtube />
									</Link>
									<Link
										href="https://www.instagram.com/vineswfl.church/"
										className="flex items-center border-white/[.3] border rounded-full p-3"
									>
										<Instagram />
									</Link>
								</DrawerDescription>
							</div>
						</DrawerHeader>
					</DrawerContent>
				</Drawer>
			</div>

			<div className="bg-white/[.1] rounded-md p-8 flex- justify-center items-center text-center">
				<h3 className="mb-4 font-medium text-lg">
					Want to take what you&apos;ve learn from learned from this sermon to
					the next level?
				</h3>
				<Link
					className="bg-white text-darkbg px-4 py-2 rounded-md uppercase text-xs font-medium"
					href="#"
				>
					View Discussion Questions
				</Link>
			</div>
		</main>
	);
}
