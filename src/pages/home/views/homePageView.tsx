import Blogs from "#/home/components/blogs";
import Author from "#/home/components/authors";
import { data } from "@/data";
import { useState } from "react";
const HomePageView: React.FC = () => {
  const authors = data.map((author) => author.author);
  const [blogAuthor, setBlogAuthor] = useState("");
  const filteredBlogs = blogAuthor
    ? data.filter((blog) => blog.author === blogAuthor)
    : data;
  console.log(filteredBlogs);

  return (
    <div className="flex justify-center items-center">
      <Blogs data={filteredBlogs} />
      <Author authors={authors} setAuthor={setBlogAuthor} />
    </div>
  );
};
export default HomePageView;
