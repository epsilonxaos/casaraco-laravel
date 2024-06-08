import { useTranslation } from "react-i18next";
import Text from "./Text";

export const Amenities = () => {
	const { t } = useTranslation();

	return (
		<ul className="flex flex-wrap lg:items-start md:justify-center lg:gap-8 mb-8">
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto lg:mb-0 mb-8">
				<img src="/img/icons/sala-juntas.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.1")}</Text>
			</li>
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto lg:mb-0 mb-8">
				<img src="/img/icons/aire-ac.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.2")}</Text>
			</li>
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto lg:mb-0 mb-8">
				<img src="/img/icons/desayuno.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.3")}</Text>
			</li>
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto lg:mb-0 mb-8">
				<img src="/img/icons/maquina-cafe.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.4")}</Text>
			</li>
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto lg:mb-0 mb-8">
				<img src="/img/icons/zona-jardin.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.5")}</Text>
			</li>
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto lg:mb-0 mb-8">
				<img src="/img/icons/comedor.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.6")}</Text>
			</li>
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto md:mb-0 mb-8">
				<img src="/img/icons/yoga.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.7")}</Text>
			</li>
			<li className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-auto md:mb-0 mb-8">
				<img src="/img/icons/masaje.svg" className="size-[42px] mb-3 object-contain block mx-auto" alt="Aire acondicionado" />
				<Text className="text-black !leading-5">{t("amenidad.8")}</Text>
			</li>
		</ul>
	);
};
