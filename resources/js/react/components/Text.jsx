import { twMerge } from 'tailwind-merge'
import parse from 'html-react-parser'

const Text = ({ children, className = '' }) => {
	try {
		return <p className={twMerge('text-sm text-inherit md:text-base lg:text-lg', className)}>{parse(children)}</p>
	} catch (error) {}
}

const Title = ({ children, className = '' }) => {
	return (
		<h1 className={twMerge('font-karla text-xl font-light uppercase text-cafe md:text-2xl lg:text-3xl', className)}>
			{parse(children)}
		</h1>
	)
}

const TitleSections = ({ children, className = '' }) => {
	return (
		<h2 className={twMerge('font-karla text-xl font-light uppercase text-cafe md:text-2xl lg:text-3xl', className)}>
			{parse(children)}
		</h2>
	)
}

Text.Title = Title
Text.TitleSections = TitleSections

export default Text
