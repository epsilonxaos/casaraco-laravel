import { useTranslation } from 'react-i18next'
import Text from '../../components/Text'
import Button from '../../components/Button'

export const Concierne = () => {
	const { t } = useTranslation()

	return (
		<section className='bg-[#D6C0AC]'>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				<picture className='col-span-1 px-6 pt-6 md:p-0'>
					<img
						src='/img/home/concierne.png'
						alt='Concierne'
						className='hidden min-h-[400px] object-cover sm:block'
					/>
					<img
						src='/img/home/conciernemovil.png'
						alt='Concierne'
						className='h-[450px] w-full object-cover sm:hidden'
					/>
				</picture>
				<div className='col-span-1 flex items-center justify-center p-6'>
					<div className='max-w-[580px] text-center'>
						<Text.TitleSections className='font-karla uppercase'>Concierge Digital</Text.TitleSections>
						<Text className='mb-8'>{t('text.add2')}</Text>

						<Button.Link
							url={'https://wa.me/+18553409046'}
							className={'bg-cafe text-white'}>
							{t('contactanos')}
						</Button.Link>
					</div>
				</div>
			</div>
		</section>
	)
}
