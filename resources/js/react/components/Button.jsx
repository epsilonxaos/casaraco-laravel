import { twMerge } from "tailwind-merge";
import { Link as LinkR } from "react-router-dom";

const Button = ({ children, onClick, className = "" }) => {
	return (
		<button {...(onClick && { onClick })} type="button" className={twMerge("py-3 uppercase bg-crema border-2 px-4 min-w-[80px] md:min-w-[120px] lg:min-w-[140px] md:text-sm lg:text-base border-cafe rounded-xl text-cafe hover:bg-cafe hover:text-white transition-colors", className)}>
			{children}
		</button>
	);
};

const ButtonCafe = ({ children, onClick, className = "" }) => {
	return (
		<button {...(onClick && { onClick })} type="button" className={twMerge("py-3 uppercase bg-cafe border-2 px-4 min-w-[80px] md:min-w-[120px] xl:min-w-[140px] md:text-sm lg:text-base border-cafe rounded-xl text-white hover:bg-crema hover:text-cafe transition-colors", className)}>
			{children}
		</button>
	);
};

const Link = ({ children, url, className, blank = true }) => {
	return (
		<a className={twMerge("py-3 uppercase bg-crema border-2 px-4 min-w-[80px] md:min-w-[120px] xl:min-w-[140px] md:text-sm lg:text-base border-cafe rounded-xl text-cafe hover:bg-cafe hover:text-white transition-colors", className)} href={url} {...(blank && { target: "_blank" })} rel="noopener noreferrer">
			{children}
		</a>
	);
};

const To = ({ url = "", children, className = "" }) => {
	return (
		<LinkR to={url} className={twMerge("py-3 uppercase bg-crema border-2 px-4 min-w-[80px] md:min-w-[120px] lg:min-w-[140px] md:text-sm lg:text-base border-cafe rounded-xl text-cafe hover:bg-cafe hover:text-white transition-colors", className)}>
			{children}
		</LinkR>
	);
};

Button.Cafe = ButtonCafe;
Button.Link = Link;
Button.To = To;

export default Button;
