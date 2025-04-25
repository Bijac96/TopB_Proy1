/* parse.ts
 * Contiene funciones para transformar datos WPPost en estructuras más comodas
 * de utilizar
 */

import type { WPPost, Post } from "./types";

// Convierte un WPPost en un objeto Post limpio y usable
export const parsePost = (post: WPPost, includeContent = false): Post => ({
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: includeContent ? post.content?.rendered : undefined, //Solo se incluye el contenido completo si se pide
    date: post.date,
    slug: post.slug,
    featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "",
});
