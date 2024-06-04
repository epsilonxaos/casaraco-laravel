import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Offers = () => {
	const { t } = useTranslation();

	return (
		<section className="py-10 lg:py-16 xl:pt-[60px] xl:pb-20 text-center">
			<Container>
				<Text.TitleSections className="mb-6">{t("home.offsers.title")}</Text.TitleSections>

				<Text className="mb-10 lg:mb-16 xl:mb-[60px]">{t("home.offsers.desc")}</Text>
			</Container>

			<div className="relative">
				<div className="bg-cafe w-full h-[160px] absolute top-1/2 -translate-y-1/2 hidden lg:block" />

				<div className="max-w-[1500px] grid lg:grid-cols-3 grid-cols-1 pt-10 relative z-10 mx-auto">
					<CardOffer cover="/img/home/imagen1.jpg" url={"/promociones"}>
						<Text className="text-black mb-4">{t("home.offsers.card1")}</Text>
					</CardOffer>
					<CardOffer cover="/img/home/imagen2.jpg" url={"/promociones"}>
						<Text className="text-black mb-4">{t("home.offsers.card2")}</Text>
					</CardOffer>
					<CardOffer cover="/img/home/imagen3.jpg" url={"/promociones"}>
						<Text className="text-black mb-4">{t("home.offsers.card3")}</Text>
					</CardOffer>
				</div>
			</div>
		</section>
	);
};

const CardOffer = ({ cover, url, children }) => {
	const { t } = useTranslation();

	return (
		<div className="col-span-1 px-4 mb-8">
			<article className="shadow-lg sm:flex sm:items-center lg:flex-col h-full">
				<picture className="bg-slate-100 mb-3 sm:mb-0 lg:mb-4 sm:w-1/2 lg:w-full">
					<img className="w-full h-[345px] object-cover" src={cover} alt="Imagen" />
				</picture>

				<main className="sm:w-1/2 lg:w-auto p-4 lg:flex lg:flex-col lg:justify-between lg:h-full">
					{children}

					<Button.To url={url} className="py-2 max-w-[140px] block mx-auto">
						{t("verMas")}
					</Button.To>
				</main>
			</article>
		</div>
	);
};
