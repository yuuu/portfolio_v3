import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

import { listApps } from '../src/graphql/queries'

const fetch = async () => {
  const apps = await API.graphql(graphqlOperation(listApps))
  console.log(apps)
}
fetch()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
