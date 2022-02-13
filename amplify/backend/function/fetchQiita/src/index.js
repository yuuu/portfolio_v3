/* Amplify Params - DO NOT EDIT
	API_PORTFOLIO_GRAPHQLAPIENDPOINTOUTPUT
	API_PORTFOLIO_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWSAppSyncClient = require('aws-appsync').default
const gql = require('graphql-tag')
global.fetch = require('node-fetch')
const axios = require('axios')
const ogp = require('ogp-parser')

const listArticles = gql`
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        image
        link
        publishedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`

const createArticle = gql`
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      title
      body
      image
      link
      publishedAt
      createdAt
      updatedAt
      owner
    }
  }
`

exports.handler = async (event) => {
  const { env } = process

  const graphql_auth = {
    type: 'AWS_IAM',
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      sessionToken: env.AWS_SESSION_TOKEN,
    },
  }

  const graphqlClient = new AWSAppSyncClient({
    url: env.API_PORTFOLIO_GRAPHQLAPIENDPOINTOUTPUT,
    region: env.REGION,
    auth: graphql_auth,
    disableOffline: true,
  })

  const fetchArticlesFromApi = async () => {
    const res = await graphqlClient.query({
      query: listArticles,
      fetchPolicy: 'network-only',
      variables: { limit: 100 },
    })
    return res.data.listArticles.items
  }

  const fetchArticlesFromQiita = async () => {
    const res = await axios.get(
      'https://qiita.com/api/v2/users/Y_uuu/items?per_page=100'
    )
    return res.data
  }

  const registerArticleToApi = async (article) => {
    // fetch og:image
    const ret = await ogp(article.link)

    return graphqlClient.mutate({
      mutation: createArticle,
      variables: { input: { image: ret.ogp['og:image'][0], ...article } },
    })
  }

  const articlesFromApi = await fetchArticlesFromApi()
  const articlesFromQiita = await fetchArticlesFromQiita()

  const urls = articlesFromApi.map((article) => article.link)
  const registers = articlesFromQiita
    .map((article) => {
      if (urls.includes(article.url)) return

      return registerArticleToApi({
        title: article.title,
        body:
          article.body <= 100
            ? article.body
            : `${article.body.substr(0, 100)}...`,
        publishedAt: article.created_at,
        link: article.url,
      })
    })
    .filter((v) => v)

  const ret = await Promise.all(registers)
  console.log(ret)

  const response = {
    statusCode: 200,
    body: JSON.stringify('complete.'),
  }
  return response
}
