import { AnimatePresence } from 'framer-motion'

import PageTransition from './components/PageTransition'
// import Loading from "./components/Loading";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import { Route, Routes, useLocation } from 'react-router-dom'

import './font/fonts.css'
import './css/index.css'
import { Promotions } from './pages/Promotions'
import { CasaRaco } from './pages/CasaRaco'
import { Experiences } from './pages/Experiences'
import { ExperiencesDetail } from './pages/ExperiencesDetail'
import { Rooms } from './pages/Rooms'
import { Coahuila } from './pages/Coahuila'
import { Gastronomy } from './pages/Gastronomy'
import { Boardroom } from './pages/Boardroom'

import './lang/i18n'
import { Toaster } from 'sonner'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from './components/Button'
import Text from './components/Text'
import { MessageConsent } from './components/MessageConsent'

export default function App() {
	const location = useLocation()

	console.log(import.meta.env.VITE_APP_URL)

	// if (false) return <Loading />;

	return (
		<>
			<Header />
			<Toaster />
			<AnimatePresence mode='wait'>
				<main>
					<Routes
						location={location}
						key={location.pathname}>
						<Route
							index
							element={
								<PageTransition>
									<Home />
								</PageTransition>
							}
						/>
						<Route
							path='/promociones'
							element={
								<PageTransition>
									<Promotions />
								</PageTransition>
							}
						/>
						<Route
							path='/casa-raco'
							element={
								<PageTransition>
									<CasaRaco />
								</PageTransition>
							}
						/>
						<Route
							path='/experiencias'
							element={
								<PageTransition>
									<Experiences />
								</PageTransition>
							}
						/>
						<Route
							path='/experiencias/:id'
							element={
								<PageTransition>
									<ExperiencesDetail />
								</PageTransition>
							}
						/>
						<Route
							path='/habitaciones'
							element={
								<PageTransition>
									<Rooms />
								</PageTransition>
							}
						/>
						<Route
							path='/parras-coahuila'
							element={
								<PageTransition>
									<Coahuila />
								</PageTransition>
							}
						/>
						<Route
							path='/gastronomia'
							element={
								<PageTransition>
									<Gastronomy />
								</PageTransition>
							}
						/>
						<Route
							path='/sala-de-juntas'
							element={
								<PageTransition>
									<Boardroom />
								</PageTransition>
							}
						/>

						<Route
							path='*'
							element={<PageNotFound />}
						/>
					</Routes>

					<ModalPromociones />
				</main>
			</AnimatePresence>
			<MessageConsent />
			<Footer />
		</>
	)
}

const ModalPromociones = () => {
	const [open, setOpen] = useState(true)
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
					ev.preventDefault()
				}}
				className='promo-modal relative flex h-[561px] w-[90%] max-w-[315px] items-end justify-center bg-cover bg-center py-4 md:h-[485px] md:max-w-4xl'>
				<div className='absolute top-[45%] w-full -translate-y-1/2 px-4 text-center md:px-14 md:text-left'>
					<Text className='uppercase'>{t('modal.titulo')}</Text>
					<Text.TitleSections className='mb-4 max-w-[350px] uppercase'>{t('modal.desc')}</Text.TitleSections>
					<Button className='bg-transparent'>{t('bookNow')}</Button>
				</div>

				<button
					className='font-bold underline'
					onClick={() => setOpen(false)}>
					{t('header.close')}
				</button>
			</div>
		</div>
	)
}
