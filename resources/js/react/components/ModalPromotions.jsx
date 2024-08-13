import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Text from './Text'
import Button from './Button'
import { _PATH_API } from '../constants/constants'
import axios from 'axios'

export const ModalPromotions = () => {
	const [open, setOpen] = useState(true)
	const { t } = useTranslation()
	const [data, setData] = useState()

	useEffect(() => {
		if (open) document.querySelector('body').classList.add('overflow-hidden')
		else document.querySelector('body').classList.remove('overflow-hidden')
	}, [open])

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(_PATH_API + 'api/website')

			setData(response.data)
		}
		fetchData()
	}, [])

	if (!open) return

	if (!data) return

	return (
		<div
			className='fixed left-0 top-0 z-[100] flex size-full items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm'
			onClick={() => setOpen(false)}>
			<div
				onClick={ev => {
					ev.stopPropagation()
				}}
				className='relative h-[561px] w-[90%] max-w-[315px] py-4 md:h-[485px] md:max-w-4xl'>
				<div
					className='absolute left-0 top-0 hidden size-full bg-cover bg-center md:block'
					style={{ backgroundImage: `url(${data.cover_popup})` }}
				/>
				<div
					className='absolute left-0 top-0 size-full bg-cover bg-center md:hidden'
					style={{ backgroundImage: `url(${data.movil_popup})` }}
				/>
				<div className='relative flex size-full items-end justify-center'>
					<div className='absolute top-[45%] w-full -translate-y-1/2 px-4 text-center md:px-14 md:text-left'>
						<Text className='uppercase'>{data.title_popup ?? ''}</Text>
						<Text.TitleSections className='mb-4 max-w-[350px] uppercase'>{data.desc_popup ?? ''}</Text.TitleSections>
						<Button.Link
							url={data.link_popup}
							className='bg-transparent'>
							{t('bookNow')}
						</Button.Link>
					</div>
					<button
						className='rounded-md bg-cafe px-4 py-1 text-white'
						onClick={() => setOpen(false)}>
						{t('header.close')}
					</button>
				</div>
			</div>
		</div>
	)
}
