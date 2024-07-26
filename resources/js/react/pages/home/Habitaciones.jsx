import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import { Container } from '../../components/Container'
import Text from '../../components/Text'

export const Habitaciones = () => {
	return (
		<section
			className='bg-cover bg-right-top bg-no-repeat md:py-10 lg:py-16'
			style={{ backgroundImage: 'url(/img/home/fondo-habitaciones.jpg)' }}>
			<Container className='max-w-[1500px] px-0'>
				<div className='relative grid grid-cols-2 bg-[#D6C0AC] px-6 pt-10 md:grid-cols-2 md:gap-2 md:bg-transparent md:p-0'>
					<picture className='col-span-1'>
						<img
							src='/img/home/imagen2.jpg'
							className='h-[450px] object-cover md:h-[640px]'
							alt=''
						/>
					</picture>

					<picture className='col-span-1'>
						<img
							src='/img/home/imagen2-1.jpg'
							className='h-[450px] object-cover md:h-[640px]'
							alt=''
						/>
					</picture>

					<CardHabitacion />
				</div>
			</Container>
		</section>
	)
}

const CardHabitacion = () => {
	const { t } = useTranslation()

	return (
		<div className='relative col-span-2 w-full bg-[#d6c0ac] px-5 pb-10 pt-[80px] text-center md:absolute md:left-1/2 md:top-1/2 md:min-h-[515px] md:max-w-[365px] md:-translate-x-1/2 md:-translate-y-1/2 md:p-7'>
			<img
				src='/img/home/Sello.png'
				alt='Sello'
				className='absolute -top-[60px] left-0 right-0 mx-auto size-[118px] md:hidden'
			/>
			<img
				src='/img/home/Sello.png'
				alt='Sello'
				className='mx-auto mb-4 hidden size-[118px] md:block'
			/>

			<Text.TitleSections className='mb-4 text-black'>{t('home.rooms.title')}</Text.TitleSections>
			<Text className='mb-8 text-black'>{t('home.rooms.desc')}</Text>

			<Button.Link
				blank={false}
				url='https://hotels.cloudbeds.com/reservation/aEkhze'
				className='mx-auto block max-w-[140px] border-black bg-transparent text-black hover:bg-black hover:text-white'>
				{t('verMas')}
			</Button.Link>
		</div>
	)
}
