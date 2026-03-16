import React from "react";
import PropTypes from "prop-types";

import { useRouter } from "../../hooks/use_router";

import { PageMessageLayout } from "../../components/page_message_layout/page_message_layout";
import { SessionLayout } from "../../components/session_layout/session_layout";

import { Button, Input, Text } from "ngiudi-hue-ds";
import { Form, Formik } from "formik";

import { newPasswordValidation } from "../../services/session_validations_services";

export const PasswordUpdateLayout = (props) => {
	const { isLoading, onCancel, onSubmit } = props;
  
	const router = useRouter();

	if (router.location.state?.success) {
		return (
			<PageMessageLayout
				button={{
					children: "Ir al inicio de sesión",
					onClick: onCancel,
				}}
				description="Se ha realizado con éxito el cambio de contraseña para tu usuario."
				isFullScreen
				title="Contraseña actualizada"
			/>
		);
	}

	return (
		<SessionLayout>
			<Text margin="b-16" type="title">
				Actualización de contraseña
			</Text>

			<Text margin="b-20">
				Aquí puedes cambiar la contraseña de tu cuenta. Protege tu privacidad y 
				seguridad eligiendo una nueva contraseña robusta y única.
			</Text>

			<Formik 
				initialValues={{
					password: "",
				}}
				onSubmit={onSubmit}
				validationSchema={newPasswordValidation}
			>
				{formik => (
					<Form>
						<Input
							label="Contraseña"
							margin="b-16"
							name="password"
							type="password"
						/>

						<Button
							disabled={!formik.isValid || !formik.dirty}
							fullWidth
							loading={isLoading}
							type="submit"
						>
							Actualizar contraseña
						</Button>
					</Form>
				)}
			</Formik>
		</SessionLayout>
	);
};

PasswordUpdateLayout.propTypes = {
	isLoading: PropTypes.bool,
	onCancel: PropTypes.func,
	onSubmit: PropTypes.func,
};