import { ICall } from '@/common/types/ICall';
import axios from "axios";

export const postCall = async (
	call: ICall,
	props?: (value: {} | null, errorMessage?: string) => void
): Promise<{} | null> => {
	try {
		const URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

        const response = await axios.post(`${URL}/api/call`, { call });
        
		if (props) props(response.data.call);
		return response.data.call;
	} catch (error: any) {
		console.log(error);
		if (props) props(null, error.response.data.message);
		return null;
	}
};