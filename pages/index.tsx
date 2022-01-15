import React from 'react'
import Link from 'next/link'

import { API, graphqlOperation } from 'aws-amplify'
import { listApps } from '../src/graphql/queries'

const fetch = async () => {
  // const apps = await API.graphql(graphqlOperation(listApps))
  // console.log(apps)
  await API.graphql(graphqlOperation(listApps))
}
fetch()

const Home: React.FC = () => {
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
