import { useTranslation } from 'react-i18next'
import Button from '../../components/Button'
import { Container } from '../../components/Container'
import Text from '../../components/Text'

import { useEffect, useState } from 'react'
import { _PATH_API, _PATH_SOURCES } from '../../constants/constants'

export const Experiences = () => {
	const { t } = useTranslation()
	const [data, setData] = useState([])

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(_PATH_API + 'api/experiences/last')

			setData(response.data)
		}
		fetchData()
	}, [])

	if (data.length === 0) return ''

	return (
		<section className='py-7 md:py-10 lg:py-12'>
			<Container className='px-0'>
				<div className='grid grid-cols-1 md:grid-cols-3 md:items-center'>
					<div className='col-span-1 px-4 pb-7 pt-0 text-center md:py-10 lg:pr-10'>
						<div className='ml-auto max-w-[350px]'>
							<Text.TitleSections className='mb-3'>{t('home.experience.title')}</Text.TitleSections>
							<Text className='mb-5'>{t('home.experience.desc')}</Text>

							<Button.To
								url='/experiencias'
								className='mx-auto block max-w-[140px]'>
								{t('verMas')}
							</Button.To>
						</div>
					</div>
					<div className='col-span-1 grid grid-cols-2 gap-2 md:col-span-2 md:grid-cols-3 lg:gap-4'>
						{data.map((item, idx) => (
							<picture
								className={data.length == idx + 1 ? 'col-span-2 md:col-span-1' : 'col-span-1'}
								key={'experiencie-picture-' + idx}>
								<img
									src={_PATH_SOURCES + item.cover}
									className='h-[200px] w-full object-cover md:h-[500px] lg:h-[650px]'
									alt='experiencia 1'
								/>
							</picture>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
