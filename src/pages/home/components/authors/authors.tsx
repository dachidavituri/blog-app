import React from "react";

interface AuthorProps {
  authors: string[];
}

const Author: React.FC<AuthorProps> = ({ authors }) => {
  return (
    <div className="bg-neutral-500 p-5 rounded-xl">
      <h2>Authors List:</h2>
      <ul className="flex flex-col gap-3">
        {authors.map((author, index) => (
          <li key={index} className="cursor-pointer">{author}</li>
        ))}
      </ul>
    </div>
  );
};

export default Author;
