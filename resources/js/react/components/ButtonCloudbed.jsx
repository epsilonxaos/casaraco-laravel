import { iframeOpener } from '../services/Cloudbed'

const ButtonCloudbed = () => {
	return (
		<button
			type='button'
			className='min-w-[80px] rounded-xl border-2 border-cafe bg-crema px-4 py-2 text-xs uppercase text-cafe transition-colors hover:bg-cafe hover:text-white md:min-w-[120px] md:text-sm  xl:min-w-[140px]'
			onClick={() => iframeOpener('https://hotels.cloudbeds.com/reservation/aEkhze')}>
			Reservar
		</button>
	)
}

export default ButtonCloudbed
