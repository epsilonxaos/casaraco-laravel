import { useTranslation } from 'react-i18next'
import { Banner } from '../components/Banner'
import { Container } from '../components/Container'
import Text from '../components/Text'
import { PromotionCard } from './promotions/PromotionCard'

import { useEffect, useState } from 'react'
import { _PATH_API } from '../constants/constants'

export const Promotions = () => {
	const { i18n, t } = useTranslation()
	const [data, setData] = useState({})

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(_PATH_API + 'api/website')

			setData(response.data)
		}
		fetchData()
	}, [])

	return (
		<>
			<Banner src={'/img/promociones/banner.jpg'} />

			<section className='py-10 lg:py-16 xl:py-24'>
				<Container>
					<div className='mx-auto text-center'>
						<Text.TitleSections className='mb-2'>{t('offsers.title')}</Text.TitleSections>
						<Text className='mb-10'>{t('offsers.desc')}</Text>
					</div>
				</Container>

				<Container className='max-w-[1200px]'>
					{/* {data && (
						<PromotionCard
							cover={'/img/promociones/1.jpg'}
							url={data?.url_sala}>
							<Text>{i18n.language == 'es' ? data?.desc_sala_es : data?.desc_sala_en}</Text>
						</PromotionCard>
					)} */}
					{data && (
						<PromotionCard
							cover={'/img/promociones/2.jpg'}
							blank={false}
							url={data?.url_habitaciones}>
							<Text>{i18n.language == 'es' ? data?.desc_habitaciones_es : data?.desc_habitaciones_en}</Text>
						</PromotionCard>
					)}
					{data && (
						<PromotionCard
							cover={'/img/promociones/3.jpg'}
							url={data?.url_casa}>
							<Text>{i18n.language == 'es' ? data?.desc_casa_es : data?.desc_casa_en}</Text>
						</PromotionCard>
					)}
				</Container>
			</section>
		</>
	)
}
