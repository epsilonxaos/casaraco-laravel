import { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../css/btnMenu.css'
import ButtonCloudbed from './ButtonCloudbed'

const Language = () => {
	const { i18n } = useTranslation()

	return (
		<>
			<span
				onClick={() => i18n.changeLanguage('es')}
				className={i18n.language == 'es' ? 'font-bold' : 'cursor-pointer'}>
				ES
			</span>
			<span className='mx-2 block'>|</span>
			<span
				onClick={() => i18n.changeLanguage('en')}
				className={i18n.language == 'en' ? 'font-bold' : 'cursor-pointer'}>
				EN
			</span>
		</>
	)
}

const Header = () => {
	const [open, setOpen] = useState(false)
	const { t } = useTranslation()

	return (
		<>
			{/* // Todo: Ajustar el menu de movil, hacer nmas corto, cambiar menu por lineas y agregar boton de booknow mas pequeño */}
			<header className='fixed left-0 top-0 z-50 w-full bg-crema'>
				{/* // * Navegacion para movil */}
				<div className='flex items-center justify-between px-4 py-2 shadow-sm md:hidden'>
					<Link
						to={'/'}
						onClick={() => setOpen(false)}>
						<img
							src='/img/logotipo.png'
							className='w-[120px] md:w-[180px]'
							alt='Casa raco'
						/>
					</Link>

					<div className='flex items-center'>
						<Button.Link
							className={'scale-90 py-2 text-xs'}
							blank={false}
							url={'https://hotels.cloudbeds.com/reservation/aEkhze'}>
							{t('bookNow')}
						</Button.Link>
						<button
							className={`menu menu-3 ${open ? 'active' : ''}`}
							onClick={() => setOpen(!open)}>
							<span></span>
						</button>
					</div>
				</div>

				{/* // * Navegacion para escritorio */}
				<div className='hidden px-4 py-3 shadow-sm md:flex md:items-center md:justify-between'>
					<Button onClick={() => setOpen(!open)}>{open ? t('header.close') : t('header.menu')}</Button>
					<Link
						to={'/'}
						onClick={() => setOpen(false)}>
						<img
							src='/img/logotipo.png'
							className='w-[180px]'
							alt='Casa raco'
						/>
					</Link>

					<div className='relative flex items-center'>
						<div className='font-sm absolute -left-[75px] flex items-center justify-center font-karla text-black'>
							<Language />
						</div>

						<ButtonCloudbed />
					</div>
				</div>
			</header>
			{open && (
				<div
					className='fixed z-30 h-svh w-full bg-black bg-opacity-20 backdrop-blur-sm'
					onClick={() => setOpen(false)}></div>
			)}
			{open && (
				<nav className='fixed left-0 top-0 z-40 flex h-svh w-full flex-row flex-wrap items-center justify-center overflow-auto bg-crema pb-8 pt-[100px] uppercase md:h-auto md:min-h-[665px]'>
					<ul className='w-full text-center'>
						<li className='mb-4 md:mb-6'>
							<Link
								onClick={() => setOpen(false)}
								to={'casa-raco'}>
								{t('header.about')}
							</Link>
						</li>
						<li className='mb-4 md:mb-6'>
							<Link
								onClick={() => setOpen(false)}
								to={'promociones'}>
								{t('header.offsers')}
							</Link>
						</li>
						<li className='mb-4 md:mb-6'>
							<Link
								onClick={() => setOpen(false)}
								to={'habitaciones'}>
								{t('header.rooms')}
							</Link>
						</li>
						<li className='mb-4 md:mb-6'>
							<Link
								onClick={() => setOpen(false)}
								to={'experiencias'}>
								{t('header.experiencies')}
							</Link>
						</li>
						<li className='mb-4 md:mb-6'>
							<Link
								onClick={() => setOpen(false)}
								to={'/gastronomia'}>
								{t('header.gastronomy')}
							</Link>
						</li>
						<li className='mb-4 md:mb-6'>
							<Link
								onClick={() => setOpen(false)}
								to={'/sala-de-juntas'}>
								{t('header.boardroom')}
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setOpen(false)}
								to={'/parras-coahuila'}>
								{t('header.parras')}
							</Link>
						</li>
					</ul>

					{/* <div className="w-full text-center py-10 md:hidden">
						<Button.Link url={"https://hotels.cloudbeds.com/reservation/aEkhze"}>{t("bookNow")}</Button.Link>
					</div> */}

					<div className='font-sm flex items-center justify-center pt-10 font-karla text-black md:hidden'>
						<Language />
					</div>

					<picture className='block w-full pt-10 md:p-0'>
						<img
							src='/img/logo-menu.png'
							className='mx-auto w-[80px] md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2'
							alt='Icono'
						/>
					</picture>
				</nav>
			)}
		</>
	)
}

export default Header
