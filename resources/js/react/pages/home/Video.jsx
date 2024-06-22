import { useState } from 'react'
import { Gallery } from '../../components/Gallery'
import { IoMdCloseCircle } from 'react-icons/io'
import Button from '../../components/Button'
import { useTranslation } from 'react-i18next'

export const Video = () => {
	const [open, setOpen] = useState(false)
	const { i18n } = useTranslation()

	return (
		<section className='max-h-[650px] w-full overflow-hidden'>
			<div className='relative md:hidden'>
				<Button.Cafe
					onClick={() => setOpen(true)}
					className='absolute bottom-2 left-1/2 z-[2] -translate-x-1/2 text-xs'>
					{i18n.language == 'en' ? 'PLAY VIDEO' : 'VER VIDEO'}
				</Button.Cafe>

				<Gallery />
			</div>

			{open && (
				<div className='fixed left-0 top-0 z-[100] flex size-full items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-sm'>
					<div className='absolute right-4 top-4 text-white'>
						<IoMdCloseCircle
							size={28}
							onClick={() => setOpen(false)}
						/>
					</div>

					<video
						controls
						className='h-auto max-h-[760px] w-full bg-white md:block'>
						<source
							src='/video/video.mp4'
							type='video/mp4'
							className=''
						/>
					</video>
				</div>
			)}

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
