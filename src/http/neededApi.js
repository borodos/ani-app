import { $authHost, $host } from ".";

export const createNeeded = async (formData) => {
	const { data } = await $authHost.post("api/needed/create", formData);
	return data;
};

export const getNeededs = async () => {
	const { data } = await $host.get("api/needed/");
	return data;
};
