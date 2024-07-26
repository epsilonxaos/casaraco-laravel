// import Swiper core and required modules
import { Autoplay, EffectFade } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const galeria = [2, 3, 4, 5, 6, 7, 8]

export const Gallery = () => {
	return (
		<Swiper
			modules={[Autoplay, EffectFade]}
			spaceBetween={0}
			slidesPerView={1}
			autoplay
			loop
			effect='fade'>
			{galeria.map((item, idx) => (
				<SwiperSlide key={'galeria-home-' + idx}>
					<figure>
						<img
							className='h-[450px] w-full object-cover'
							src={'/img/home/galeria/' + item + '.jpg'}
							alt=''
						/>
					</figure>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
