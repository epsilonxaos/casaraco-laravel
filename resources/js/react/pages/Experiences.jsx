import { useTranslation } from 'react-i18next'
import { Banner } from '../components/Banner'
import { Container } from '../components/Container'
import Text from '../components/Text'
import { CardExperience } from './experiences/CardExperience'

import { useEffect, useState } from 'react'
import { _PATH_API, _PATH_SOURCES } from '../constants/constants'
import Concierne from '../components/Concierne'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

export const Experiences = () => {
	const { t, i18n } = useTranslation()

	const [data, setData] = useState(false)

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(_PATH_API + 'api/experiences')

			const d = response.data
			d.forEach(item => {
				item.translations.forEach(l => {
					const locale = l.locale
					if (locale) item[locale] = l
				})
			})

			setData(d)
		}
		fetchData()
	}, [])

	return (
		<>
			<Banner src={'/img/experiencias/banner.jpg'}>
				<div className='absolute bottom-[-60px] hidden w-full md:block'>
					<Concierne className={'top-0'} />
				</div>
			</Banner>

			<section className='py-10 md:py-24'>
				<div className='md:hidden'>
					<Concierne.Movil />
				</div>

				<Container className='max-w-7xl text-center'>
					<Text.TitleSections className='mb-2'>{t('experiences.title')}</Text.TitleSections>
					<Text className='mx-auto mb-10 max-w-[860px]'>{t('experiences.desc')}</Text>

					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{data === false
							? [1, 2, 3, 4, 5, 6].map(item => (
									<div
										className='col-span-1 pb-6 lg:pb-10'
										key={'skeleton-card-' + item}>
										<div className='max-w-[460px] shadow-card'>
											<div className='mb-6'>
												<Skeleton height={300} />
											</div>

											<div className='px-4 pb-4'>
												<Skeleton count={4} />
											</div>
										</div>
									</div>
								))
							: data.map(item => (
									<CardExperience
										key={'experiencias-' + item.id}
										cover={_PATH_SOURCES + item.cover}
										title={item[i18n.language].title}
										url={_PATH_API + 'experiencias/' + item.id}
									/>
								))}
					</div>
				</Container>
			</section>
		</>
	)
}
