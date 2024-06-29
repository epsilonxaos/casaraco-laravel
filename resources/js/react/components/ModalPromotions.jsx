import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Text from './Text'
import Button from './Button'

export const ModalPromotions = () => {
	const [open, setOpen] = useState(false)
	const { t } = useTranslation()

	useEffect(() => {
		if (open) document.querySelector('body').classList.add('overflow-hidden')
		else document.querySelector('body').classList.remove('overflow-hidden')
	}, [open])

	if (!open) return

	return (
		<div
			className='fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm'
			onClick={() => setOpen(false)}>
			<div
				onClick={ev => {
					ev.stopPropagation()
				}}
				className='promo-modal relative flex h-[561px] w-[90%] max-w-[315px] items-end justify-center bg-cover bg-center py-4 md:h-[485px] md:max-w-4xl'>
				<div className='absolute top-[45%] w-full -translate-y-1/2 px-4 text-center md:px-14 md:text-left'>
					<Text className='uppercase'>{t('modal.titulo')}</Text>
					<Text.TitleSections className='mb-4 max-w-[350px] uppercase'>{t('modal.desc')}</Text.TitleSections>
					<Button.Link
						url={'https://hotels.cloudbeds.com/reservation/aEkhze'}
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
	)
}
