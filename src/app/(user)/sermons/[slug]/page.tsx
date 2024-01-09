"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function SermonPage() {
	const { setTheme } = useTheme();

	useEffect(() => {
		setTheme("dark");
		return () => setTheme("light");
	}, [setTheme]);

	return (
		<main className="flex min-h-screen flex-col pb-14 items-center">
			<h1>Sermon Page</h1>
			{/* Add your sermon content here */}
		</main>
	);
}
