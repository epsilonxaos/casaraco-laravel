import { useTranslation } from 'react-i18next'
import { Amenities } from '../../components/Amenities'
import Button from '../../components/Button'
import { Container } from '../../components/Container'
import Text from '../../components/Text'

export const Bienvenida = () => {
	const { t } = useTranslation()

	return (
		<section
			className='bg-cover bg-left-top bg-no-repeat py-10 pb-10 text-center md:pb-24'
			style={{ backgroundImage: 'url(/img/home/bg-seccion2.jpg)' }}>
			<Container>
				<img
					src='/img/logo-menu.png'
					alt='icono'
					className='mx-auto mb-4 w-[45px] md:w-[100px]'
				/>

				<Text.Title className='mb-5'>{t('home.title')}</Text.Title>

				{/* <img src="/img/logotipo.png" className="mx-auto w-[150px] md:w-auto mb-10 " alt="Casa Raco" /> */}

				<Text className='mx-auto mb-6 max-w-[850px]'>{t('home.desc')}</Text>

				<Amenities />

				{/* <Button.To
					url='/casa-raco'
					className='mx-auto block w-[141px] border-black bg-transparent text-black hover:bg-black hover:text-crema'>
					{t('verMas')}
				</Button.To> */}
			</Container>
		</section>
	)
}
