/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApp = /* GraphQL */ `
  query GetApp($id: ID!) {
    getApp(id: $id) {
      id
      title
      description
      category
      storageKey
      link
      createdAt
      updatedAt
      owner
    }
  }
`
export const listApps = /* GraphQL */ `
  query ListApps(
    $filter: ModelAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        category
        storageKey
        link
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
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
export const listArticles = /* GraphQL */ `
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
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      storageKey
      link
      createdAt
      updatedAt
      owner
    }
  }
`
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        storageKey
        link
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      introduction
      residence
      birthplace
      birthday
      hobby
      createdAt
      updatedAt
      owner
    }
  }
`
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        introduction
        residence
        birthplace
        birthday
        hobby
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      title
      storageKey
      createdAt
      updatedAt
      owner
    }
  }
`
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        storageKey
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
      id
      title
      body
      image
      publishedAt
      createdAt
      updatedAt
      owner
    }
  }
`
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        image
        publishedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`
