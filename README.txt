DOCUMENTACION PROYECTO TOPICOS B - CINEMAX
*Existe una versión pdf en la misma carpeta*
Autor: Bastián Alonso Carrasco
Año: 2025
Asignatura: Tópicos B
Profesor: Antonio Bravo

Datos de interés:
DB_NAME: db_topb
DB_USER: root
DB_PASSWORD: ''		/* VACÍO */
DB_HOST: '127.0.0.1:3308'

Descripción del proyecto: 
Se creó un sitio web con Astro, WordPress y Tailwind CSS. El sitio permite explorar películas organizadas por género, ver su información básica, y navegar por categorías.



API REST disponible y funcionando:
El backend de CineMax utiliza WordPress y funcionalidades personalizadas para exponer un API REST (Ej. de endpoint: /wp-json/wp/v2/posts?categories=drama).



Visualización de datos específicos del JSON:
En la página principal, los datos consumidos del API se presentan de forma clara:
	-Título, imagen destacada, sinopsis (limitada a 3 líneas), año y director de cada película.
	-Organización por género usando componentes reutilizables.



Explicación de cómo se consume el JSON en Astro:
El proyecto utiliza un archivo lib/wp/api.ts donde se definen funciones como:
export async function getLatestPosts({ perPage = 3 }) {
	const res = await fetch(`${BASE_URL}/posts?per_page=${perPage}`);
	return parsePostList(await res.json());
}
Estos datos son utilizados dentro de archivos .astro mediante llamadas async:
const posts = await getLatestPosts({ perPage: 3 });



Integración básica de datos desde WordPress:
Se  realiza una conexión con WordPress, de donde obtiene: Entradas (post). categorías (géneros), imágenes destacadas, etc.



Uso correcto de clases utilitarias:
Se emplean clases Tailwind CSS para dar estilo.



Comprensión del enfoque utility-first:
No se utilizan archivos CSS personalizados ni clases arbitrarias. Todo el diseño se construye directamente con utilidades Tailwind, mostrando una comprensión clara del enfoque utility-first.



Uso de al menos 1 componente personalizado:
Se crearon varios componentes como FilmCard.astro, CategorySection.astro, y Layout.astro para responsabilidades específicas.



Organización en componentes y rutas
La estructura del proyecto es la siguiente:
Proyecto/
└── src/
    ├── assets/          
    ├── components/
    │   ├── category/
    │   │   └── CategorySection.astro
    │   ├── layout/
    │   │   ├── Footer.astro
    │   │   ├── Layout.astro
    │   │   └── NavBar.astro
    │   └── movie/
    │       └── FilmCard.astro
    ├── lib/
    │   └── wp/
    │       ├── api.ts
    │       ├── constants.ts
    │       ├── index.ts
    │       ├── parse.ts
    │       └── types.ts
    ├── pages/
    │   ├── genero/
    │   │   └── [slug].astro
    │   ├── post/
    │   │   └── [slug].astro
    └── styles/
        └── global.css



components: Componentes personalizados reutilizables
	-category/CategorySection.astro: Renderiza una sección de películas por categoría, incluye título y una grilla de películas.
	-layout/Footer.astro: Pie de página del sitio.
	-layout/Layout.astro: Layout base del sitio. Define la estructura HTML general y el slot 	para renderizar contenido. -layout/NavBar.astro: Barra de navegación principal. Contiene 	enlaces a Inicio, Ranking y un menú desplegable con categorías. Usa lógica para resaltar la 	ruta actual.
	-movie/FilmCard.astro: Componente para representar visualmente una película individual 	dentro de la grilla de CategorySection. Se muestra la imagen destacada, título y sinopsis.

lib/wp/: Lógica para la API de WordPress
	-api.ts: Contiene funciones para interactuar con la API REST de WordPress.
	-constants.ts: Define las constantes globales, como las categorías (generos) disponibles, 	slugs, y la URL base del sitio WordPress.
	-index.ts: Punto de entrada que exporta todas las funciones de api.ts, constants.ts, 	parse.ts y types.ts.
	-parse.ts: Contiene funciones que transforman los datos JSON entregados por WordPress en un 	formato más cómodo de utilizar para los componentes.
	-types.ts: Define los tipos TypeScript usados (Ej: Post, Category, etc.).

pages/: Rutas del sitio Astro
	-genero/[slug].astro: Página dinámica para cada género. Muestra todas las películas 	asociadas a esa categoría usando CategorySection.
	-post/[slug].astro: Página dinámica para cada película. Muestra imagen, sinopsis y trailer.
