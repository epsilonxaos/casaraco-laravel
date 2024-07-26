import { useTranslation } from 'react-i18next'
import { Banner } from '../components/Banner'
import { SectionBrownAndWhite } from '../components/SectionBrownAndWhite'
import Text from '../components/Text'
import Concierne from '../components/Concierne'

export const Gastronomy = () => {
	const { t } = useTranslation()

	return (
		<>
			<Banner src={'/img/gastronomy/banner.jpg?v=23'}>
				<div className='absolute bottom-[-60px] hidden w-full md:block'>
					<Concierne className={'top-0'} />
				</div>
			</Banner>

			<SectionBrownAndWhite
				header={
					<>
						<div className='md:hidden'>
							<Concierne.Movil />
						</div>
						<Text.TitleSections className='mx-auto mb-10 max-w-[510px] md:mb-12'>
							{t('gastronomy.title')}
						</Text.TitleSections>
						<Text className='mb-6'>{t('gastronomy.text1')}</Text>
						<Text>{t('gastronomy.text2')}</Text>
					</>
				}
				cover={'/img/gastronomy/foto.jpg?v=32'}
				bg={'/img/gastronomy/bg.jpg'}
				main={
					<>
						<Text className='mb-3'>{t('gastronomy.text3')}</Text>
						<Text className='mb-3'>{t('gastronomy.text4')}</Text>
						<Text className='uppercase'>{t('gastronomy.text5')}</Text>
						<Text className='mb-3 uppercase'>{t('gastronomy.text6')}</Text>
						<Text className='mb-3'>{t('gastronomy.text7')}</Text>
						<Text className='mb-3'>{t('gastronomy.text8')}</Text>
					</>
				}
				footer={
					<>
						<Text.TitleSections className='mb-4 text-white'>{t('gastronomy.title2')}</Text.TitleSections>
						<Text>{t('gastronomy.desc2')}</Text>
					</>
				}
			/>
		</>
	)
}
