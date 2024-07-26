import { useTranslation } from 'react-i18next'
import { Banner } from '../components/Banner'
import { Container } from '../components/Container'
import Text from '../components/Text'
import { CardExperience } from './experiences/CardExperience'

import { useEffect, useState } from 'react'
import { _PATH_API, _PATH_SOURCES } from '../constants/constants'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

export const ExperiencesDetail = () => {
	const { i18n } = useTranslation()
	let { id } = useParams()

	const [data, setData] = useState(false)

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(_PATH_API + 'api/experience/' + id)

			const d = response.data
			d.translations.forEach(translation => {
				let locale = translation.locale
				d[locale] = translation
			})

			console.log(d)

			setData(d)
		}
		fetchData()
	}, [])

	if (data === false)
		return (
			<div className='mb-6'>
				<div className='mb-10'>
					<Skeleton height={450} />
				</div>

				<div className='px-4 pb-4'>
					<Skeleton count={20} />
				</div>
			</div>
		)

	return (
		<>
			<Banner
				className='max-h-[500px]'
				src={_PATH_SOURCES + data.portada}
			/>

			<section className='py-10 lg:py-16 xl:py-24'>
				<Text.TitleSections className='mb-10 text-center md:mb-20'>{data[i18n.language].title}</Text.TitleSections>
				<Container className='max-w-5xl px-5 md:px-10'>{parse(data[i18n.language].content)}</Container>
			</section>
		</>
	)
}
