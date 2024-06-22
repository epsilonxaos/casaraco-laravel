import { useTranslation } from 'react-i18next'
import Text from './Text'

export const Amenities = () => {
	const { t } = useTranslation()

	return (
		<ul className='mx-auto flex max-w-[900px] flex-wrap justify-center font-karla md:mb-8 md:justify-center lg:items-start'>
			{/* Wifi */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/wifi.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>Wifi</Text>
			</li>
			{/* Aire AC */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/aire-ac.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>{t('amenidad.2')}</Text>
			</li>
			{/* Desayuno */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/desayuno.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>{t('amenidad.3')}</Text>
			</li>
			{/* Tours */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/tour.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>Tours</Text>
			</li>
			{/* jardin */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/zona-jardin.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>{t('amenidad.5')}</Text>
			</li>
			{/* Comedor */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/comedor.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>{t('amenidad.6')}</Text>
			</li>
			{/* Bici */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/bici.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>Free bike</Text>
			</li>
			{/* yoga */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/yoga.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>{t('amenidad.7')}</Text>
			</li>
			{/* Masaje */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/masaje.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>{t('amenidad.8')}</Text>
			</li>
			{/* Sala */}
			<li className='mb-8 w-1/3 lg:w-1/6'>
				<img
					src='/img/icons/sala-juntas.svg'
					className='mx-auto mb-3 block size-[42px] object-contain'
					alt='Aire acondicionado'
				/>
				<Text className='!text-[12px] !leading-4 text-black'>{t('amenidad.1')}</Text>
			</li>
		</ul>
	)
}
