import axios from 'axios';

const BASE_URL = '/api'

export const callApi = async ({ path, method = 'GET', token }, body = null) => {
	const axiosConfig = {
		url: `${BASE_URL + path}`,
		method: `${method}`,
		data: body
	};

	if (token) {
		axiosConfig.headers = { Authorization: `Bearer ${token}` };
	}

	try {
		const { data } = await axios(axiosConfig);
		return data;
	} catch ({ name, message }) {
		console.error({ name, message });
		return { name, message };
	}
};
