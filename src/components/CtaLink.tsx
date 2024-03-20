import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface CtaLinkProps {
	href: string;
	linkTitle: string;
	className?: string;
}

function CtaLink({ href, linkTitle, className }: CtaLinkProps) {
	return (
		<Link
			className={cn(
				"lg:transition-all lg:duration-300 lg:hover:-translate-y-1",
				className
			)}
			href={href}
		>
			{linkTitle}
		</Link>
	);
}

export default CtaLink;
