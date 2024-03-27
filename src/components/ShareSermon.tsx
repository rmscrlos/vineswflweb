import React, { useState } from "react";
import Link from "next/link";

import {
	Drawer,
	DrawerClose,
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
	Share,
	Twitter,
	Youtube,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DialogClose } from "@radix-ui/react-dialog";

interface ShareSermonProps {
	sermonTitle: string | undefined;
	sermonUrl?: string | undefined;
}

function ShareSermon({ sermonTitle, sermonUrl }: ShareSermonProps) {
	const [open, setOpen] = useState(false);
	const { toast } = useToast();

	const isDesktop = useMediaQuery("(min-width: 768px)");
	const isNavigator = typeof navigator.share !== "undefined";
	const facebookShare = `https://www.facebook.com/sharer.php?u=${sermonUrl}`;
	const twitterShare = `https://twitter.com/intent/post?text=Watch "${sermonTitle}" from Vines Church.&url=${sermonUrl}`;

	const handleCopy = async () => {
		if (navigator.share) {
			await navigator.share({
				url: window.location.href,
			});
		} else {
			navigator.clipboard.writeText(window.location.href);
			setOpen(false);
			toast({
				description: "Sermon link has been copied! 🎉",
			});
		}
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
							<DialogDescription className="flex items-center gap-8">
								<DialogClose>
									<Link
										href={twitterShare}
										className="flex items-center border-white/[.3] border rounded-full p-3"
										target="_blank"
									>
										<Twitter size={26} />
									</Link>
								</DialogClose>
								<DialogClose>
									<Link
										href={facebookShare}
										className="flex items-center border-white/[.3] border rounded-full p-3"
										target="_blank"
									>
										<Facebook size={26} />
									</Link>
								</DialogClose>
								<DialogClose
									onClick={handleCopy}
									className="flex items-center border-white/[.3] border rounded-full p-3"
								>
									{!isNavigator ? <Files size={26} /> : <Share size={26} />}
								</DialogClose>
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
									target="_blank"
								>
									<Youtube />
								</Link>
								<Link
									href="https://www.instagram.com/vineswfl.church/"
									className="flex items-center border-white/[.3] border rounded-full p-3"
									target="_blank"
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
						<DrawerDescription className="flex items-center gap-8">
							<DrawerClose>
								<Link
									href={twitterShare}
									className="flex items-center border-white/[.3] border rounded-full p-3"
								>
									<Twitter size={26} />
								</Link>
							</DrawerClose>
							<DrawerClose>
								<Link
									className="flex items-center border-white/[.3] border rounded-full p-3"
									href={facebookShare}
								>
									<Facebook size={26} />
								</Link>
							</DrawerClose>
							<DrawerClose
								onClick={handleCopy}
								className="flex items-center border-white/[.3] border rounded-full p-3"
							>
								<Files size={26} />
							</DrawerClose>
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
