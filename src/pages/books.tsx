import React from "react";
import { NextPage } from "next";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const books = [
    {
      id: "1",
      link: "https://techbookfest.org/product/5273269798174720?productVariantID=6321568303022080",
      image:
        "https://image.portfolio.y-uuu.net/c4395107-90d8-453a-9dff-e58aad71d397",
      title: "作って学ぶSORACOM入門",
      description:
        "本書はIoT向けの無線通信プラットフォームである「SORACOM」の入門書です。読者の皆様がより簡単にSORACOMを使えるようになることを目的に執筆しました。",
    },
  ];

  return {
    props: { books },
    revalidate: 60,
  };
};

export type Book = {
  id: string;
  link: string;
  image: string;
  title: string;
  description: string;
};

const Books: NextPage<{ books: Book[] }> = ({ books }) => {
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Books" />
      <div className="flex flex-wrap">
        {books?.map((book) => (
          <div
            key={book.id}
            className="flex px-4 mb-8 md:flex-row w-full flex-col items-center"
          >
            <div className="md:w-1/4 w-3/4">
              <a href={book.link} target="_blank" rel="noreferrer">
                <img
                  className="object-cover object-center rounded"
                  alt={book.title}
                  src={book.image}
                />
              </a>
            </div>
            <div className="md:flex-grow md:w-1/2 w-full md:pl-16 flex flex-col items-start text-left">
              <a href={book.link} target="_blank" rel="noreferrer">
                <h1 className="title-font text-3xl pt-4 pb-4 font-medium text-gray-900">
                  {book.title}
                </h1>
              </a>
              <p className="mb-4 leading-relaxed">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
