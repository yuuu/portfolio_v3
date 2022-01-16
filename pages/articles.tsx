import React from 'react'
import { NextPage } from 'next'
import Header from '../src/components/Header'

export const getStaticProps = async () => {
  const articles = [
    {
      id: '1',
      link: 'https://tech.fusic.co.jp/posts/2022-01-06-aws-iot-core-patlite/',
      image: 'https://tech.fusic.co.jp/uploads/patlite.jpg',
      title: 'パトライトをAWS IoT Coreに接続してリモート制御する',
      body: '岡嵜です。あけましておめでとうございます。 年末に株式会社パトライトの 評価用機材貸出し を利用して、NHP-FV2 というパトライトをお借りしました。これはAWS IoT Coreと接続可能......',
      publishedAt: '2022-01-06',
    },
  ]

  return {
    props: { articles },
    revalidate: 60,
  }
}

export type Article = {
  id: string
  link: string
  image: string
  title: string
  body: string
  publishedAt: string
}

const Articles: NextPage<{ articles: Article[] }> = ({ articles }) => {
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
                  src={article.image}
                />
              </a>
            </div>
            <div className="md:flex-grow md:w-1/2 w-full md:pl-16 flex flex-col items-start text-left">
              <h3 className="text-xl text-gray-600 font-bold mb-2">
                {article.publishedAt}
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
  )
}

export default Articles
