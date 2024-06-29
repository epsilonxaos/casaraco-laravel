import { useTranslation } from 'react-i18next'
import { Banner } from '../components/Banner'
import Text from '../components/Text'
import { Bienvenida } from './home/Bienvenida'
import { Boardroom } from './home/Boardroom'
import { Coahuila } from './home/Coahuila'
import { Croquis } from './home/Croquis'
import { Experiences } from './home/Experinces'
import { Gastronomy } from './home/Gastronomy'
import { Habitaciones } from './home/Habitaciones'
import { Offers } from './home/Offers'
import { Video } from './home/Video'

export default function Home() {
	const { t } = useTranslation()

	return (
		<>
			<Video />
			<Bienvenida />
			<Offers />
			<Habitaciones />

			<section className='relative md:pb-20 md:pt-10'>
				<img
					className='mx-auto hidden h-[450px] w-[90%] max-w-[1300px] object-cover md:block'
					src='/img/home/sandra.jpg'
					alt=''
				/>
				<img
					className='max-h-[500px] w-full object-cover md:hidden'
					src='/img/home/sandram.jpg'
					alt=''
				/>

				<div className='absolute left-1/2 top-1/2 w-[90%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-cafe bg-opacity-80 py-3 text-center text-white'>
					<Text className='mx-auto w-4/5 max-w-[400px]'>{t('text.add1')}</Text>
				</div>
			</section>

			<Experiences />
			<Gastronomy />
			<Boardroom />
			<Coahuila />
			<Croquis />
		</>
	)
}
