/*
 * Definición de la colección de contenido que será utilizada para cargar
 * y validar los archivos Markdown del blog. Esto permite establecer una
 * estructura consistente para los metadatos de cada publicación y habilitar
 * rutas dinámicas basadas en esos documentos.
 */
import { defineCollection, z } from "astro:content";

/**
 * Colección `postCollection`
 *
 * - type: indica que se trata de contenido basado en archivos Markdown/MDX.
 * - schema: define, mediante Zod, la estructura y tipos esperados en los metadatos
 *   de cada archivo de la colección.
 *
 * Cada post deberá incluir:
 *  - title: Título de la publicación.
 *  - description: Resumen o extracto breve del contenido.
 *  - image: Ruta de la imagen destacada asociada al post.
 */
const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = { postCollection };
