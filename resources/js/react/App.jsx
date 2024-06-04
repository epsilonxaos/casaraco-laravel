import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
// import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes, useLocation } from "react-router-dom";

import "./font/fonts.css";
import "./css/index.css";
import { Promotions } from "./pages/Promotions";
import { CasaRaco } from "./pages/CasaRaco";
import { Experiences } from "./pages/Experiences";
import { Rooms } from "./pages/Rooms";
import { Coahuila } from "./pages/Coahuila";
import { Gastronomy } from "./pages/Gastronomy";
import { Boardroom } from "./pages/Boardroom";

import "./lang/i18n";

export default function App() {
	const location = useLocation();

	// if (false) return <Loading />;

	return (
		<>
			<Header />
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<main>
					<Routes location={location} key={location.pathname}>
						<Route
							index
							element={
								<PageTransition>
									<Home />
								</PageTransition>
							}
						/>
						<Route
							path="/promociones"
							element={
								<PageTransition>
									<Promotions />
								</PageTransition>
							}
						/>
						<Route
							path="/casa-raco"
							element={
								<PageTransition>
									<CasaRaco />
								</PageTransition>
							}
						/>
						<Route
							path="/experiencias"
							element={
								<PageTransition>
									<Experiences />
								</PageTransition>
							}
						/>
						<Route
							path="/habitaciones"
							element={
								<PageTransition>
									<Rooms />
								</PageTransition>
							}
						/>
						<Route
							path="/parras-coahuila"
							element={
								<PageTransition>
									<Coahuila />
								</PageTransition>
							}
						/>
						<Route
							path="/gastronomia"
							element={
								<PageTransition>
									<Gastronomy />
								</PageTransition>
							}
						/>
						<Route
							path="/sala-de-juntas"
							element={
								<PageTransition>
									<Boardroom />
								</PageTransition>
							}
						/>

						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</main>
			</AnimatePresence>

			<Footer />
		</>
	);
}
