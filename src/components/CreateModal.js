import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNeeded } from "../http/neededApi";

export const CreateModal = ({ isOpen, onClose }) => {
	const toast = useToast();
	const navigate = useNavigate();
	const [file, setFile] = useState();
	const [image, setImage] = useState();

	return (
		<>
			<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Добавить нуждающегося</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={{
								firstName: "",
								secondName: "",
								age: "",
								place: "",
								totalSum: "",
								remainSum: "",
							}}
							onSubmit={async (values, actions) => {
								try {
									const formData = new FormData();
									formData.append("firstName", values.firstName);
									formData.append("secondName", values.secondName);
									formData.append("age", values.age);
									formData.append("place", values.place);
									formData.append("totalSum", values.totalSum);
									formData.append("remainSum", values.remainSum);
									formData.append("img", file);
									let data = await createNeeded(formData);
									toast({
										title: "Добавлено.",
										status: "success",
										isClosable: false,
										duration: 2000,
										position: "bottom-left",
									});
									actions.resetForm();
								} catch (error) {
									alert(error.response.data.message);
								}
							}}
						>
							{(props) => (
								<Form>
									<Field name="firstName">
										{({ field, form }) => (
											<FormControl isRequired className="mt-2">
												<FormLabel htmlFor="firstName">Имя</FormLabel>
												<Input
													{...field}
													id="firstName"
													placeholder="Введите имя"
												/>
												<FormErrorMessage>
													{form.errors.firstName}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Field name="secondName">
										{({ field, form }) => (
											<FormControl isRequired className="mt-2">
												<FormLabel htmlFor="secondName">Фамилия</FormLabel>
												<Input
													{...field}
													id="secondName"
													placeholder="Введите фамилию"
												/>
												<FormErrorMessage>
													{form.errors.secondName}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Field name="age">
										{({ field, form }) => (
											<FormControl isRequired className="mt-2">
												<FormLabel htmlFor="age">Возраст</FormLabel>
												<Input
													{...field}
													id="age"
													placeholder="Введите возраст"
												/>
												<FormErrorMessage>{form.errors.age}</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Field name="place">
										{({ field, form }) => (
											<FormControl isRequired className="mt-2">
												<FormLabel htmlFor="place">Место проживания</FormLabel>
												<Input
													{...field}
													id="place"
													placeholder="Введите город"
												/>
												<FormErrorMessage>{form.errors.place}</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Field name="totalSum">
										{({ field, form }) => (
											<FormControl isRequired className="mt-2">
												<FormLabel htmlFor="totalSum">
													Сколько нужно собрать
												</FormLabel>
												<Input
													{...field}
													id="totalSum"
													placeholder="Введите сумму"
												/>
												<FormErrorMessage>
													{form.errors.totalSum}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Field name="remainSum">
										{({ field, form }) => (
											<FormControl isRequired className="mt-2">
												<FormLabel htmlFor="remainSum">
													Сколько осталось собрать
												</FormLabel>
												<Input
													{...field}
													id="remainSum"
													placeholder="Введите сумму"
												/>
												<FormErrorMessage>
													{form.errors.remainSum}
												</FormErrorMessage>
											</FormControl>
										)}
									</Field>

									<Input
										mt={4}
										name="img"
										id="img"
										type="file"
										onChange={(e) => {
											setFile(e.target.files[0]);
										}}
									/>

									<Button
										mt={4}
										mb={4}
										colorScheme="teal"
										isLoading={props.isSubmitting}
										type="submit"
									>
										Отправить
									</Button>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
