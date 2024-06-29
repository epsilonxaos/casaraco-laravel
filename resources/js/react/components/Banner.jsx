import { twMerge } from 'tailwind-merge'

export const Banner = ({ src, className = '', children }) => {
	return (
		<section className='relative z-10'>
			<img
				src={src}
				alt='Banner seccion'
				className={twMerge('h-auto max-h-[645px] w-full object-cover object-center', className)}
			/>

			{children}
		</section>
	)
}
