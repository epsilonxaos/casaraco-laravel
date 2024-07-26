import { useTranslation } from 'react-i18next'
import Text from './Text'
import { twMerge } from 'tailwind-merge'

const Concierne = ({ className }) => {
	const { t } = useTranslation()

	return (
		<div
			className={twMerge(
				'relative -top-28 mx-auto flex w-[80%] max-w-[950px] items-center justify-center gap-2 bg-cafe px-12 py-3 text-center text-white',
				className
			)}>
			<picture className='w-[80px]'>
				<img
					src='/img/home/sello2.svg'
					alt=''
					className='w-[80px]'
				/>
			</picture>

			<div className='w-full'>
				{/* <Text className='uppercase'>Concierge digital</Text> */}
				<Text className='mx-auto '>{t('text.add.concierne.small')}</Text>
			</div>
		</div>
	)
}

const Movil = () => {
	const { t } = useTranslation()

	return (
		<div className='px-5'>
			<div className='relative bg-cafe pt-12 text-center text-white'>
				<div className='col-span-1 px-6'>
					<Text className='uppercase'>Concierge digital</Text>
					<Text className='mx-auto'>{t('text.add.concierne.small')}</Text>

					<a
						className='mx-auto mt-6 block min-w-[80px] max-w-[170px] rounded-xl border-2 border-cafe bg-crema px-4 py-2 text-xs uppercase text-cafe transition-colors md:min-w-[120px] md:py-3 md:text-sm lg:text-base xl:min-w-[140px]'
						href='https://wa.me/+18553409046'
						target='_blank'
						rel='noopener noreferrer'>
						{t('masInfo2')}
					</a>
				</div>
				<picture className='relative col-span-1'>
					<img
						src='/img/home/sello2.svg'
						alt=''
						className='relative top-[35px] mx-auto w-[70px]'
					/>

					<div className='h-16 w-full bg-crema'></div>
				</picture>
			</div>
		</div>
	)
}

Concierne.Movil = Movil

export default Concierne
