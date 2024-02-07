"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { usePathname } from "next/navigation";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const pathname = usePathname();

	let theme = "light";
	if (typeof window !== "undefined") {
		theme = localStorage.getItem("theme") || "light";
	}

	const html = typeof window !== "undefined" && document.documentElement;
	if (html && theme === "dark" && !pathname.startsWith("/sermons/")) {
		localStorage.setItem("theme", "light");
		html.setAttribute("class", "light");
	}

	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
