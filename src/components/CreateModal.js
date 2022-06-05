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

	const selectFile = (event) => {
		setFile(event.target.files[0]);
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setImage(reader.result);
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};

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
								totalSum: "",
								remainSum: "",
							}}
							onSubmit={async (values, actions) => {
								try {
									// let data = await createNeeded(
									// 	values.firstName,
									// 	values.secondName,
									// 	values.totalSum,
									// 	values.remainSum,
									// );

									toast({
										title: "Добавлено.",
										status: "success",
										isClosable: false,
										duration: 2000,
										position: "bottom-left",
									});
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

									<Field name="file" type="file">
										{({ field, form }) => (
											<FormControl
												isRequired
												className="mt-2"
												onChange={selectFile}
											>
												<FormLabel htmlFor="img">Фотография</FormLabel>
												<Input
													{...field}
													id="file"
													type="file"
													placeholder="Загрузите фото"
												/>
												<FormErrorMessage>{form.errors.img}</FormErrorMessage>
											</FormControl>
										)}
									</Field>

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
