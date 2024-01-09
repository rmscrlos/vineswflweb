"use client";

import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	useEffect(() => {
		const body = document.querySelector("body");
		if (body) {
			body.classList.remove("dark");
		}
	}, [props]);
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
