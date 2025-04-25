/* types.ts
 * Define tipos TypeScript para representar posts y páginas
 */

//Post limpio utilizado en el frontend
export type Post = {
    title: string;
    excerpt: string;
    content?: string; //No siempre se incluye
    date: string;
    slug: string;
    featuredImage: string;
};

//Post de la API REST de WP
export type WPPost = {
    title: { rendered: string };
    excerpt: { rendered: string };
    content?: { rendered: string };
    date: string;
    slug: string;
    _embedded?: {
        'wp:featuredmedia'?: { source_url: string }[]; //Esta es la img. destacada
    };
};

//Info. de una pagina
export type PageInfo = {
    title: string;
    content: string;
};