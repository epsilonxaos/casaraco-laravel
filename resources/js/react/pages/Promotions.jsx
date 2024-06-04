import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";
import { PromotionCard } from "./promotions/PromotionCard";

export const Promotions = () => {
	const { t } = useTranslation();

	return (
		<>
			<Banner src={"/img/promociones/banner.jpg"} />

			<section className="py-10 lg:py-16 xl:py-24">
				<Container>
					<div className="mx-auto text-center">
						<Text.TitleSections className="mb-2">{t("offsers.title")}</Text.TitleSections>
						<Text className="mb-10">{t("offsers.desc")}</Text>
					</div>
				</Container>

				<Container className="max-w-[1200px]">
					<PromotionCard cover={"/img/promociones/1.jpg"} url="https://wa.me/+18553409046">
						<Text className="mb-4">{t("offsers.card1.text1")}</Text>
						<Text>{t("offsers.card1.text2")}</Text>
					</PromotionCard>
					<PromotionCard cover={"/img/promociones/2.jpg"} blank={false} url="https://hotels.cloudbeds.com/es/reservation/aEkhze?currency=mxn">
						<Text className="mb-4">{t("offsers.card2.text1")}</Text>
						<Text>{t("offsers.card2.text2")}</Text>
					</PromotionCard>
					<PromotionCard cover={"/img/promociones/3.jpg"} url="https://wa.me/+18553409046">
						<Text className="mb-4">{t("offsers.card3.text1")}</Text>
						<Text>{t("offsers.card3.text2")}</Text>
					</PromotionCard>
				</Container>
			</section>
		</>
	);
};
