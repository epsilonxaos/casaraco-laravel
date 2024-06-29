import { Container } from './Container'

export const SectionBrownAndWhite = ({ header, main, footer, cover, bg }) => {
	return (
		<section className=''>
			<div
				className='relative bg-crema bg-cover bg-top bg-no-repeat pt-10 bg-blend-darken max-md:!bg-none md:pt-24 xl:pt-24'
				style={{ backgroundImage: 'url(' + bg + ')' }}>
				<Container className='max-w-6xl text-center'>
					{header}

					<div className='grid grid-cols-1 gap-[30px] pb-8 pt-10 md:grid-cols-2 md:gap-6 md:pb-0'>
						<picture className='relative col-span-1 md:top-[45px]'>
							<img
								src={cover}
								className='mx-auto h-full w-max object-cover max-md:max-h-[350px] max-md:w-full md:min-h-[550px]'
								alt='Relajacion'
							/>
						</picture>
						<div className='col-span-1 flex h-full items-center text-center md:text-left xl:pl-8'>
							<div>{main}</div>
						</div>
					</div>

					<div className='bottom-0 left-0 -z-10 hidden h-[40px] w-full bg-cafe md:absolute md:block'></div>
				</Container>
			</div>

			<div className='relative top-1 h-[40px] w-full bg-cafe md:h-[100px]'></div>

			<blockquote className='bg-cafe pb-10 not-italic text-white lg:pb-16 xl:pb-24'>
				<Container className='max-w-6xl text-center'>{footer}</Container>
			</blockquote>
		</section>
	)
}
