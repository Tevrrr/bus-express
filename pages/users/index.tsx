/** @format */

import { UserContext } from '@/common/UserContext';
import { IUser } from '@/common/types/IUser';
import AddUserCard from '@/components/AdminPanel/AddUserCard';

import AdminContainer from '@/components/AdminPanel/AdminContainer';
import AuthController from '@/components/AdminPanel/AuthController';
import UserCard from '@/components/AdminPanel/UserCard';
import { getUsers } from '@/service/user';
import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

interface CallsProps {}

const Calls: NextPage<CallsProps> = ({}) => {
    const [users, setUsers] = useState<IUser[]>([])
	const { token } = useContext(UserContext);
    useEffect(() => {
        if(token) getUsers(token, (users) => {
            if (users) setUsers(users);
            console.log(users);
        })
	}, [token]);

	return (
		<AuthController>
			<AdminContainer title='Администраторы'>
				<div className=' min-h-screen flex flex-col items-center pt-32'>
                    <div className='container grow flex flex-wrap items-start px-4 '>
                        <AddUserCard/>
						{users?.map((item) => {
							return <UserCard User={item} key={item._id} />;
						})}
					</div>
					<div className='grow'></div>
				</div>
			</AdminContainer>
		</AuthController>
	);
};

export default Calls;
