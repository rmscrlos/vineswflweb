const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function HomepageLatestSermonSkeleton() {
	return (
		<div
			className={`${shimmer} relative w-[93%] h-[560px] lg:w-full lg:h-[700px] bg-gray-200 rounded-md`}
		>
			<div className="absolute bottom-0 z-[2] w-full p-4 lg:w-1/2 lg:bottom-4 lg:left-4">
				<div className="bg-gray-300 h-[25px] rounded-xl w-[33%] mb-2" />
				<div className="rounded-md bg-gray-300 h-[35px] mb-3" />
				<div className="flex flex-col justify-center items-center gap-2 text-center lg:flex-row lg:gap-4">
					<div className="bg-gray-300 h-[48px] text-white font-semibold w-full rounded-md  lg:w-3/4" />
					<div className="w-full h-[48px] font-semibold  rounded-md lg:w-3/4 bg-gray-300" />
				</div>
			</div>
		</div>
	);
}

export function JoinALifegroupSkeleton() {
	return (
		<div
			className={`${shimmer} relative bg-gray-200 h-[450px] rounded-md flex justify-center items-center font-semibold`}
		>
			<div className="z-10 absolute bottom-5 left-5 w-2/3 lg:w-1/3">
				<div className="rounded-md bg-gray-300 h-[36px] mb-2" />
				<div className="rounded-md bg-gray-300 h-[15px] w-1/2 mb-3" />

				<div className="flex items-center gap-2">
					<div className="h-[48px] font-semibold w-2/3 rounded-md lg:w-3/4 bg-gray-300" />
				</div>
			</div>
		</div>
	);
}
