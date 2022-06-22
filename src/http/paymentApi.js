import { $authHost, $host } from ".";

export const pay = async (formData) => {
	const { data } = await $authHost.post("api/payment/", formData);
	return data;
};
