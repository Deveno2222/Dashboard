import { Post } from "@/types/posts";

const posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    body: "This is the body of the first post.",
    author: "Alice",
    date: "2023-10-01",
    comments: [
      { id: "c1", text: "Great post!", username: "Bob" },
      { id: "c2", text: "Thanks for sharing.", username: "Charlie" },
    ],
  },
  {
    id: "2",
    title: "Second Post",
    body: "This is the body of the second post.",
    author: "Bob",
    date: "2023-10-02",
    comments: [{ id: "c3", text: "Interesting read.", username: "Alice" }],
  },
  {
    id: "3",
    title: "Exploring TypeScript",
    body: "In this post, we dive into TypeScript basics and how it helps developers.",
    author: "Charlie",
    date: "2023-10-05",
    comments: [
      { id: "c4", text: "Very helpful, thanks!", username: "Alice" },
      { id: "c5", text: "I needed this today.", username: "Bob" },
    ],
  },
  {
    id: "4",
    title: "Next.js with Tailwind",
    body: "Let’s look at how to quickly set up Tailwind CSS in a Next.js project.",
    author: "Alice",
    date: "2023-10-07",
    comments: [
      {
        id: "c6",
        text: "Tailwind makes styling so much easier!",
        username: "Charlie",
      },
    ],
  },
  {
    id: "5",
    title: "Why Learn React?",
    body: "React is one of the most popular libraries for building user interfaces. Here’s why.",
    author: "Diana",
    date: "2023-10-10",
    comments: [
      {
        id: "c7",
        text: "React hooks are my favorite part.",
        username: "Alice",
      },
      { id: "c8", text: "I still prefer Vue.", username: "Bob" },
    ],
  },
  {
    id: "6",
    title: "State Management with Redux",
    body: "Redux helps to manage state in complex React applications. Let’s break it down.",
    author: "Bob",
    date: "2023-10-12",
    comments: [
      { id: "c9", text: "Clear explanation!", username: "Charlie" },
      { id: "c10", text: "What about Zustand?", username: "Diana" },
    ],
  },
];

export default posts;
