import { useScript } from '@uidotdev/usehooks'
import { useEffect, useRef } from 'react'
import { iframeOpener } from '../services/Cloudbed'
// import { iframeOpener } from '../plugins/cloudbed'

const ButtonCloudbed = () => {
	const ref = useRef()

	useEffect(() => {
		if (ref) {
			console.log(ref.current)
		}
	}, [ref])

	return (
		<button
			type='button'
			ref={ref}
			className='min-w-[80px] rounded-xl border-2 border-cafe bg-crema px-4 py-2 text-xs uppercase text-cafe transition-colors hover:bg-cafe hover:text-white md:min-w-[120px] md:text-sm  xl:min-w-[140px]'
			// data-be-url='https://hotels.cloudbeds.com/reservation/aEkhze'
			onClick={() => iframeOpener('https://hotels.cloudbeds.com/reservation/aEkhze')}>
			Reservar
		</button>
	)
}

export default ButtonCloudbed
