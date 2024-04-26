import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface QuickLinksCardProps {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

function QuickLinksCard({ title, description, children }: QuickLinksCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			{children && <CardContent>{children}</CardContent>}
		</Card>
	);
}

export default QuickLinksCard;
