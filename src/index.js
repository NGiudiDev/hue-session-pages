/******************************************************************/
/*                                                                */
/*  ## Como actualizar el deploy en githup pages?                 */
/*                                                                */
/*    1. El siguiente comando va a crear el build y va a          */
/*    publicar la pagina.                                         */
/*                                                                */
/*      npm run deploy                                            */
/*                                                                */
/*    2. Si en consola vemos el mensaje `Publish`, se ha          */
/*    publicado con exito la pagina.                              */
/*                                                                */
/*  ## Como publicar en npm?                                      */
/*                                                                */
/*    1. Actualizar la version en el package json, si no se hace  */
/*    esto, va a fallar al momento de intentar publicar en npm.   */
/*                                                                */
/*    2. Construir el nuevo proyecto                              */
/*                                                                */
/*      npm run build                                             */
/*                                                                */
/*    3. Publicar el nuevo paquete                                */
/*                                                                */
/*      npm publish                                               */
/*                                                                */
/******************************************************************/

export { LoginLayout } from "./pages/login/login_layout";

export { PasswordRecoveryLayout } from "./pages/password_recovery/password_recovery_layout";

export { PasswordUpdateLayout } from "./pages/password_update/password_update_layout";