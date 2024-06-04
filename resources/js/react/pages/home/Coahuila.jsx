import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Text from "../../components/Text";

export const Coahuila = () => {
	const { t } = useTranslation();

	return (
		<section className="grid grid-cols-1 md:grid-cols-2">
			<picture className="col-span-1 order-2 md:order-1">
				<img src="/img/home/coahuila.jpg" className="max-h-[700px] h-full w-full object-center object-cover" alt="PARRAS COAHUILA" />
			</picture>

			<div className="col-span-1 px-4 bg-no-repeat min-h-[350px] py-20 bg-cover bg-right-bottom text-center flex items-center order-1 md:order-2" style={{ backgroundImage: "url(/img/home/bg-coahuila.jpg)" }}>
				<div className="max-w-[460px] mx-auto">
					<Text.TitleSections className="mb-5">{t("home.coahuila.title")}</Text.TitleSections>
					<Button.To url="/parras-coahuila" className="block max-w-[140px] mx-auto bg-transparent">
						{t("verMas")}
					</Button.To>
				</div>
			</div>
		</section>
	);
};
