import { twMerge } from "tailwind-merge";

export const Container = ({ children, className = "" }) => {
	return <div className={twMerge("max-w-[1920px] mx-auto px-4", className)}>{children}</div>;
};
