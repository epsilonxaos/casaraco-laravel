import { useTranslation } from "react-i18next";
import { Amenities } from "../../components/Amenities";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Bienvenida = () => {
	const { t } = useTranslation();

	return (
		<section className="text-center py-10 bg-no-repeat bg-cover bg-left-top" style={{ backgroundImage: "url(/img/home/bg-seccion2.jpg)" }}>
			<Container>
				<img src="/img/logo-menu.png" alt="icono" className="mx-auto w-[100px] mb-4" />

				<Text.Title className="mb-5">{t("home.title")}</Text.Title>

				<img src="/img/logotipo.png" className="mx-auto mb-9" alt="Casa Raco" />

				<Text className="max-w-[850px] mx-auto mb-6">{t("home.desc")}</Text>

				<Amenities />

				<Button.To url="/casa-raco" className="border-black text-black bg-transparent hover:bg-black hover:text-crema w-[141px] block mx-auto">
					{t("verMas")}
				</Button.To>
			</Container>
		</section>
	);
};
