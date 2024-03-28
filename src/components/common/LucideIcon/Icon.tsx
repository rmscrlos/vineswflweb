import { icons } from "lucide-react";
import { IconType } from "./Icon.types";

const Icon = ({ name, color = "black", size }: IconType) => {
	const LucideIcon = icons[name as keyof typeof icons]; // Add type annotation to allow indexing

	return <LucideIcon color={color} size={size} />;
};

export default Icon;
