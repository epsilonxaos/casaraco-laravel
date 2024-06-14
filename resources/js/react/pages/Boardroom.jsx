import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { SectionBrownAndWhite } from "../components/SectionBrownAndWhite";
import Text from "../components/Text";
import Button from "../components/Button";
import { PiTelevisionSimple } from "react-icons/pi";
import { LiaToiletSolid } from "react-icons/lia";
import { MdTableRestaurant } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";

export const Boardroom = () => {
	const { t } = useTranslation();

	return (
		<>
			<Banner src={"/img/boardroom/banner.jpg"} />

			<SectionBrownAndWhite
				header={
					<>
						<Text className="font-bold">{t('soon')}</Text>
						<Text.TitleSections className="max-w-[850px] mx-auto mb-6 md:mb-12">{t("boardroom.title")}</Text.TitleSections>
						<Text className="mb-0">{t("boardroom.text1")}</Text>
					</>
				}
				cover={"/img/boardroom/foto.jpg"}
				bg={"/img/boardroom/bg.jpg"}
				main={
					<>
						
						<Text className="mb-3">{t("boardroom.text2")}</Text>
						<Text className="mb-3 font-bold">{t("boardroom.text3")}</Text>
						<ul className="md:pl-10">
							<li className="mb-3 relative">
								<PiTelevisionSimple className="mx-auto md:absolute -left-10 top-0" size={30} />
								<Text className="mb-3">{t("boardroom.text4")}</Text>
							</li>
							<li className="mb-3 relative">
								<LiaToiletSolid className="mx-auto md:absolute -left-10 top-0" size={30} />
								<Text className="mb-3">{t("boardroom.text5")}</Text>
							</li>
							<li className="mb-3 relative">
								<MdTableRestaurant className="mx-auto md:absolute -left-10 top-0" size={30} />
								<Text className="mb-3">{t("boardroom.text6")}</Text>
							</li>
							<li className="mb-3 relative">
								<PiCoffeeFill className="mx-auto md:absolute -left-10 top-0" size={30} />
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
