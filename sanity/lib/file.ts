import { buildFileUrl, FileUrlBuilderOptions } from "@sanity/asset-utils";

import { dataset, projectId } from "../env";

export const urlForFile = (asset: FileUrlBuilderOptions): string => {
	return buildFileUrl(asset, {
		projectId: projectId || "",
		dataset: dataset || "",
	});
};
