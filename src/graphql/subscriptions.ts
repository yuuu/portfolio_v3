/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApp = /* GraphQL */ `
  subscription OnCreateApp($owner: String) {
    onCreateApp(owner: $owner) {
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
export const onUpdateApp = /* GraphQL */ `
  subscription OnUpdateApp($owner: String) {
    onUpdateApp(owner: $owner) {
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
export const onDeleteApp = /* GraphQL */ `
  subscription OnDeleteApp($owner: String) {
    onDeleteApp(owner: $owner) {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($owner: String) {
    onCreateArticle(owner: $owner) {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($owner: String) {
    onUpdateArticle(owner: $owner) {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($owner: String) {
    onDeleteArticle(owner: $owner) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($owner: String) {
    onCreateBook(owner: $owner) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($owner: String) {
    onUpdateBook(owner: $owner) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($owner: String) {
    onDeleteBook(owner: $owner) {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($owner: String) {
    onCreateSkill(owner: $owner) {
      id
      title
      storageKey
      createdAt
      updatedAt
      owner
    }
  }
`
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($owner: String) {
    onUpdateSkill(owner: $owner) {
      id
      title
      storageKey
      createdAt
      updatedAt
      owner
    }
  }
`
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($owner: String) {
    onDeleteSkill(owner: $owner) {
      id
      title
      storageKey
      createdAt
      updatedAt
      owner
    }
  }
`
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide($owner: String) {
    onCreateSlide(owner: $owner) {
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
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide($owner: String) {
    onUpdateSlide(owner: $owner) {
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
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide($owner: String) {
    onDeleteSlide(owner: $owner) {
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
