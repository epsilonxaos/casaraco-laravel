import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import Text from '../../components/Text'

export const Gastronomy = () => {
	const { t } = useTranslation()

	return (
		<section className='grid grid-cols-1 md:grid-cols-2'>
			<picture className='col-span-1 bg-crema'>
				<img
					src='/img/home/gastro.jpg'
					className='mx-auto h-full max-h-[150px] w-[90%] object-cover object-center md:max-h-[400px] md:w-full'
					alt='Gastronomia'
				/>
			</picture>

			<div
				className='col-span-1 flex min-h-[250px] items-center bg-cover bg-right-bottom bg-no-repeat px-4 py-0 text-center md:min-h-[350px] md:py-20'
				style={{ backgroundImage: 'url(/img/home/bg-gastro.jpg)' }}>
				<div className='mx-auto max-w-[460px]'>
					<Text.TitleSections className='mb-3'>{t('home.gastronomy.title')}</Text.TitleSections>
					<Text className='mb-5'>{t('home.gastronomy.desc')}</Text>
					<Button.To
						url='/gastronomia'
						className='mx-auto block max-w-[140px] bg-transparent'>
						{t('verMas')}
					</Button.To>
				</div>
			</div>
		</section>
	)
}
