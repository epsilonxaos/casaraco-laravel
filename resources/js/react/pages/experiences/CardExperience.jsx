import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Text from '../../components/Text'

export const CardExperience = ({ cover, title, url = '' }) => {
	return (
		<div className='col-span-1 pb-6 lg:pb-10'>
			<article className='h-full max-w-[460px] shadow-card'>
				<picture>
					<img
						src={cover}
						className='h-[300px] w-full object-cover md:h-[430px]'
						alt=''
					/>
				</picture>

				<main className='px-4 pt-4'>
					<Text>{title}</Text>
					<Link to={url}>
						<Button className='my-3'>Ver más</Button>
					</Link>
				</main>
			</article>
		</div>
	)
}
