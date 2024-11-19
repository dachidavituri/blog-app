import Blogs from "#/home/components/blogs";
import Author from "#/home/components/authors";
import { data } from "@/data";
import { useTranslation } from "react-i18next";
const HomePageView: React.FC = () => {
  const { t } = useTranslation();
  const translatedData = data.map((dt) => ({
    title: t(`home.books.${dt.title}.title`),
    author: t(`home.books.${dt.title}.author`),
    description: t(`home.books.${dt.title}.description`),
  }));
  const authors = translatedData.map((author) => author.author);

  return (
    <div className="flex justify-center items-center">
      <Blogs data={translatedData} />
      <Author authors={authors} />
    </div>
  );
};
export default HomePageView;
