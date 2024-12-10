import { z } from "zod";
export const blogFormShema = z.object({
  title_ka: z.string().min(3, "blogValidation.title_ka"),
  title_en: z.string().min(3, "blogValidation.title_en"),
  description_ka: z.string().min(15, "blogValidation.description_ka"),
  description_en: z.string().min(15, "blogValidation.description_en"),
  image_url: z.string().min(1, "blogValidation.image_url"),
});
export type BlogsFrom = z.infer<typeof blogFormShema>;
