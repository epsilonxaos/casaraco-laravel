import { Bienvenida } from './home/Bienvenida'
import { Boardroom } from './home/Boardroom'
import { Coahuila } from './home/Coahuila'
import { Croquis } from './home/Croquis'
import { Experiences } from './home/Experinces'
import { Gastronomy } from './home/Gastronomy'
import { Habitaciones } from './home/Habitaciones'
import { Offers } from './home/Offers'
import { Video } from './home/Video'
import { Sandra } from './home/Sandra'

export default function Home() {
	return (
		<>
			<Video />
			<Bienvenida />
			<hr className='mx-auto mb-10 w-[90%] border-t border-t-cafe md:hidden' />
			<Offers />
			<Habitaciones />

			<Sandra />

			<hr className='mx-auto my-10 w-[90%] border-t border-t-cafe md:hidden' />
			<Experiences />
			<Gastronomy />
			<hr className='mx-auto mb-10 w-[90%] border-t border-t-cafe md:hidden' />
			<Boardroom />
			<hr className='mx-auto mb-10 w-[90%] border-t border-t-cafe md:hidden' />
			<Coahuila />
			<hr className='mx-auto mt-10 w-[90%] border-t border-t-cafe md:hidden' />
			<Croquis />
		</>
	)
}
