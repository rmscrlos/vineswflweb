export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || "2024-01-05";

export const dataset = assertValue(
	process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
	"Missing environment variable: SANITY_DATASET"
);

export const projectId = assertValue(
	process.env.SANITY_STUDIO_PROJECT_ID ||
		process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	"Missing environment variable: SANITY_PROJECT_ID"
);

export const token = assertValue(
	process.env.SANITY_STUDIO_API_TOKEN ||
		process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
	"Missing environment variable: SANITY_API_TOKEN"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
