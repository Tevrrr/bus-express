/** @format */

import type { NextPage } from 'next';
import ContactCard from './ContactCard';
interface ContactListProps {}

const ContactList: NextPage<ContactListProps> = () => {
	return (
		<div className=' flex flex-col gap-8 justify-between grow'>
			<ContactCard phone='+380 99 258 37 13' />
      <ContactCard phone='+380 99 258 37 31' />
      <div className='grow'></div>
		</div>
	);
};

export default ContactList;
