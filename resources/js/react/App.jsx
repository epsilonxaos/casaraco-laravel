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

import { MessageConsent } from './components/MessageConsent'
import { ModalPromotions } from './components/ModalPromotions'
import { useScript } from '@uidotdev/usehooks'

export default function App() {
	const location = useLocation()

	// useEffect(() => {
	// 	const script = document.createElement('script')

	// 	script.src =
	// 		'https://static1.cloudbeds.com/booking-engine-immersive-experience/latest/cloudbeds-immersive-experience.min.js'
	// 	script.async = true

	// 	document.body.appendChild(script)

	// 	return () => {
	// 		document.body.removeChild(script)
	// 	}
	// }, [])

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

					<ModalPromotions />
				</main>
			</AnimatePresence>
			<MessageConsent />
			<Footer />
		</>
	)
}
