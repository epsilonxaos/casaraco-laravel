import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import Text from '../../components/Text'

export const Boardroom = () => {
	const { t } = useTranslation()

	return (
		<section className='grid grid-cols-1 md:grid-cols-2'>
			<picture className='col-span-1 bg-crema md:order-2'>
				<img
					src='/img/home/imagen1.jpg'
					className='mx-auto h-full max-h-[150px] w-[90%] object-cover object-center md:max-h-[400px] md:w-full'
					alt='Sala corporativa'
				/>
			</picture>

			<div
				className='col-span-1 flex min-h-[250px] items-center bg-cover bg-right-bottom bg-no-repeat px-4 py-0 text-center md:order-1 md:min-h-[350px] md:py-20'
				style={{ backgroundImage: 'url(/img/home/bg-sala.jpg)' }}>
				<div className='mx-auto max-w-[460px]'>
					<Text.TitleSections className='mb-3'>{t('home.boardroom.title')}</Text.TitleSections>
					<Text className='mb-5'>{t('home.boardroom.desc')}</Text>
					<Button.To
						url='/sala-de-juntas'
						className='mx-auto block max-w-[140px] bg-transparent'>
						{t('verMas')}
					</Button.To>
				</div>
			</div>
		</section>
	)
}
