import { useTranslation } from 'react-i18next'
import { Container } from '../../components/Container'
import Text from '../../components/Text'
import { IoStar } from 'react-icons/io5'

export const Croquis = () => {
	const { t, i18n } = useTranslation()

	return (
		<section className='py-10 lg:pt-12'>
			<Container>
				<div className='mx-auto mb-8 max-w-[660px] text-center'>
					<div className='mb-2 flex items-center justify-center gap-1'>
						<IoStar size={22} />
						<IoStar size={22} />
						<IoStar size={22} />
						<IoStar size={22} />
						<IoStar size={22} />
					</div>
					<Text.TitleSections className='font-medium lg:inline'>{t('home.croquis.title')}</Text.TitleSections>
					<Text>{t('home.croquis.desc')}</Text>
				</div>
			</Container>

			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.126238475403!2d-102.1834082!3d25.4372084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868f4981fd0de3a1%3A0xec2fa781cffd6d21!2sCasa%20Raco%20Casa%2FHotel%20Boutique!5e0!3m2!1sen!2smx!4v1718676522696!5m2!1sen!2smx'
				width='100%'
				height='450'
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'></iframe>
		</section>
	)
}
