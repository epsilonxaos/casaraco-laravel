import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Text from "../../components/Text";

export const Boardroom = () => {
	const { t } = useTranslation();

	return (
		<section className="grid grid-cols-1 md:grid-cols-2">
			<picture className="col-span-1 order-2">
				<img src="/img/home/imagen1.jpg" className="max-h-[150px] md:max-h-[400px] h-full w-full object-center object-cover" alt="Sala corporativa" />
			</picture>

			<div className="col-span-1 px-4 min-h-[250px] py-0 md:min-h-[350px] bg-no-repeat md:py-20 bg-cover bg-right-bottom text-center flex items-center order-1" style={{ backgroundImage: "url(/img/home/bg-sala.jpg)" }}>
				<div className="max-w-[460px] mx-auto">
					<Text.TitleSections className="mb-3">{t("home.boardroom.title")}</Text.TitleSections>
					<Text className="mb-5">{t("home.boardroom.desc")}</Text>
					<Button.To url="/sala-de-juntas" className="block max-w-[140px] mx-auto bg-transparent">
						{t("verMas")}
					</Button.To>
				</div>
			</div>
		</section>
	);
};
