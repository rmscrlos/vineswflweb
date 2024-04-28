import { client } from "../../../sanity/lib/client";

export const fetchImageByTitle = async (title: string) => {
	const query = `*[_type == "Images" && !(_id in path("drafts.**")) &&  title == '${title}']{
        _id,
        title,
        mainImage,
    }`;

	const image = await client.fetch(query, {}, { cache: "no-cache" });
	return image[0];
};
