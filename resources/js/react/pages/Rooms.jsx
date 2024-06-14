import { useTranslation } from "react-i18next";
import { Amenities } from "../components/Amenities";
import { Banner } from "../components/Banner";
import Button from "../components/Button";
import { Container } from "../components/Container";
import Text from "../components/Text";

export const Rooms = () => {
	const { t, i18n } = useTranslation();

	return (
		<>
			<Banner src={"/img/rooms/banner.jpg"} />

			<section className="pt-8 md:py-10 lg:py-16 xl:py-24">
				<Container className="text-center">
					<img src="/img/logo-menu.png" alt="icono" className="mx-auto w-[60px] md:w-[100px] mb-4" />

					<Text.Title className="mb-5">{t("rooms.title")}</Text.Title>

					<Text className="max-w-[850px] mx-auto mb-10">{t("rooms.desc")}</Text>

					<Amenities />
				</Container>
			</section>

			<section className="py-8 md:py-24 bg-no-repeat bg-left-top bg-cover" style={{ backgroundImage: "url(/img/rooms/bg.png" }}>
				<Container className="max-w-7xl px-0 lg:px-4">
					<div className="relative z-[1] lg:flex lg:items-center mb-8 md:mb-24">
						<div className="h-full w-[90%] sm:w-[80%] lg:w-full lg:h-[85%] bg-[#d6c0ac] absolute top-0 lg:top-1/2 left-1/2 lg:left-0 max-lg:-translate-x-1/2 lg:-translate-y-1/2 -z-10"></div>

						<picture className="relative lg:w-[60%]">
							<img className="w-full" src="/img/rooms/room1.jpg" alt="Habitacion doble Queen" />

							<img src="/img/rooms/sello.png" className="absolute max-lg:-bottom-[55px] lg:top-1/2 lg:-translate-y-1/2 left-1/2 lg:left-auto lg:-right-[55px] max-lg:-translate-x-1/2 w-[110px]" alt="Sello" />
						</picture>

						<main className="text-black text-center py-8 pt-20 lg:pt-8 px-6 lg:w-[40%]">
							<div className="max-w-[290px] mx-auto">
								<Text.TitleSections className="text-black mb-5">{t("rooms.1.title")}</Text.TitleSections>
								<Text className="mb-6">{t("rooms.1.text")}</Text>
							</div>

							<a href="https://hotels.cloudbeds.com/reservation/aEkhze" target="_blank" rel="noopener noreferrer">
								<Button.Link className={"bg-cafe text-crema"} url={"https://hotels.cloudbeds.com/reservation/aEkhze"} blank={false}>
									{i18n.language == 'es' ? 'Reservar ahora' : 'Book now'}
								</Button.Link>
							</a>
						</main>
					</div>

					<div className="relative z-[1] lg:flex lg:items-center ">
						<div className="h-full w-[90%] sm:w-[80%] lg:w-full lg:h-[85%] bg-[#d6c0ac] absolute top-0 lg:top-1/2 left-1/2 lg:left-0 max-lg:-translate-x-1/2 lg:-translate-y-1/2 -z-10"></div>

						<picture className="relative lg:w-[60%] lg:order-2">
							<img className="w-full" src="/img/rooms/room2.jpg" alt="Habitacion doble Queen" />

							<img src="/img/rooms/sello.png" className="absolute max-lg:-bottom-[55px] lg:top-1/2 lg:-translate-y-1/2 left-1/2 lg:-left-[55px] max-lg:-translate-x-1/2 w-[110px]" alt="Sello" />
						</picture>

						<main className="text-black text-center py-8 pt-20 lg:pt-8 px-6 lg:w-[40%] lg:order-1">
							<div className="max-w-[290px] mx-auto">
								<Text.TitleSections className="text-black mb-5">{t("rooms.2.title")}</Text.TitleSections>
								<Text className="mb-6">{t("rooms.2.text")}</Text>
							</div>

							<Button.Link className={"bg-cafe text-crema"} url={"https://hotels.cloudbeds.com/reservation/aEkhze"} blank={false}>
							{i18n.language == 'es' ? 'Reservar ahora' : 'Book now'}
							</Button.Link>
						</main>
					</div>
				</Container>
			</section>
		</>
	);
};
