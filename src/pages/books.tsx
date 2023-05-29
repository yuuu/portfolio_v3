import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import Header from "../components/Header";
import { booksByTypeAndOrder } from "../graphql/queries";
import { Storage } from "aws-amplify";
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { Book, BooksByTypeAndOrderQuery } from "@/API";

type BookV = Book & { imageUrl?: string };

const fetchBooks = async () => {
  const { data } = await API.graphql<GraphQLQuery<BooksByTypeAndOrderQuery>>({
    query: booksByTypeAndOrder,
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    variables: {
      type: "Book",
      sortDirection: "DESC",
    },
  });
  return (
    data?.booksByTypeAndOrder?.items?.filter((item): item is Book => !!item) ||
    []
  );
};

const attachImages = async (books: BookV[]) => {
  return await Promise.all(
    books.map(async (book) => {
      const imageUrl = await Storage.get(book.image);
      return { ...book, imageUrl };
    })
  );
};

export const getStaticProps = async () => {
  const books = await fetchBooks();
  const booksV = await attachImages(books);
  return {
    props: { books: booksV },
    revalidate: 3600,
  };
};

const Books: NextPage<{ books: BookV[] }> = ({ books }) => {
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
                {book?.imageUrl && (
                  <Image
                    className="object-cover object-center rounded"
                    alt={book.title}
                    src={book.imageUrl}
                    width={1057}
                    height={1500}
                  />
                )}
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
