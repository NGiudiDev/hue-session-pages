import React from "react";
import PropTypes from "prop-types";

import { SessionLayout } from "../../components/session_layout/session_layout";

import { Button, Input, Text } from "ngiudi-hue-ds";
import { Form, Formik } from "formik";

import { loginSchema } from "../../services/session_validations_services";

export const LoginLayout = (props) => {
  const { error, isLoading, onRecoveryPassword, onSubmit } = props;

  return (
    <SessionLayout>
      <Text margin="b-20" type="title">
        Bienvenido 
      </Text>
      
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
      >
        {formik => (
          <Form>
            <Input label="Email" margin="b-20" name="email" />
            
            <Input
              label="Contraseña"
              name="password"
              type="password"
            />
            
            {error && (
              <Text margin="b-20">
                {error.message}
              </Text>
            )}

            <Button
              disabled={!formik.isValid || !formik.dirty}
              fullWidth
              loading={isLoading}
              margin="t-24"
              type="submit"
            >
              Iniciar sesión
            </Button>
          </Form>
        )}
      </Formik>

      <Button
        fullWidth
        kind="text"
        margin="t-8"
        onClick={onRecoveryPassword}
      >
        Recuperar contraseña
      </Button>
    </SessionLayout>
  );
};

LoginLayout.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  onRecoveryPassword: PropTypes.func,
  onSubmit: PropTypes.func,
};