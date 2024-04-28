"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const pathname = usePathname();
	const forcedTheme = pathname.startsWith("/sermons/") ? "dark" : undefined;
	return (
		<NextThemesProvider forcedTheme={forcedTheme} {...props}>
			{children}
		</NextThemesProvider>
	);
}
