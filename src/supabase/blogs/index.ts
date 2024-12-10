/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "..";

export const addBlog = async ({
  payload,
  user,
}: {
  payload: any;
  user: any;
}) => {
  supabase.storage
    .from("blog_images")
    .upload(payload.image_url?.name, payload.image_url)
    .then((res) => {
      return supabase.from("blogs").insert({
        title_ka: payload.title_ka,
        title_en: payload.title_en,
        description_ka: payload.description_ka,
        description_en: payload.description_en,
        image_url: res.data?.fullPath,
        user_id: user?.user.id,
      });
    })
    .then((res) => console.log(`succesfully created`, res));
};

export const getBlogs = async () => {
  const { data } = await supabase.from("blogs").select("*").throwOnError();
  return data;
};
