import { useTranslation } from "react-i18next";
import { Banner } from "../components/Banner";
import { Container } from "../components/Container";
import Text from "../components/Text";
import { CardExperience } from "./experiences/CardExperience";

import { useEffect, useState } from "react";
import { _PATH_API, _PATH_SOURCES } from "../constants/constants";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'

export const ExperiencesDetail = () => {
	const { t, i18n } = useTranslation();
	let { id } = useParams();

	const [data, setData] = useState()

	useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                _PATH_API + "api/experience/"+id,
            );
    
			const d = response.data;
			d.translations.forEach((translation) => {
                let locale = translation.locale;
                d[locale] = translation;
            });

			console.log(d)

            setData(d);
        }
        fetchData();
    }, []);

	if(!data) return '';

	return (
		<>
			<Banner className="max-h-[500px]" src={_PATH_SOURCES + data.cover} />

			<section className="py-10 lg:py-16 xl:py-24">
					<Text.TitleSections className="mb-10 md:mb-20 text-center">{t("experiences.title")}</Text.TitleSections>
				<Container className="max-w-5xl px-5 md:px-10">
					{parse(data[i18n.language].content)}
				</Container>
			</section>
		</>
	);
};
