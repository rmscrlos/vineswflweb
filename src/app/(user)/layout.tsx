import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	subsets: ["latin-ext", "latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Vine Church SWFL",
	description: "A church of overcomers",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(poppins.className, "dark:bg-darkbg")}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
				<SpeedInsights />
				<Toaster />
			</body>
		</html>
	);
}
