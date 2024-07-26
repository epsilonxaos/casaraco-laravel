import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import Text from '../../components/Text'

export const Offers = () => {
	const { t } = useTranslation()

	return (
		<section className=''>
			{/* //* Version movil */}
			<div className='md:hidden'>
				<div className='bg-cafe px-5 pt-12'>
					<img
						src='/img/home/promos2.jpg'
						alt=''
						className='h-[450px] object-cover'
					/>

					<div className='relative flex flex-col items-center justify-center bg-cafe bg-opacity-90 py-6 text-center'>
						<div className='mx-auto max-w-[300px]'>
							<Text.TitleSections className='mb-2 text-white md:mb-2'>{t('home.offsers.title')}</Text.TitleSections>

							<Text className='mb-4 text-white md:mb-8 lg:mb-10'>{t('home.offsers.desc')}</Text>

							<Button.To
								url={'/promociones'}
								className='mx-auto block max-w-[150px] border-white bg-transparent text-white hover:bg-white hover:text-cafe'>
								{t('verMas')}
							</Button.To>
						</div>
					</div>
				</div>
			</div>

			{/* //* Version Escritorio */}
			<div className='relative z-[1] hidden py-8 pt-0 md:block md:py-16'>
				<div className='relative mx-auto max-w-[1300px]'>
					<picture>
						<img
							className='block size-full h-[450px] w-[80%] object-cover xl:h-[550px] xl:w-[90%]'
							src='/img/home/banner-promociones.jpg'
							alt='Banner promociones'
						/>
					</picture>

					<div className='absolute right-0 top-1/2 z-[1] flex -translate-y-1/2 flex-col items-center justify-center bg-cafe px-4 py-20 text-center'>
						<div className='mx-auto max-w-[350px]'>
							<Text.TitleSections className='mb-2 text-white md:mb-2'>{t('home.offsers.title')}</Text.TitleSections>

							<Text className='mb-4 text-white md:mb-8 lg:mb-10'>{t('home.offsers.desc')}</Text>

							<Button.To
								url={'/promociones'}
								className='mx-auto block max-w-[150px] border-white bg-cafe text-white hover:bg-white hover:text-cafe'>
								{t('verMas')}
							</Button.To>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
