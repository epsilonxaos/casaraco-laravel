import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { SectionBrownAndWhite } from "../components/SectionBrownAndWhite";
import Text from "../components/Text";
import Button from "../components/Button";

export const Boardroom = () => {
	const { t } = useTranslation();

	return (
		<>
			<Banner src={"/img/boardroom/banner.jpg"} />

			<SectionBrownAndWhite
				header={
					<>
						<Text.TitleSections className="max-w-[850px] mx-auto mb-10 md:mb-12">{t("boardroom.title")}</Text.TitleSections>
						<Text className="mb-6">{t("boardroom.text1")}</Text>
					</>
				}
				cover={"/img/boardroom/foto.jpg"}
				bg={"/img/boardroom/bg.jpg"}
				main={
					<>
						<Text className="mb-3">{t("boardroom.text2")}</Text>
						<Text className="mb-3">{t("boardroom.text3")}</Text>
						<ul className="list-disc pl-5">
							<li>
								<Text className="mb-3">{t("boardroom.text4")}</Text>
							</li>
							<li>
								<Text className="mb-3">{t("boardroom.text5")}</Text>
							</li>
							<li>
								<Text className="mb-3">{t("boardroom.text6")}</Text>
							</li>
							<li>
								<Text className="mb-3">{t("boardroom.text7")}</Text>
							</li>
						</ul>

						<div className="text-center mb-4">
							<Button.Link className={"inline-block mt-6"} url={"https://wa.me/+18553409046"}>
								{t("masInfo")}
							</Button.Link>
						</div>
					</>
				}
				footer={
					<>
						<Text.TitleSections className="text-white mb-4">{t("boardroom.title2")}</Text.TitleSections>
						<Text>{t("boardroom.desc2")}</Text>
					</>
				}
			/>
		</>
	);
};
