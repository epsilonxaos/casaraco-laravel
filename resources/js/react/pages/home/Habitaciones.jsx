import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

export const Habitaciones = () => {
	return (
		<section className="bg-no-repeat bg-right-top bg-cover md:py-10 lg:py-16" style={{ backgroundImage: "url(/img/home/fondo-habitaciones.jpg)" }}>
			<Container className="max-w-[1500px] px-0">
				<div className="grid grid-cols-2 md:grid-cols-2 md:gap-2 relative">
					<picture className="col-span-1">
						<img src="/img/home/imagen2.jpg" className="h-[450px] md:h-[640px] object-cover" alt="" />
					</picture>

					<picture className="col-span-1">
						<img src="/img/home/imagen2-1.jpg" className="h-[450px] md:h-[640px] object-cover" alt="" />
					</picture>


					<CardHabitacion />
				</div>
			</Container>
		</section>
	);
};

const CardHabitacion = () => {
	const { t } = useTranslation();

	return (
		<div className=" md:absolute col-span-2 bg-[#d6c0ac] relative text-center pt-[80px] pb-10 w-full md:max-w-[365px] md:py-7 px-5 md:px-7 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:min-h-[515px]">
			<img src="/img/home/Sello.png" alt="Sello" className="size-[118px] absolute -top-[60px] left-0 right-0 mx-auto md:hidden" />
			<img src="/img/home/Sello.png" alt="Sello" className="size-[118px] mx-auto hidden md:block mb-4" />

			<Text.TitleSections className="text-black mb-4">{t("home.rooms.title")}</Text.TitleSections>
			<Text className="text-black mb-8">{t("home.rooms.desc")}</Text>

			<Button.Link blank={false} url="https://hotels.cloudbeds.com/reservation/aEkhze" className="bg-transparent block max-w-[140px] mx-auto border-black text-black hover:bg-black hover:text-white">
				{t("verMas")}
			</Button.Link>
		</div>
	);
};
