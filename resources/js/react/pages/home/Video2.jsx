// BackgroundVideo.js
import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "../../css/vide.css";

const Video2 = ({ src }) => {
	const videoRef = useRef(null);
	const playerRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			playerRef.current = videojs(videoRef.current, {
				autoplay: true,
				muted: true,
				loop: true,
				controls: false,
				sources: [{ src, type: "video/mp4" }],
			});

			playerRef.current.ready(() => {
				playerRef.current.play().catch((error) => {
					console.error("Autoplay no se pudo iniciar:", error);
				});
			});

			return () => {
				if (playerRef.current) {
					playerRef.current.dispose();
				}
			};
		}
	}, [src]);

	return (
		// <section className="w-full max-h-[650px] overflow-hidden">
		// 	<video ref={videoRef} className="w-full h-auto bg-black object-cover object-center video-js vjs-default-skin video-background" />
		// </section>
		<div className="video-background-container">
			<video ref={videoRef} className="video-js vjs-default-skin video-background" />
		</div>
	);
};

export default Video2;
