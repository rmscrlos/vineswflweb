import React, { useState } from "react";
import Link from "next/link";

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
	Facebook,
	Files,
	Instagram,
	MoreHorizontal,
	Twitter,
	Youtube,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ShareSermonProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

function ShareSermon() {
	const [open, setOpen] = useState(false);

	const isDesktop = useMediaQuery("(min-width: 768px)");

	const handleCopy = () => {
		navigator.clipboard.writeText(window.location.href);
		setOpen(false);
	};

	if (isDesktop) {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="outline"
						className="flex items-center gap-2 flex-col h-fit rounded-full p-2 border-2 "
					>
						<MoreHorizontal />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader className="text-left flex flex-col gap-10">
						<div>
							<div className="mb-4">
								<DialogTitle className="text-xl">Share</DialogTitle>
								<p className="text-xs text-white/[.7]">
									Share on your social medias or copy the link
								</p>
							</div>
							<DialogDescription>
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
							</DialogDescription>
						</div>
						<div>
							<div className="mb-4">
								<DialogTitle className="text-xl">Follow us</DialogTitle>
								<p className="text-xs text-white/[.7]">
									Follow us on our social medias
								</p>
							</div>
							<DialogDescription className="flex items-center gap-8">
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
							</DialogDescription>
						</div>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		);
	}

	return (
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
	);
}

export default ShareSermon;
