import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Offers = () => {
	const { t } = useTranslation();

	return (
		<section className="pt-4 pb-10 lg:pb-12 lg:pt-[10px] text-center bg-cafe relative">
			<div className="relative z-[1]">
				<Container className="pt-8">
					<Text.TitleSections className="mb-2 md:mb-2 text-white">{t("home.offsers.title")}</Text.TitleSections>

					<Text className="mb-4 md:mb-8 lg:mb-10 text-white">{t("home.offsers.desc")}</Text>

						<Button.To url={'/promociones'} className="mb-8 bg-cafe border-white max-w-[150px] text-white hover:bg-white hover:text-cafe block mx-auto">{t("verMas")}</Button.To>
				</Container>

				<picture>
					<img className="w-[90%] block mx-auto min-h-[150px] max-w-[1300px] object-cover md:h-auto" src="/img/home/banner-promociones.jpg" alt="Banner promociones" />
				</picture>
			</div>


			<div className="bg-white w-full h-[120px] absolute bottom-0 left-0 " />

			
		</section>
	);
};

const CardOffer = ({ cover, url, children, textBtn }) => {
	const { t } = useTranslation();

	return (
		<div className="col-span-1 px-4 mb-8">
			<article className="shadow-lg sm:flex sm:items-center lg:flex-col h-full">
				<picture className="bg-slate-100 mb-3 sm:mb-0 sm:w-1/2 lg:w-full">
					<img className="w-full h-[345px] object-cover" src={cover} alt="Imagen" />
				</picture>

				<main className="sm:w-1/2 lg:w-auto p-4 lg:flex lg:flex-col lg:justify-between lg:h-full bg-white">
					{children}

					<Button.To url={url} className="py-2 max-w-[140px] block mx-auto">
						{textBtn}
					</Button.To>
				</main>
			</article>
		</div>
	);
};
