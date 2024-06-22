import { useTranslation } from 'react-i18next'
import { Banner } from '../components/Banner'
import { SectionBrownAndWhite } from '../components/SectionBrownAndWhite'
import Text from '../components/Text'
import Button from '../components/Button'
import { PiTelevisionSimple } from 'react-icons/pi'
import { LiaToiletSolid } from 'react-icons/lia'
import { MdTableRestaurant } from 'react-icons/md'
import { PiCoffeeFill } from 'react-icons/pi'
import { HiVolumeUp } from 'react-icons/hi'

export const Boardroom = () => {
	const { t } = useTranslation()

	return (
		<>
			<Banner src={'/img/boardroom/banner.jpg'} />

			<SectionBrownAndWhite
				header={
					<>
						<Text className='font-bold'>{t('soon')}</Text>
						<Text.TitleSections className='mx-auto mb-6 max-w-[850px] md:mb-12'>
							{t('boardroom.title')}
						</Text.TitleSections>
						<Text className='mb-0'>{t('boardroom.text1')}</Text>
					</>
				}
				cover={'/img/boardroom/foto.jpg'}
				bg={'/img/boardroom/bg.jpg'}
				main={
					<>
						<Text className='mb-3'>{t('boardroom.text2')}</Text>
						<Text className='mb-3 font-bold'>{t('boardroom.text3')}</Text>
						<ul className='md:pl-10'>
							<li className='relative mb-3'>
								<PiTelevisionSimple
									className='-left-10 top-0 mx-auto md:absolute'
									size={30}
								/>
								<Text className='mb-3'>{t('boardroom.text4')}</Text>
							</li>
							<li className='relative mb-3'>
								<LiaToiletSolid
									className='-left-10 top-0 mx-auto md:absolute'
									size={30}
								/>
								<Text className='mb-3'>{t('boardroom.text5')}</Text>
							</li>
							<li className='relative mb-3'>
								<MdTableRestaurant
									className='-left-10 top-0 mx-auto md:absolute'
									size={30}
								/>
								<Text className='mb-3'>{t('boardroom.text6')}</Text>
							</li>
							<li className='relative mb-3'>
								<PiCoffeeFill
									className='-left-10 top-0 mx-auto md:absolute'
									size={30}
								/>
								<Text className='mb-3'>{t('boardroom.text7')}</Text>
							</li>
							<li className='relative mb-3'>
								<HiVolumeUp
									className='-left-10 top-0 mx-auto md:absolute'
									size={30}
								/>
								<Text className='mb-3'>{t('boardroom.text8')}</Text>
							</li>
						</ul>

						<div className='mb-4 text-center'>
							<Button.Link
								className={'mt-6 inline-block'}
								url={'https://wa.me/+18553409046'}>
								{t('masInfo')}
							</Button.Link>
						</div>
					</>
				}
				footer={
					<>
						<Text.TitleSections className='mb-4 text-white'>{t('boardroom.title2')}</Text.TitleSections>
						<Text>{t('boardroom.desc2')}</Text>
					</>
				}
			/>
		</>
	)
}
