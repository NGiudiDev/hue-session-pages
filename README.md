# Hue Session Pages

Librería de páginas de sesión (autenticación) construida con React, parte del ecosistema del design system **ngiudi-hue-ds**. Provee layouts reutilizables para login, recuperación de contraseña y actualización de contraseña.

## Tecnologías

- **React** 19
- **Styled Components** para estilos
- **Formik** + **Yup** para manejo y validación de formularios
- **React Router DOM** para navegación
- **Storybook** 10 para documentación y desarrollo visual
- **Vitest** para testing
- **ESLint** 9 para linting
- **Vite** como bundler

## Estructura del proyecto

```
src/
  index.js                          # Entry point (lazy exports de páginas)
  components/
    page_message_layout/            # Layout para mensajes de estado (éxito/error)
    session_layout/                 # Layout base para páginas de sesión
  hooks/
    use_router.jsx                  # Hook personalizado sobre react-router-dom
  pages/
    login/                          # Página de inicio de sesión
    password_recovery/              # Página de recuperación de contraseña
    password_update/                # Página de actualización de contraseña
  services/
    session_validations_services.js # Esquemas de validación con Yup
```

## Instalación

```bash
npm install ngiudi-hue-auth-pages
```

### Peer dependencies

```bash
npm install react react-dom react-router-dom styled-components
```

## Publicación

1. Actualizar la versión en `package.json`
2. Construir el proyecto: `npm run build`
3. Publicar: `npm publish`
