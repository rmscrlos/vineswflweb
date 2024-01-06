import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const displayDate = (startDate: string, endDate: string) => {
	const start = startDate
		? new Date(startDate).toDateString().substring(4, 10)
		: null;
	const end = endDate
		? new Date(endDate).toDateString().substring(4, 10)
		: null;

	if (start === end) {
		return start;
	} else if (!end) {
		return start;
	} else if (!start) {
		return end;
	} else {
		return `${start} - ${end}`;
	}
};
