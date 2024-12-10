import useCurrentLang from "@/i18n/currentLang";
import { getBlogs } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";

const Blogs: React.FC = () => {
  const { data: blogsList } = useQuery({
    queryKey: ["blog-list"],
    queryFn: getBlogs,
  });
  const formatDate = (created_at: string) => {
    const dateObj = new Date(created_at);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const currentlang = useCurrentLang();
  return (
    <div className="w-full">
      <div>
        {blogsList?.map((blog) => {
          const imageUrl = blog.image_url
            ? `${import.meta.env.VITE_SUPABASE_IMAGE_STORAGE}/${blog.image_url}`
            : "";
          const fullDate = formatDate(blog.created_at);
          return (
            <div
              className="bg-slate-600 m-5 p-2 rounded-2xl flex justify-between "
              key={blog.id}
            >
              <img src={imageUrl} className="w-[400px] h-[400px] rounded-xl" />
              <div>
                <h1 className="font-bold text-red-950">
                  {currentlang === "ka" ? blog.title_ka : blog.title_en}
                </h1>
                <p>
                  {currentlang === "ka"
                    ? blog.description_ka
                    : blog.description_en}
                </p>
                <p>{fullDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Blogs;
