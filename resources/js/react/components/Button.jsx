import { twMerge } from 'tailwind-merge'
import { Link as LinkR } from 'react-router-dom'

const Button = ({ children, onClick, className = '' }) => {
	return (
		<button
			{...(onClick && { onClick })}
			type='button'
			className={twMerge(
				'min-w-[80px] rounded-xl border-2 border-cafe bg-crema px-4 py-2 text-xs uppercase text-cafe transition-colors hover:bg-cafe hover:text-white md:min-w-[120px] md:text-sm lg:min-w-[140px] ',
				className
			)}>
			{children}
		</button>
	)
}

const ButtonCafe = ({ children, onClick, className = '' }) => {
	return (
		<button
			{...(onClick && { onClick })}
			type='button'
			className={twMerge(
				'min-w-[80px] rounded-xl border-2 border-cafe bg-cafe px-4 py-2 text-xs uppercase text-white transition-colors hover:bg-crema hover:text-cafe md:min-w-[120px] md:text-sm  xl:min-w-[140px]',
				className
			)}>
			{children}
		</button>
	)
}

const Link = ({ children, url, className, blank = true }) => {
	return (
		<a
			className={twMerge(
				'min-w-[80px] rounded-xl border-2 border-cafe bg-crema px-4 py-2 text-xs uppercase text-cafe transition-colors hover:bg-cafe hover:text-white md:min-w-[120px] md:text-sm  xl:min-w-[140px]',
				className
			)}
			href={url}
			{...(blank && { target: '_blank' })}
			rel='noopener noreferrer'>
			{children}
		</a>
	)
}

const To = ({ url = '', children, className = '' }) => {
	return (
		<LinkR
			to={url}
			className={twMerge(
				'min-w-[80px] rounded-xl border-2 border-cafe bg-crema px-4 py-2 text-xs uppercase text-cafe transition-colors hover:bg-cafe hover:text-white md:min-w-[120px] md:text-sm lg:min-w-[140px] ',
				className
			)}>
			{children}
		</LinkR>
	)
}

Button.Cafe = ButtonCafe
Button.Link = Link
Button.To = To

export default Button
