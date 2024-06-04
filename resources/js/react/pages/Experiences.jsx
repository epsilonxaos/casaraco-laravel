import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";
import { CardExperience } from "./experiences/CardExperience";

export const Experiences = () => {
	const { t } = useTranslation();

	return (
		<>
			<Banner src={"/img/experiencias/banner.jpg"} />

			<section className="py-10 lg:py-16 xl:py-24">
				<Container className="max-w-7xl text-center">
					<Text.TitleSections className="mb-2">{t("experiences.title")}</Text.TitleSections>
					<Text className="max-w-[860px] mx-auto mb-10">{t("experiences.desc")}</Text>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{Array.from({ length: 6 }, (_, index) => (
							<CardExperience cover={"/img/experiencias/banner.jpg"} />
						))}
					</div>
				</Container>
			</section>
		</>
	);
};
