import { Container } from "./Container";

export const SectionBrownAndWhite = ({ header, main, footer, cover, bg }) => {
	return (
		<section className="">
			<div className="pt-10 lg:pt-16 xl:pt-24 relative bg-crema bg-blend-darken bg-no-repeat bg-cover bg-top" style={{ backgroundImage: "url(" + bg + ")" }}>
				<Container className="max-w-6xl text-center">
					{header}

					<div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-[80px] md:gap-6 pb-8 md:pb-0">
						<picture className="col-span-1 relative top-[45px]">
							<img src={cover} className="mx-auto w-max h-full md:min-h-[550px] object-cover" alt="Relajacion" />
						</picture>
						<div className="col-span-1 text-center md:text-left flex items-center h-full xl:pl-8">
							<div>{main}</div>
						</div>
					</div>

					<div className="bg-cafe h-[40px] hidden md:block w-full md:absolute bottom-0 left-0 -z-10"></div>
				</Container>
			</div>

			<div className="bg-cafe h-[100px] w-full"></div>

			<blockquote className="bg-cafe text-white pb-10 lg:pb-16 xl:pb-24 not-italic">
				<Container className="max-w-6xl text-center">{footer}</Container>
			</blockquote>
		</section>
	);
};
