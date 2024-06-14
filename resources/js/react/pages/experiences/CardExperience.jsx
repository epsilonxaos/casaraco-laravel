import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Text from "../../components/Text";

export const CardExperience = ({ cover, title, url ='' }) => {
	return (
		<div className="col-span-1 pb-6 lg:pb-10">
			<article className="max-w-[460px] shadow-card">
				<picture>
					<img src={cover} className="h-[300px] md:h-[430px] w-full object-cover" alt="" />
				</picture>

				<main className="pt-4 px-4">
					<Text>{title}</Text>
					<Link to={url}>
						<Button className="my-3">Ver más</Button>
					</Link>
				</main>
			</article>
		</div>
	);
};
