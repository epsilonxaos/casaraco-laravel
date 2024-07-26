import { useTranslation } from 'react-i18next'
import Text from '../../components/Text'

export const Sandra = () => {
	const { t } = useTranslation()

	return (
		<section className='relative py-10 md:pb-20'>
			<div className='mx-auto grid w-[90%] grid-cols-2 border border-cafe p-4 md:grid-cols-3'>
				<div className='order-1 col-span-1 md:order-1'>
					<img
						src='/img/home/sandra1.jpg'
						className='h-[450px] w-full object-cover md:h-[550px]'
						alt=''
					/>
				</div>
				<div className='relative order-3 col-span-2 flex items-center justify-center py-12 text-center md:order-2 md:col-span-1'>
					<div>
						<Text className='mx-auto mb-4 w-4/5 max-w-[400px]'>{t('text.add1')}</Text>
						<Text className='mx-auto w-4/5 max-w-[400px]'>{t('text.add1.2')}</Text>
					</div>
					<img
						src='/img/logo-menu.png'
						alt='icono'
						className='absolute bottom-[-58px] left-1/2 mx-auto mb-4 w-[50px] -translate-x-1/2 bg-crema md:bottom-[-76px] md:w-[85px]'
					/>
				</div>
				<div className='order-2 col-span-1 md:order-3'>
					<img
						src='/img/home/sandra2.jpg'
						className='h-[450px] w-full object-cover md:h-[550px]'
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}
