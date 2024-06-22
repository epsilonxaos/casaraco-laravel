import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/btnMenu.css";

const Language = () => {
	const { i18n } = useTranslation();

	return (
		<>
			<span onClick={() => i18n.changeLanguage("es")} className={i18n.language == "es" ? "font-bold" : "cursor-pointer"}>
				ES
			</span>
			<span className="mx-2 block">|</span>
			<span onClick={() => i18n.changeLanguage("en")} className={i18n.language == "en" ? "font-bold" : "cursor-pointer"}>
				EN
			</span>
		</>
	);
};

const Header = () => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			{/* // Todo: Ajustar el menu de movil, hacer nmas corto, cambiar menu por lineas y agregar boton de booknow mas pequeño */}
			<header className="bg-crema fixed top-0 left-0 w-full z-50">
				{/* // * Navegacion para movil */}
				<div className="flex items-center justify-between py-2 px-4 shadow-sm md:hidden">
					<Link to={"/"} onClick={() => setOpen(false)}>
						<img src="/img/logotipo.png" className="w-[120px] md:w-[180px]" alt="Casa raco" />
					</Link>

					<div className="flex items-center">
						<Button.Link className={"text-xs py-2 scale-90"} blank={false} url={"https://hotels.cloudbeds.com/reservation/aEkhze"}>
							{t("bookNow")}
						</Button.Link>
						<button className={`menu menu-3 ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
							<span></span>
						</button>
					</div>
				</div>

				{/* // * Navegacion para escritorio */}
				<div className="md:items-center md:justify-between py-3 px-4 shadow-sm hidden md:flex">
					<Button onClick={() => setOpen(!open)}>{open ? t("header.close") : t("header.menu")}</Button>
					<Link to={"/"} onClick={() => setOpen(false)}>
						<img src="/img/logotipo.png" className="w-[180px]" alt="Casa raco" />
					</Link>

					<div className="relative">
						<div className="flex items-center justify-center text-black absolute -left-[75px] font-karla font-sm">
							<Language />
						</div>
						<Button.Link blank={false} url={"https://hotels.cloudbeds.com/reservation/aEkhze"}>
							{t("bookNow")}
						</Button.Link>
					</div>
				</div>
			</header>
			{open && <div className="bg-black fixed z-30 w-full h-svh bg-opacity-20 backdrop-blur-sm" onClick={() => setOpen(false)}></div>}
			{open && (
				<nav className="uppercase bg-crema w-full pt-[100px] pb-8 fixed z-40 top-0 left-0 h-svh flex items-center justify-center flex-wrap flex-row md:min-h-[665px] md:h-auto overflow-auto">
					<ul className="text-center w-full">
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"casa-raco"}>
								{t("header.about")}
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"promociones"}>
								{t("header.offsers")}
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"habitaciones"}>
								{t("header.rooms")}
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"experiencias"}>
								{t("header.experiencies")}
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"/gastronomia"}>
								{t("header.gastronomy")}
							</Link>
						</li>
						<li className="mb-4 md:mb-6">
							<Link onClick={() => setOpen(false)} to={"/sala-de-juntas"}>
								{t("header.boardroom")}
							</Link>
						</li>
						<li>
							<Link onClick={() => setOpen(false)} to={"/parras-coahuila"}>
								{t("header.parras")}
							</Link>
						</li>
					</ul>

					{/* <div className="w-full text-center py-10 md:hidden">
						<Button.Link url={"https://hotels.cloudbeds.com/reservation/aEkhze"}>{t("bookNow")}</Button.Link>
					</div> */}

					<div className="flex pt-10 items-center justify-center text-black font-karla font-sm md:hidden">
						<Language />
					</div>

					<picture className="block w-full pt-10 md:p-0">
						<img src="/img/logo-menu.png" className="w-[80px] mx-auto md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2" alt="Icono" />
					</picture>
				</nav>
			)}
		</>
	);
};

export default Header;
