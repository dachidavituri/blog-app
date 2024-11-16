import Blogs from "#/home/components/blogs";
import Author from "#/home/components/authors";
import { data } from "@/data";
const HomePageView: React.FC = () => {
  const authors = data.map((author) => author.author);
  return (
    <div className="flex justify-center items-center">
      <Blogs data={data} />
      <Author authors={authors} />
    </div>
  );
};
export default HomePageView;
