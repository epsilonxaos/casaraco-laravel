import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import { Container } from '../../components/Container'
import Text from '../../components/Text'

export const Offers = () => {
	const { t } = useTranslation()

	return (
		<section className=''>
			<div className='md:hidden'>
				<div className='relative bg-cafe py-6 pt-12 text-center text-white'>
					<picture className='absolute -top-[35px] left-1/2 col-span-1 mx-auto -translate-x-1/2'>
						<img
							src='/img/home/sello2.svg'
							alt=''
							className='w-[70px]'
						/>
					</picture>

					<div className='col-span-1'>
						<Text className='uppercase'>Concierge digital</Text>
						<Text className='mx-auto w-[60%]'>{t('text.add2')}</Text>
					</div>
				</div>

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

			<div className='relative z-[1] hidden py-8 pt-0 md:block md:py-16'>
				<div className='relative -top-28 mx-auto flex w-[80%] max-w-[950px] items-center justify-center gap-2 bg-cafe px-12 py-3 text-center text-white'>
					<picture className='col-span-1'>
						<img
							src='/img/home/sello2.svg'
							alt=''
							className='w-[70px]'
						/>
					</picture>

					<div className='col-span-4'>
						<Text className='uppercase'>Concierge digital</Text>
						<Text className='mx-auto '>
							En Casa Raco estamos ansiosos por acompañarte a diseñar experiencias a tu medida para disfrutar lo mejor
							de Parras de la Fuente.
						</Text>
					</div>
				</div>

				<div className='mx-auto grid w-[90%] max-w-[1300px] grid-cols-5'>
					<picture className='col-span-3'>
						<img
							className='mx-auto block size-full object-cover'
							src='/img/home/banner-promociones.jpg'
							alt='Banner promociones'
						/>
					</picture>

					<div className='col-span-2 flex flex-col items-center justify-center bg-cafe px-4 py-20 text-center'>
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

const CardOffer = ({ cover, url, children, textBtn }) => {
	const { t } = useTranslation()

	return (
		<div className='col-span-1 mb-8 px-4'>
			<article className='h-full shadow-lg sm:flex sm:items-center lg:flex-col'>
				<picture className='mb-3 bg-slate-100 sm:mb-0 sm:w-1/2 lg:w-full'>
					<img
						className='h-[345px] w-full object-cover'
						src={cover}
						alt='Imagen'
					/>
				</picture>

				<main className='bg-white p-4 sm:w-1/2 lg:flex lg:h-full lg:w-auto lg:flex-col lg:justify-between'>
					{children}

					<Button.To
						url={url}
						className='mx-auto block max-w-[140px] py-2'>
						{textBtn}
					</Button.To>
				</main>
			</article>
		</div>
	)
}
