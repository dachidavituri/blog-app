import bookImg from "!/book (1).png";
import peopleImg from "!/people.png";
import innovate from "!/innovation.png";
import learning from "!/coding.png";
export interface Item {
  title: string;
  author: string;
  description: string;
}
export interface BlogsProps {
  data: Item[];
}
export interface AuthorProps {
  authors: string[];
}

export const data = [
  { title: "theGreatGatsby" },
  { title: "toKillAMockingbird" },
  { title: "nineteenEightyFour" },
  { title: "prideAndPrejudice" },
  { title: "mobyDick" },
];

export const offers = [
  { title: "Rich Content", img: bookImg },
  { title: "Vibrant Community", img: peopleImg },
  { title: "Cutting-edge Topics", img: innovate },
  { title: "Collaborative Learning", img: learning },
];
