/** @format */

import type { NextPage } from 'next';
import Image from 'next/image';
import ImageContainer from './UI/ImageContainer';

interface OurCarsProps {}

const OurCars: NextPage<OurCarsProps> = () => {
	return (
		<div className='container static -translate-y-10 flex flex-col items-center'>
			<h2>Наши автомобили</h2>
			<div className='flex flex-col lg:flex-row flex-wrap  gap-2 md:gap-7 pt-8 md:pt-16 w-full px-4'>
				<div className='flex gap-2 md:gap-7 grow w-full shrink-0'>
					<ImageContainer src='/ford-1.jpg' id={0} />
					<ImageContainer src='/ford-2.jpg' id={1} />
				</div>
				<div className='flex flex-col lg:flex-row gap-2 md:gap-7 grow'>
					<div className='flex flex-row lg:flex-col gap-2 md:gap-7 grow'>
						<ImageContainer src='/ford-3.jpg' id={2} />
						<ImageContainer src='/ford-4.jpg' id={3} />
					</div>
					<ImageContainer
						id={4}
						src='/ford-5.jpg'
						className='!h-80 md:!h-[41.75rem]'
					/>
				</div>
			</div>
		</div>
	);
};

export default OurCars;
