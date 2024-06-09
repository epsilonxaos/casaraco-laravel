import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import { Container } from "../../components/Container";
import Text from "../../components/Text";

import { useEffect, useState } from "react";
import { _PATH_API, _PATH_SOURCES } from "../../constants/constants";

export const Experiences = () => {
	const { t } = useTranslation();
	const [data, setData] = useState([])

	useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                _PATH_API + "api/experiences/last",
            );
    
            setData(response.data);
        }
        fetchData();
    }, []);

	if(data.length === 0) return ''

	return (
		<section className="py-10 lg:py-16 xl:pb-32 xl:pt-40">
			<Container className="px-0">
				<div className="grid grid-cols-1 md:grid-cols-3 md:items-center">
					<div className="col-span-1 px-4 py-10 text-center lg:pr-10">
						<div className="max-w-[350px] ml-auto">
							<Text.TitleSections className="mb-3">{t("home.experience.title")}</Text.TitleSections>
							<Text className="mb-5">{t("home.experience.desc")}</Text>

							<Button.To url="/experiencias" className="block max-w-[140px] mx-auto">
								{t("verMas")}
							</Button.To>
						</div>
					</div>
					<div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-2 lg:gap-4 md:grid-cols-3">
						{data.map((item) => 
							<picture className="col-span-1">
								<img src={_PATH_SOURCES + item.cover} className="h-[200px] md:h-[500px] lg:h-[650px] object-cover w-full" alt="experiencia 1" />
							</picture>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};
