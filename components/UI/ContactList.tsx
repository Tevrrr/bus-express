/** @format */

import type { NextPage } from 'next';
import ContactCard from './ContactCard';
interface ContactListProps {}

const ContactList: NextPage<ContactListProps> = () => {
	return (
		<div className='flex flex-col gap-8 justify-between grow'>
			<ContactCard phone='+380 12 345 67 89' />
			<ContactCard phone='+380 12 345 67 89' />
			<ContactCard phone='+380 12 345 67 89' />
			
		</div>
	);
};

export default ContactList;
