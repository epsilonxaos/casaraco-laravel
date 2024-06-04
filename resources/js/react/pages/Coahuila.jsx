import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { SectionBrownAndWhite } from "../components/SectionBrownAndWhite";
import Text from "../components/Text";

export const Coahuila = () => {
	const { t } = useTranslation();

	return (
		<>
			<Banner src={"/img/coahuila/banner.jpg"} />

			<SectionBrownAndWhite
				header={
					<>
						<Text.TitleSections className="max-w-[610px] mx-auto mb-10 md:mb-12">{t("parras.title")}</Text.TitleSections>
						<Text className="mb-6">{t("parras.text1")}</Text>
						<Text>{t("parras.text2")}</Text>
					</>
				}
				cover={"/img/coahuila/foto.jpg"}
				bg={"/img/coahuila/bg.jpg"}
				main={
					<>
						<Text className="mb-3 uppercase">{t("parras.text3")}</Text>
						<Text className="mb-3">{t("parras.text4")}</Text>
						<Text className="mb-3 uppercase">{t("parras.text5")}</Text>
						<Text className="mb-3">{t("parras.text6")}</Text>
						<Text className="mb-3 uppercase">{t("parras.text7")}</Text>
						<Text className="mb-3">{t("parras.text8")}</Text>
					</>
				}
				footer={
					<>
						<Text.TitleSections className="text-white mb-4">{t("parras.title2")}</Text.TitleSections>
						<Text>{t("parras.desc2")}</Text>
					</>
				}
			/>
		</>
	);
};
