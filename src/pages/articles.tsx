import { NextPage } from "next";
import Header from "../components/Header";
import { listArticles } from "../graphql/queries";
import { Storage } from "aws-amplify";
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { ListArticlesQuery, Article } from "@/API";
import * as dayjs from 'dayjs'

type ArticleV = Article & { imageUrl?: string };

const fetchArticles = async () => {
  const { data } = await API.graphql<GraphQLQuery<ListArticlesQuery>>({
    query: listArticles,
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
  });
  return data?.listArticles?.items?.filter((item): item is Article => !!item) || [];
};

const attachImages = async (articles: ArticleV[]) => {
  return await Promise.all(
    articles.map(async (article) => {
      const imageUrl = await Storage.get(article.image);
      return { ...article, imageUrl };
    })
  );
};

export const getStaticProps = async () => {
  const articles = await fetchArticles();
  const articlesV = await attachImages(articles);
  return {
    props: { articles: articlesV },
    revalidate: 60,
  };
};

const Articles: NextPage<{ articles: ArticleV[] }> = ({ articles }) => {
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Articles" />
      <div className="flex flex-wrap">
        {articles?.map((article) => (
          <div
            className="flex px-4 mb-16 md:flex-row w-full flex-col items-center"
            key={article.id}
          >
            <div className="md:w-1/3 mb-4">
              <a href={article.link} target="_blank" rel="noreferrer">
                <img
                  className="object-cover object-center rounded"
                  alt={article.title}
                  src={article.imageUrl}
                />
              </a>
            </div>
            <div className="md:flex-grow md:w-1/2 w-full md:pl-16 flex flex-col items-start text-left">
              <h3 className="text-xl text-gray-600 font-bold mb-2">
                {article.publishedAt && dayjs.unix(article.publishedAt).format('YYYY-MM-DD')}  
              </h3>
              <a href={article.link} target="_blank" rel="noreferrer">
                <h2 className="title-font text-2xl mb-4 font-medium text-gray-900 break-all">
                  {article.title}
                </h2>
              </a>
              <p className="leading-relaxed break-all">{article.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
