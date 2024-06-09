import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";
import { CardExperience } from "./experiences/CardExperience";

import { useEffect, useState } from "react";
import { _PATH_API, _PATH_SOURCES } from "../constants/constants";

export const Experiences = () => {
	const { t, i18n } = useTranslation();

	const [data, setData] = useState([])

	useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                _PATH_API + "api/experiences",
            );
    
			const d = response.data;
			d.forEach((item) => {
				item.translations.forEach((l) => {
					const locale = l.locale
					if(locale) item[locale] = l;
				})
			});

            setData(d);
        }
        fetchData();
    }, []);

	// if(data.length === 0) return ''

	return (
		<>
			<Banner src={"/img/experiencias/banner.jpg"} />

			<section className="py-10 lg:py-16 xl:py-24">
				<Container className="max-w-7xl text-center">
					<Text.TitleSections className="mb-2">{t("experiences.title")}</Text.TitleSections>
					<Text className="max-w-[860px] mx-auto mb-10">{t("experiences.desc")}</Text>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{data.map(item => (
							<CardExperience cover={_PATH_SOURCES + item.cover} title={item[i18n.language].title} url={_PATH_API+'experiencias/'+item.id} />
						))}
					</div>
				</Container>
			</section>
		</>
	);
};
