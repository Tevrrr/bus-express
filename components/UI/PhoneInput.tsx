/** @format */

import { postCall } from '@/service/call';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface PhoneInputProps {}
interface Inputs {
	phone: string;
};

const PhoneInput: NextPage<PhoneInputProps> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		postCall(data, (value, error) => {
			if (!value) {
				console.log(error);
				return;
			}
            console.log(value);
            toast.success('Телефон был успешно добавлен! Мы с вами свяжемся', {
				position: 'bottom-center'
			});
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=' relative flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full md:bg-base-300 text-base-content rounded-xl'>
			<input
				{...register('phone', {
					required: true,
					pattern: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
				})}
				className=' z-10 md:bg-opacity-0 bg-base-300  placeholder:text-base-content font-normal rounded-xl text-xl grow py-8 px-10 outline-none'
				type='tel'
				placeholder='Номер телефона'
			/>

			<div className=' overflow-hidden top-2 bottom-5 left-10 absolute text-error'>
				<motion.p
					initial={{
						translateY: -100,
					}}
					animate={{ translateY: errors.phone ? 0 : -100 }}>
					Укажит корректный номер телефона
				</motion.p>
			</div>

			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className=' rounded-xl text-3xl leading-7 text-accent-content bg-accent  py-7 px-8 drop-shadow-down'>
				Отправить
			</motion.button>
		</form>
	);
};

export default PhoneInput;
