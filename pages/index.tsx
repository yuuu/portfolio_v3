import React from 'react'
import Link from 'next/link'

import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import { listArticles } from '../src/graphql/queries'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types'
import { Article, ListArticlesQuery } from '../src/API'
import { GetServerSideProps } from 'next'

export const getStaticProps: GetServerSideProps = async () => {
  try {
    // const { API:APISSR } = withSSRContext(context)
    const { data } = (await API.graphql({
      query: listArticles,
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    })) as GraphQLResult<ListArticlesQuery>
    return {
      props: { articles: data?.listArticles?.items[0] },
      revalidate: 60,
    }
  } catch (e) {
    return {
      props: { articles: {} },
      revalidate: 1,
    }
  }
}

type Props = {
  articles: Article[]
}
const Home: React.FC<Props> = ({ articles }) => {
  console.log(articles) // eslint-disable-line
  // const fetch = async () => {
  //   const res = await API.graphql({
  //     query: listArticles,
  //     authMode: GRAPHQL_AUTH_MODE.AWS_IAM
  //   })
  //   console.log(res.data.listArticles)
  // }
  // useEffect(() => {
  //   fetch()
  // }, [])
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div>
        <h1 className="text-6xl leading-tight text-gray-900 py-4 my-4 border-b-2">
          Welcome to yuuu&lsquo;s portfolio.
        </h1>
        <span className="text-2xl block justify-center mb-8">
          Check out my profile!
        </span>
        <div className="flex justify-center">
          <Link href="/profile">
            <button className="bg-accent hover:bg-accent-dark text-white text-2xl py-2 px-4 w-1/2 tracking-widest rounded block">
              Profile
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src="/images/logo.png" />
      </div>
    </div>
  )
}

export default Home
