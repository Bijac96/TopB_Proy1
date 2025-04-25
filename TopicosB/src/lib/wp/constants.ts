/*  constants.ts:
 *  Se definen constantes globales
 */
export const domain = import.meta.env.WP_DOMAIN; //Dominio base del sitio (WordPress)
export const apiUrl = `${domain}/wp-json/wp/v2`;

//Slugs de las categorías
export const CATEGORIES = {
    COMEDIA: 'comedia',
    DRAMA: 'drama',
    TERROR: 'terror',
    THRILLER: 'thriller',
} as const;

//Tipo derivado para restringir los slugs validos de categorias
export type CategorySlug = (typeof CATEGORIES)[keyof typeof CATEGORIES];