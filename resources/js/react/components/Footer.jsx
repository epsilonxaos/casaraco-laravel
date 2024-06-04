import Button from "./Button";
import { Container } from "./Container";
import Text from "./Text";

import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="w-full text-white">
			<div className="bg-black py-16 text-center">
				<Container>
					<img src="/img/logo-menu.png" alt="icono" className="mx-auto w-[100px] mb-4 invert" />
					<img src="/img/logotipo.png" className="mx-auto mb-10 invert" alt="Casa Raco" />
					<div className="border border-white max-w-[780px] py-9 px-4 md:px-6 mx-auto mb-10">
						<Text.TitleSections className="text-white">{t("footer.news.title")}</Text.TitleSections>
						<Text className="mb-8">{t("footer.news.desc")}</Text>
						<Button.Cafe className="rounded-none hover:text-black hover:border-black">{t("footer.news.btn")}</Button.Cafe>
					</div>

					<address style={{ fontStyle: "normal" }}>
						<Text className="mb-6">Casa Raco Casa, C. Francisco I. Madero 99, Centro, 27980 Parras de la Fuente, Coah., México, Parras de la Fuente</Text>

						<ul className="sm:flex sm:items-center sm:justify-center sm:gap-10">
							<li className="mb-4 sm:mb-0">
								<Text>
									<TbPhoneCall className="inline-block text-cafe" /> <a href="tel:+5218424239902">+52 1 842 423 9902</a>
								</Text>
							</li>
							<li className="mb-4 sm:mb-0">
								<Text>
									<MdOutlineEmail className="inline-block text-cafe" />{" "}
									<a className="underline" href="mailto:reservaciones@casaraco.mx">
										reservaciones@casaraco.mx
									</a>
								</Text>
							</li>
							<li>
								<Text>
									<FiFacebook className="inline-block text-cafe" />
									<FaInstagram className="inline-block text-cafe" /> @casa.raco
								</Text>
							</li>
						</ul>
					</address>
				</Container>
			</div>

			<div className="bg-cafe py-5 font-instrumentSans">
				<Container>
					<ul className="mx-auto flex w-full flex-col items-center justify-between md:flex-row lg:text-sm xl:text-base">
						<li className="mb-4 lg:mb-0">Casa Raco</li>
						<li className="mb-4 lg:mb-0">
							<ul className="flex items-center justify-center flex-wrap text-center">
								<li className="w-full lg:w-auto">{t("footer.politicas")}</li>
								<li className="mx-3 hidden lg:block lg:w-auto">|</li>
								<li className="w-full lg:w-auto">Cookies</li>
								<li className="mx-3 hidden lg:block">|</li>
								<li className="w-full lg:w-auto">{t("footer.cancelacion")}</li>
								<li className="mx-3 hidden lg:w-auto lg:block">|</li>
								<li className="w-full lg:w-auto">{t("footer.derechos")}</li>
							</ul>
						</li>
						<li>
							<a href="https://madeby.partners/" target="_blank" rel="noopener noreferrer">
								{t("footer.made")} <span className="font-bold">MadebyPartners®</span>
							</a>
						</li>
					</ul>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
