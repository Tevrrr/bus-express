/** @format */

import Contatcts from '@/components/Contacts';
import Header from '@/components/Header';
import OurAdvantages from '@/components/OurAdvantages';
import OurCars from '@/components/OurCars';
import OurServices from '@/components/OurServices';

export default function Home() {
	return (
		<div className=' overflow-hidden min-h-screen w-full flex flex-col items-center justify-center'>
			<Header />
			<main className='w-full flex flex-col items-center justify-center'>
				<OurServices />
				<OurAdvantages />
			</main>
			<OurCars />
			<Contatcts />
		</div>
	);
}
