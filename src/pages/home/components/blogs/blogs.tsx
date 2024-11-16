import { BlogsProps } from "@/data";

const Blogs: React.FC<BlogsProps> = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((dt, index) => (
          <div className="bg-slate-600 m-5 p-2 rounded-2xl" key={index}>
            <img />
            <h1 className="text-red-950">{dt.title}</h1>
            <p className="font-bold">{dt.description}</p>
            <p>Author: {dt.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
