import type { NextPage } from 'next'
import PanelOrderCall from './UI/PanelOrderCall';
import ContactList from './UI/ContactList';
import Divider from './UI/Divider';

interface ContatctsProps {};

const Contatcts: NextPage<ContatctsProps> = () => {

    return (
		<div className='container px-4 pt-8 flex justify-center'>
			<div className=' md:bg-neutral rounded-3xl w-full flex xl:flex-row flex-col items-center xl:justify-around md:p-10 gap-16 xl:gap-4 mb-4'>
				<div className='flex flex-col max-w-[600px] w-full gap-8 xl:gap-24'>
					<h3 className=' text-center'>Закажите наш звонок</h3>
					<PanelOrderCall />
				</div>
				<Divider text='ИЛИ' />
				<div className='flex flex-col max-w-[600px] w-full gap-8 xl:gap-24'>
					<h3 className=' text-center'>Свяжитесь с нами сами</h3>
					<ContactList />
				</div>
			</div>
		</div>
	);
}

export default Contatcts;