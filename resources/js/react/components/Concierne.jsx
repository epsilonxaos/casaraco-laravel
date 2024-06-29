import { useTranslation } from 'react-i18next'
import Text from './Text'

const Concierne = () => {
	const { t } = useTranslation()

	return (
		<div className='relative -top-28 mx-auto flex w-[80%] max-w-[950px] items-center justify-center gap-2 bg-cafe px-12 py-3 text-center text-white'>
			<picture className='w-[80px]'>
				<img
					src='/img/home/sello2.svg'
					alt=''
					className='w-[80px]'
				/>
			</picture>

			<div className='w-full'>
				{/* <Text className='uppercase'>Concierge digital</Text> */}
				<Text className='mx-auto '>{t('text.add2')}</Text>
			</div>
		</div>
	)
}

const Movil = () => {
	const { t } = useTranslation()

	return (
		<div className='bg-[#f0eeed] px-5'>
			<div className='relative bg-cafe pt-12 text-center text-white'>
				<div className='col-span-1 px-6'>
					<Text className='uppercase'>Concierge digital</Text>
					<Text className='mx-auto'>{t('text.add2')}</Text>
				</div>
				<picture className='relative col-span-1'>
					<img
						src='/img/home/sello2.svg'
						alt=''
						className='relative top-[35px] mx-auto w-[70px]'
					/>

					<div className='h-16 w-full bg-[#f0eeed]'></div>
				</picture>
			</div>
		</div>
	)
}

Concierne.Movil = Movil

export default Concierne
