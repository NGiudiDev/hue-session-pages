import * as yup from "yup";

const PASSWORD_SPECIAL_CHARS = /[!@#$%^&*(),.?":{}|<>]/;
const PASSWORD_NUMBER_REGEX = /[0-9]/;
const PASSWORD_MIN_LENGTH = 8;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido.")
    .required("El email es obligatorio."),
  password: yup
    .string()
    .min(PASSWORD_MIN_LENGTH, `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres`)
    .required("La contraseña es obligatoria."),
});

export const newPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .min(PASSWORD_MIN_LENGTH, `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres`)
    .matches(PASSWORD_NUMBER_REGEX, "La contraseña debe contener al menos un número")
    .matches(PASSWORD_SPECIAL_CHARS, "La contraseña debe contener al menos un carácter especial")
    .required("La contraseña es obligatoria."), 
});

export const passwordRecoverySchema = yup.object().shape({ 
	email: yup
    .string()
    .email("Email inválido.")
    .required("El email es obligatorio."),
});