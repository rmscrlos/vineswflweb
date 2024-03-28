import { cn } from "@/lib/utils";
import { getAnnouncements } from "api/announcements";
import Icon from "common/LucideIcon/Icon";
import React from "react";
import {
	descriptionSizes,
	titleSizes,
	iconSizes,
	backgroundClasses,
	baseClasses,
	borderColorClasses,
	textColors,
	iconColors,
} from "common/announcement/Announcement.classes";
import CtaLink from "components/CtaLink";

async function Announcement() {
	const announcements = await getAnnouncements();

	if (!announcements.length) return null;

	return (
		<div className="w-[93%] mx-auto my-4 mb-10 lg:w-auto lg:max-w-4xl">
			{announcements.map(
				({
					_id,
					title,
					description,
					iconSize = "medium",
					announcementColor,
					icon,
					link,
				}) => (
					<div
						key={_id}
						className={cn(
							"flex justify-center items-center gap-4 lg:gap-6",
							baseClasses,
							backgroundClasses[announcementColor],
							borderColorClasses[announcementColor],
							textColors[announcementColor]
						)}
					>
						<div>
							<Icon
								size={iconSizes[iconSize]}
								name={icon}
								color={iconColors[announcementColor]}
							/>
						</div>
						<div className="flex flex-col gap-1 lg:flex-row lg:gap-10">
							<div>
								<p className={titleSizes[iconSize]}>{title}</p>
								<p className={descriptionSizes[iconSize]}>{description}</p>
							</div>
							{link && (
								<CtaLink
									className={cn(
										"mt-2 w-full text-center p-1 rounded-md lg:w-fit lg:flex lg:justify-center lg:items-center lg:py-2 lg:px-8",
										{
											["bg-vinegreen text-white"]: announcementColor === "info",
											["bg-yellow-500 text-white"]:
												announcementColor === "warning",
										}
									)}
									linkTitle="More"
									href={link}
								/>
							)}
						</div>
					</div>
				)
			)}
		</div>
	);
}

export default Announcement;
