/* api.ts
 * Funciones para obtener datos desde la API de WP.
 */

import { apiUrl } from "./constants";
import { parsePost } from "./parse";
import type { Post, WPPost } from "./types";
import type { CategorySlug } from "./constants";

// Para paginas estaticas (Ej: "inicio")
export const getPageInfo = async(slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`)

    if(!response.ok)
        throw new Error("Failed to fetch page info")

    const [data] = await response.json(); //Primera pagina devuelta
    return {
        title: data.title.rendered,
        content: data.content.rendered,
    };
}

// Obtener las publicaciones mas recientes
export const getLatestPosts = async ({ perPage = 10 }: { perPage?: number } = {}): Promise<Post[]> => {
    const response = await fetch(`${apiUrl}/posts?per_page=${perPage}&_embed`);

    if (!response.ok) {
        throw new Error("Error al obtener las publicaciones recientes.");
    }

    const results: WPPost[] = await response.json();

    if (!results.length) {
        throw new Error("No se encontraron publicaciones.");
    }
    //Se transforma cada resultado WPpost en un Post usando parsePost()
    return results.map(post => parsePost(post, true));
};

// Obtener el ID de una categoia por su slug
export const getCategoryIdBySlug = async (slug: CategorySlug): Promise<number> => {
	const response = await fetch(`${apiUrl}/categories?slug=${slug}`);

	if (!response.ok) 
        throw new Error("Failed to fetch category");

	const [data] = await response.json();
	return data.id;
};

//Obtener un posts por su categoria (slug)
export const getPostsByCategorySlug = async (slug: CategorySlug, perPage = 3) => {
    const catId = await getCategoryIdBySlug(slug);
    
    const response = await fetch(`${apiUrl}/posts?categories=${catId}&per_page=${perPage}&_embed`);

    if(!response.ok)
        throw new Error("Failed to fetch page info");

    const results: WPPost[] = await response.json();
    if(!results.length)
        throw new Error("No posts found");
    return results.map(post => parsePost(post));
}

//Obtener un post por su slug
export async function getPostBySlug(slug: string) {
    const response = await fetch(`${apiUrl}/posts?slug=${slug}&_embed`);
    const data = await response.json();
  
    if (!data || data.length === 0) return null;
  
    const post = data[0];
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  
    const result = {
        title: post.title,
        content: post.content,
        featuredImage,
      };
    
      //console.log("getPostBySlug:", result);
      return result;
}

//Obtener todos los slugs de publicaciones
export async function getAllPostSlugs() {
    const response = await fetch(`${apiUrl}/posts?_fields=slug&per_page=100`);
    const data = await response.json();
    //Se extrae solo el campo slug
    return data.map((post: { slug: string }) => post.slug);
}