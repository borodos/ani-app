import { $authHost, $host } from ".";

export const createNeeded = async (
	firstName,
	secondName,
	totalSum,
	remainSum,
	file
) => {
	const { data } = await $authHost.post("api/needed/create", {
		// -- Первый параметр - URL запроса, второй параметр - тело запроса
		firstName,
		secondName,
		totalSum,
		remainSum,
		file,
	});
	return data;
};

export const getNeededs = async () => {
	const { data } = await $host.get("api/needed/");
	return data;
};
