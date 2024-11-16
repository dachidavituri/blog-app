export interface Item {
  title: string;
  author: string;
  description: string;
}
export interface BlogsProps {
  data: Item[];
}

export const data: Item[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel set in the Jazz Age on Long Island, it tells the story of the mysterious Jay Gatsby and his obsession with the beautiful Daisy Buchanan.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A gripping novel set in the Deep South during the 1930s, it explores themes of racial injustice, moral growth, and the loss of innocence.",
  },
  {
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel set in a totalitarian society controlled by 'Big Brother', where individual freedom and truth are suppressed.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A classic romance novel set in 19th century England, focusing on Elizabeth Bennet's evolving relationship with the proud Mr. Darcy.",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    description:
      "A sailor named Ishmael narrates the obsessive quest of Captain Ahab to hunt down the elusive white whale, Moby Dick.",
  },
];
