import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { SectionBrownAndWhite } from "../components/SectionBrownAndWhite";
import Text from "../components/Text";

export const Gastronomy = () => {
	const { t } = useTranslation();

	return (
		<>
			<Banner src={"/img/gastronomy/banner.jpg"} />

			<SectionBrownAndWhite
				header={
					<>
						<Text.TitleSections className="max-w-[510px] mx-auto mb-10 md:mb-12">{t("gastronomy.title")}</Text.TitleSections>
						<Text className="mb-6">{t("gastronomy.text1")}</Text>
						<Text>{t("gastronomy.text2")}</Text>
					</>
				}
				cover={"/img/gastronomy/foto.jpg"}
				bg={"/img/gastronomy/bg.jpg"}
				main={
					<>
						<Text className="mb-3">{t("gastronomy.text3")}</Text>
						<Text className="mb-3">{t("gastronomy.text4")}</Text>
						<Text className="uppercase">{t("gastronomy.text5")}</Text>
						<Text className="mb-3 uppercase">{t("gastronomy.text6")}</Text>
						<Text className="mb-3">{t("gastronomy.text7")}</Text>
						<Text className="mb-3">{t("gastronomy.text8")}</Text>
					</>
				}
				footer={
					<>
						<Text.TitleSections className="text-white mb-4">{t("gastronomy.title2")}</Text.TitleSections>
						<Text>{t("gastronomy.desc2")}</Text>
					</>
				}
			/>
		</>
	);
};
