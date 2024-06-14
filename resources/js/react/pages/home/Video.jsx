export const Video = () => {
	return (
		<section className="w-full max-h-[650px] overflow-hidden">
			<picture className="md:hidden">
				<img src="/img/home/banner.png" className="h-[250px] object-cover object-center w-full" alt="Casa Raco" />
			</picture>
			
			<video className="hidden pointer-events-none select-none md:block w-full min-h-[250px] h-auto bg-black object-cover object-center" muted autoPlay loop>
				<source src="/video/video.mp4" type="video/mp4" />
			</video>
		</section>
	);
};
