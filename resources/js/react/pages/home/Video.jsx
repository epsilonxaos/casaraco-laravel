export const Video = () => {
	return (
		<section className="w-full max-h-[650px] overflow-hidden">
			<video className="w-full h-auto bg-black object-cover object-center" muted autoPlay loop>
				<source src="/video/video.mp4" type="video/mp4" />
			</video>
		</section>
	);
};
