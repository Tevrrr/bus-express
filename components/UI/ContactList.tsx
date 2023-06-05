/** @format */
'use client';
import type { NextPage } from 'next';
import { FaViber, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import ContactLink from './ContactLink';
interface ContactListProps {}

const ContactList: NextPage<ContactListProps> = () => {
	return (
		<div className='flex flex-col gap-8 justify-between grow'>
			<div className='flex flex-col p-8 gap-4 bg-accent text-accent-content rounded-2xl'>
				<div className='flex flex-col-reverse sm:flex-row items-center justify-between'>
					<h4>+ 380 12 345 67 89</h4>
					<h4>Имя Имя</h4>
				</div>
				<div className='flex flex-col sm:flex-row gap-4'>
					<ContactLink icont={<FaViber />} text='Viber' />
					<ContactLink icont={<FaTelegram />} text='Telegram' />
					<ContactLink icont={<FaWhatsapp />} text='WhatsApp' />
				</div>
			</div>
			<div className='flex flex-col p-8 gap-4 bg-accent text-accent-content rounded-2xl'>
				<div className='flex flex-col-reverse sm:flex-row items-center justify-between'>
					<h4>+ 380 12 345 67 89</h4>
					<h4>Имя Имя</h4>
				</div>
				<div className='flex flex-col sm:flex-row gap-4'>
					<ContactLink icont={<FaViber />} text='Viber' />
					<ContactLink icont={<FaTelegram />} text='Telegram' />
					<ContactLink icont={<FaWhatsapp />} text='WhatsApp' />
				</div>
			</div>
			<div className='flex flex-col p-8 gap-4 bg-accent text-accent-content rounded-2xl'>
				<div className='flex flex-col-reverse sm:flex-row items-center justify-between'>
					<h4>+ 380 12 345 67 89</h4>
					<h4>Имя Имя</h4>
				</div>
				<div className='flex flex-col sm:flex-row gap-4'>
					<ContactLink icont={<FaViber />} text='Viber' />
					<ContactLink icont={<FaTelegram />} text='Telegram' />
					<ContactLink icont={<FaWhatsapp />} text='WhatsApp' />
				</div>
			</div>
		</div>
	);
};

export default ContactList;
