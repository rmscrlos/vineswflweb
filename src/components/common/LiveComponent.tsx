"use client";

import React from "react";

function LiveComponent() {
	return (
		<div className="text-xs bg-red-600 text-white py-1 px-4 rounded-md font-semibold relative">
			<div className="animate-live absolute w-full h-full block -z-[1] top-0 left-0 bottom-0 rounded-md bg-red-600" />
			Live
		</div>
	);
}
export default LiveComponent;
