"use client";

import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	console.log({ props });
	useEffect(() => {
		console.log("useEffect");
		const body = document.querySelector("body");
		if (body) {
			body.classList.remove("dark");
		}
	}, []);
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
