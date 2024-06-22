import { Gallery } from '../../components/Gallery'

export const Video = () => {
	return (
		<section className='max-h-[650px] w-full overflow-hidden'>
			<div className='relative md:hidden'>
				<Gallery />
			</div>

			<div className='relative hidden md:block'>
				<video
					className='pointer-events-none hidden h-auto min-h-[250px] w-full select-none bg-black object-cover object-center md:block'
					muted
					autoPlay
					loop>
					<source
						src='/video/video.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
		</section>
	)
}
