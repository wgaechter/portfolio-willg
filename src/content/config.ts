import { imageConfig } from 'astro:assets';
import {z, defineCollection} from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        id: z.number()
    })
});

export const collections = {
    posts: postsCollection
}