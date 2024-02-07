"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
	Facebook,
	Files,
	Instagram,
	MoreHorizontal,
	Twitter,
	Youtube,
} from "lucide-react";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function SermonPage() {
	const [open, setOpen] = useState(false);
	const { setTheme } = useTheme();

	useEffect(() => {
		setTheme("dark");
		return () => setTheme("light");
	}, [setTheme]);

	const handleCopy = () => {
		navigator.clipboard.writeText("HELLO WORLD!");
	};

	return (
		<main className="flex min-h-screen flex-col pb-14 items-center">
			<h1>Sermon Page</h1>
			{/* Add your sermon content here */}

			<div className="my-10 flex items-center justify-center gap-10">
				<Link href="#" className="flex items-center font-medium">
					<div className="flex items-center gap-2 flex-col">
						<Youtube className="font-thin" size={36} />
						YouTube
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
								<DrawerDescription>
									<div className="flex items-center gap-8">
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
									</div>
								</DrawerDescription>
							</div>
						</DrawerHeader>
					</DrawerContent>
				</Drawer>
			</div>
		</main>
	);
}
