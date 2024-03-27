import type { Metadata } from "next";
import { fetchSermonBySlug } from "@/api/sermons";
import { urlForImage } from "../../../../../sanity/lib/image";

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// read route params
	const slug = params.slug;

	// fetch sermon
	const { title, mainImage } = await fetchSermonBySlug(slug);

	return {
		title: title,
		openGraph: {
			title,
			description: `A spirit fill message called ${title}`,
			images: [urlForImage(mainImage)],
		},
	};
}

type LayoutProps = {
	title: string;
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <section>{children}</section>;
};

export default Layout;
