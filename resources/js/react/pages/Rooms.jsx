import { useTranslation } from 'react-i18next'
import { Amenities } from '../components/Amenities'
import { Banner } from '../components/Banner'
import Button from '../components/Button'
import { Container } from '../components/Container'
import Text from '../components/Text'

export const Rooms = () => {
	const { t, i18n } = useTranslation()

	return (
		<>
			<Banner src={'/img/rooms/banner.jpg'} />

			<section className='pt-8 md:py-10 lg:py-16 xl:py-24'>
				<Container className='text-center'>
					<img
						src='/img/logo-menu.png'
						alt='icono'
						className='mx-auto mb-4 w-[60px] md:w-[100px]'
					/>

					<Text.Title className='mb-5'>{t('rooms.title')}</Text.Title>

					<Text className='mx-auto mb-10 max-w-[850px]'>{t('rooms.desc')}</Text>

					<Amenities />
				</Container>
			</section>

			<section
				className='bg-cover bg-left-top bg-no-repeat py-8 md:py-24'
				style={{ backgroundImage: 'url(/img/rooms/bg.png' }}>
				<Container className='max-w-7xl px-0 lg:px-4'>
					<div className='relative z-[1] mb-8 md:mb-24 lg:flex lg:items-center'>
						<div className='absolute left-1/2 top-0 -z-10 h-full w-[90%] bg-[#d6c0ac] max-lg:-translate-x-1/2 sm:w-[80%] lg:left-0 lg:top-1/2 lg:h-[85%] lg:w-full lg:-translate-y-1/2'></div>

						<picture className='relative lg:w-[60%]'>
							<img
								className='w-full'
								src='/img/rooms/room1.jpg'
								alt='Habitacion doble Queen'
							/>

							<img
								src='/img/rooms/sello.png'
								className='absolute left-1/2 w-[110px] max-lg:-bottom-[55px] max-lg:-translate-x-1/2 lg:-right-[55px] lg:left-auto lg:top-1/2 lg:-translate-y-1/2'
								alt='Sello'
							/>
						</picture>

						<main className='px-6 py-8 pt-20 text-center text-black lg:w-[40%] lg:pt-8'>
							<div className='mx-auto max-w-[290px]'>
								<Text.TitleSections className='mb-5 text-black'>{t('rooms.1.title')}</Text.TitleSections>
								<Text className='mb-6'>{t('rooms.1.text')}</Text>
							</div>

							<a
								href='https://hotels.cloudbeds.com/reservation/aEkhze'
								target='_blank'
								rel='noopener noreferrer'>
								<Button.Link
									className={'bg-cafe text-crema'}
									url={'https://hotels.cloudbeds.com/reservation/aEkhze'}
									blank={false}>
									{i18n.language == 'es' ? 'Reservar ahora' : 'Book now'}
								</Button.Link>
							</a>
						</main>
					</div>

					<div className='relative z-[1] lg:flex lg:items-center '>
						<div className='absolute left-1/2 top-0 -z-10 h-full w-[90%] bg-[#d6c0ac] max-lg:-translate-x-1/2 sm:w-[80%] lg:left-0 lg:top-1/2 lg:h-[85%] lg:w-full lg:-translate-y-1/2'></div>

						<picture className='relative lg:order-2 lg:w-[60%]'>
							<img
								className='w-full'
								src='/img/rooms/room2.jpg'
								alt='Habitacion doble Queen'
							/>

							<img
								src='/img/rooms/sello.png'
								className='absolute left-1/2 w-[110px] max-lg:-bottom-[55px] max-lg:-translate-x-1/2 lg:-left-[55px] lg:top-1/2 lg:-translate-y-1/2'
								alt='Sello'
							/>
						</picture>

						<main className='px-6 py-8 pt-20 text-center text-black lg:order-1 lg:w-[40%] lg:pt-8'>
							<div className='mx-auto max-w-[290px]'>
								<Text.TitleSections className='mb-5 text-black'>{t('rooms.2.title')}</Text.TitleSections>
								<Text className='mb-6'>{t('rooms.2.text')}</Text>
							</div>

							<Button.Link
								className={'bg-cafe text-crema'}
								url={'https://hotels.cloudbeds.com/reservation/aEkhze'}
								blank={false}>
								{i18n.language == 'es' ? 'Reservar ahora' : 'Book now'}
							</Button.Link>
						</main>
					</div>
				</Container>
			</section>
		</>
	)
}
