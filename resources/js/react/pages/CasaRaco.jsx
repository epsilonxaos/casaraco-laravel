import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";

export const CasaRaco = () => {
	const { t } = useTranslation();
	return (
		<>
			<Banner src={"/img/casa-raco/banner.jpg"} />

			<section className="pt-10 lg:pt-16 xl:pt-24">
				<div className="relative">
					<Container className="max-w-6xl text-center">
						<Text.TitleSections className="max-w-[610px] mx-auto mb-12 md:mb-16">{t("about.title")}</Text.TitleSections>
						<Text className="mb-6 font-bold">{t("about.desc1")}</Text>
						<Text>{t("about.desc2")}</Text>

						<div className="grid grid-cols-1 md:grid-cols-2 md:pt-10 md:items-center gap-[80px] md:gap-6 pb-8 md:pb-0">
							<picture className="col-span-1 relative top-[45px]">
								<img src="/img/casa-raco/1.jpg" className="mx-auto w-max md:min-h-[550px] object-cover" alt="Relajacion" />
							</picture>
							<div className="col-span-1 text-center md:text-left">
								<Text className="mb-3">{t("about.desc3")} </Text>
								<Text className="mb-3">{t("about.desc4")}</Text>
								<Text className="mb-3">{t("about.desc5")}</Text>
							</div>
						</div>

						<div className="bg-cafe h-[40px] hidden md:block w-full md:absolute bottom-0 left-0 -z-10"></div>
					</Container>
				</div>
				<div className="bg-cafe h-[40px] md:h-[100px] w-full"></div>
				{/* //Todo: reducir espacios en los bloques cafes de las secciones */}
				<blockquote className="bg-cafe text-white pb-10 lg:pb-16 xl:pb-24 not-italic">
					<Container className="max-w-6xl text-center">
						<Text className="mb-10">{t("about.desc6")}</Text>
						<Text className="font-bold">{t("about.desc7")}</Text>
					</Container>
				</blockquote>
			</section>

			<Banner src={"/img/casa-raco/banner2.jpg"} className="max-h-[600px]" />
		</>
	);
};
