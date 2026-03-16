import React from "react";
import PropTypes from "prop-types";

import { useRouter } from "../../hooks/use_router";

import { PageMessageLayout } from "../../components/page_message_layout/page_message_layout";
import { SessionLayout } from "../../components/session_layout/session_layout";

import { Button, Input, Text } from "ngiudi-hue-ds";
import { Form, Formik } from "formik";

import { passwordRecoverySchema } from "../../services/session_validations_services";

export const PasswordRecoveryLayout = (props) => {
	const { isLoading, onCancel, onSubmit } = props;

	const router = useRouter();

	if (router.location.state?.success) {
		return (
			<PageMessageLayout
				button={{
					children: "Ir al inicio de sesión",
					onClick: onCancel,
				}}
				description="Por favor, dirígete al correo electrónico enviado y procede a cambiar la contraseña."
				isFullScreen
				title="Correo electrónico enviado"
			/>
		);
	}

	return (
		<SessionLayout>
			<Text margin="b-16" type="title">
				Recupero de contraseña
			</Text>

			<Text margin="b-20">
				Una vez proporcionado el correo electrónico, se le enviarán las instrucciones 
				necesarias para completar el proceso de actualización de contraseña.
			</Text>

			<Formik 
				initialValues={{
					email: "",
				}}
				onSubmit={onSubmit}
				validationSchema={passwordRecoverySchema}
			>
				{formik => (
					<Form>
						<Input
							label="Email"
							margin="b-16"
							name="email"
						/>

						<Button
							disabled={!formik.isValid || !formik.dirty}
							fullWidth
							loading={isLoading}
							type="submit"
						>
							Continuar
						</Button>
					</Form>
				)}
			</Formik>

			<Button
				fullWidth
				kind="outlined"
				margin="t-16"
				onClick={onCancel}
			>
				Cancelar
			</Button>
		</SessionLayout>
	);
};

PasswordRecoveryLayout.propTypes = {
	isLoading: PropTypes.bool,
	onCancel: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};