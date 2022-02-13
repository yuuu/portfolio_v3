/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAppInput = {
  id?: string | null
  title: string
  description: string
  category: string
  storageKey: string
  link: string
}

export type ModelAppConditionInput = {
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  category?: ModelStringInput | null
  storageKey?: ModelStringInput | null
  link?: ModelStringInput | null
  and?: Array<ModelAppConditionInput | null> | null
  or?: Array<ModelAppConditionInput | null> | null
  not?: ModelAppConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type App = {
  __typename: 'App'
  id: string
  title: string
  description: string
  category: string
  storageKey: string
  link: string
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type UpdateAppInput = {
  id: string
  title?: string | null
  description?: string | null
  category?: string | null
  storageKey?: string | null
  link?: string | null
}

export type DeleteAppInput = {
  id: string
}

export type CreateArticleInput = {
  id?: string | null
  title: string
  body: string
  image: string
  link: string
  publishedAt: string
}

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null
  body?: ModelStringInput | null
  image?: ModelStringInput | null
  link?: ModelStringInput | null
  publishedAt?: ModelStringInput | null
  and?: Array<ModelArticleConditionInput | null> | null
  or?: Array<ModelArticleConditionInput | null> | null
  not?: ModelArticleConditionInput | null
}

export type Article = {
  __typename: 'Article'
  id: string
  title: string
  body: string
  image: string
  link: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type UpdateArticleInput = {
  id: string
  title?: string | null
  body?: string | null
  image?: string | null
  link?: string | null
  publishedAt?: string | null
}

export type DeleteArticleInput = {
  id: string
}

export type CreateBookInput = {
  id?: string | null
  title: string
  description: string
  storageKey: string
  link: string
}

export type ModelBookConditionInput = {
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  storageKey?: ModelStringInput | null
  link?: ModelStringInput | null
  and?: Array<ModelBookConditionInput | null> | null
  or?: Array<ModelBookConditionInput | null> | null
  not?: ModelBookConditionInput | null
}

export type Book = {
  __typename: 'Book'
  id: string
  title: string
  description: string
  storageKey: string
  link: string
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type UpdateBookInput = {
  id: string
  title?: string | null
  description?: string | null
  storageKey?: string | null
  link?: string | null
}

export type DeleteBookInput = {
  id: string
}

export type CreateProfileInput = {
  id?: string | null
  introduction: string
  residence: string
  birthplace: string
  birthday: string
  hobby: string
}

export type ModelProfileConditionInput = {
  introduction?: ModelStringInput | null
  residence?: ModelStringInput | null
  birthplace?: ModelStringInput | null
  birthday?: ModelStringInput | null
  hobby?: ModelStringInput | null
  and?: Array<ModelProfileConditionInput | null> | null
  or?: Array<ModelProfileConditionInput | null> | null
  not?: ModelProfileConditionInput | null
}

export type Profile = {
  __typename: 'Profile'
  id: string
  introduction: string
  residence: string
  birthplace: string
  birthday: string
  hobby: string
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type UpdateProfileInput = {
  id: string
  introduction?: string | null
  residence?: string | null
  birthplace?: string | null
  birthday?: string | null
  hobby?: string | null
}

export type DeleteProfileInput = {
  id: string
}

export type CreateSkillInput = {
  id?: string | null
  title: string
  storageKey: string
}

export type ModelSkillConditionInput = {
  title?: ModelStringInput | null
  storageKey?: ModelStringInput | null
  and?: Array<ModelSkillConditionInput | null> | null
  or?: Array<ModelSkillConditionInput | null> | null
  not?: ModelSkillConditionInput | null
}

export type Skill = {
  __typename: 'Skill'
  id: string
  title: string
  storageKey: string
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type UpdateSkillInput = {
  id: string
  title?: string | null
  storageKey?: string | null
}

export type DeleteSkillInput = {
  id: string
}

export type CreateSlideInput = {
  id?: string | null
  title: string
  body: string
  image: string
  publishedAt: string
}

export type ModelSlideConditionInput = {
  title?: ModelStringInput | null
  body?: ModelStringInput | null
  image?: ModelStringInput | null
  publishedAt?: ModelStringInput | null
  and?: Array<ModelSlideConditionInput | null> | null
  or?: Array<ModelSlideConditionInput | null> | null
  not?: ModelSlideConditionInput | null
}

export type Slide = {
  __typename: 'Slide'
  id: string
  title: string
  body: string
  image: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  owner?: string | null
}

export type UpdateSlideInput = {
  id: string
  title?: string | null
  body?: string | null
  image?: string | null
  publishedAt?: string | null
}

export type DeleteSlideInput = {
  id: string
}

export type ModelAppFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  category?: ModelStringInput | null
  storageKey?: ModelStringInput | null
  link?: ModelStringInput | null
  and?: Array<ModelAppFilterInput | null> | null
  or?: Array<ModelAppFilterInput | null> | null
  not?: ModelAppFilterInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type ModelAppConnection = {
  __typename: 'ModelAppConnection'
  items: Array<App | null>
  nextToken?: string | null
}

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  body?: ModelStringInput | null
  image?: ModelStringInput | null
  link?: ModelStringInput | null
  publishedAt?: ModelStringInput | null
  and?: Array<ModelArticleFilterInput | null> | null
  or?: Array<ModelArticleFilterInput | null> | null
  not?: ModelArticleFilterInput | null
}

export type ModelArticleConnection = {
  __typename: 'ModelArticleConnection'
  items: Array<Article | null>
  nextToken?: string | null
}

export type ModelBookFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  description?: ModelStringInput | null
  storageKey?: ModelStringInput | null
  link?: ModelStringInput | null
  and?: Array<ModelBookFilterInput | null> | null
  or?: Array<ModelBookFilterInput | null> | null
  not?: ModelBookFilterInput | null
}

export type ModelBookConnection = {
  __typename: 'ModelBookConnection'
  items: Array<Book | null>
  nextToken?: string | null
}

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null
  introduction?: ModelStringInput | null
  residence?: ModelStringInput | null
  birthplace?: ModelStringInput | null
  birthday?: ModelStringInput | null
  hobby?: ModelStringInput | null
  and?: Array<ModelProfileFilterInput | null> | null
  or?: Array<ModelProfileFilterInput | null> | null
  not?: ModelProfileFilterInput | null
}

export type ModelProfileConnection = {
  __typename: 'ModelProfileConnection'
  items: Array<Profile | null>
  nextToken?: string | null
}

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  storageKey?: ModelStringInput | null
  and?: Array<ModelSkillFilterInput | null> | null
  or?: Array<ModelSkillFilterInput | null> | null
  not?: ModelSkillFilterInput | null
}

export type ModelSkillConnection = {
  __typename: 'ModelSkillConnection'
  items: Array<Skill | null>
  nextToken?: string | null
}

export type ModelSlideFilterInput = {
  id?: ModelIDInput | null
  title?: ModelStringInput | null
  body?: ModelStringInput | null
  image?: ModelStringInput | null
  publishedAt?: ModelStringInput | null
  and?: Array<ModelSlideFilterInput | null> | null
  or?: Array<ModelSlideFilterInput | null> | null
  not?: ModelSlideFilterInput | null
}

export type ModelSlideConnection = {
  __typename: 'ModelSlideConnection'
  items: Array<Slide | null>
  nextToken?: string | null
}

export type CreateAppMutationVariables = {
  input: CreateAppInput
  condition?: ModelAppConditionInput | null
}

export type CreateAppMutation = {
  createApp?: {
    __typename: 'App'
    id: string
    title: string
    description: string
    category: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateAppMutationVariables = {
  input: UpdateAppInput
  condition?: ModelAppConditionInput | null
}

export type UpdateAppMutation = {
  updateApp?: {
    __typename: 'App'
    id: string
    title: string
    description: string
    category: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteAppMutationVariables = {
  input: DeleteAppInput
  condition?: ModelAppConditionInput | null
}

export type DeleteAppMutation = {
  deleteApp?: {
    __typename: 'App'
    id: string
    title: string
    description: string
    category: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateArticleMutationVariables = {
  input: CreateArticleInput
  condition?: ModelArticleConditionInput | null
}

export type CreateArticleMutation = {
  createArticle?: {
    __typename: 'Article'
    id: string
    title: string
    body: string
    image: string
    link: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput
  condition?: ModelArticleConditionInput | null
}

export type UpdateArticleMutation = {
  updateArticle?: {
    __typename: 'Article'
    id: string
    title: string
    body: string
    image: string
    link: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput
  condition?: ModelArticleConditionInput | null
}

export type DeleteArticleMutation = {
  deleteArticle?: {
    __typename: 'Article'
    id: string
    title: string
    body: string
    image: string
    link: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateBookMutationVariables = {
  input: CreateBookInput
  condition?: ModelBookConditionInput | null
}

export type CreateBookMutation = {
  createBook?: {
    __typename: 'Book'
    id: string
    title: string
    description: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateBookMutationVariables = {
  input: UpdateBookInput
  condition?: ModelBookConditionInput | null
}

export type UpdateBookMutation = {
  updateBook?: {
    __typename: 'Book'
    id: string
    title: string
    description: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteBookMutationVariables = {
  input: DeleteBookInput
  condition?: ModelBookConditionInput | null
}

export type DeleteBookMutation = {
  deleteBook?: {
    __typename: 'Book'
    id: string
    title: string
    description: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateProfileMutationVariables = {
  input: CreateProfileInput
  condition?: ModelProfileConditionInput | null
}

export type CreateProfileMutation = {
  createProfile?: {
    __typename: 'Profile'
    id: string
    introduction: string
    residence: string
    birthplace: string
    birthday: string
    hobby: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput
  condition?: ModelProfileConditionInput | null
}

export type UpdateProfileMutation = {
  updateProfile?: {
    __typename: 'Profile'
    id: string
    introduction: string
    residence: string
    birthplace: string
    birthday: string
    hobby: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput
  condition?: ModelProfileConditionInput | null
}

export type DeleteProfileMutation = {
  deleteProfile?: {
    __typename: 'Profile'
    id: string
    introduction: string
    residence: string
    birthplace: string
    birthday: string
    hobby: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateSkillMutationVariables = {
  input: CreateSkillInput
  condition?: ModelSkillConditionInput | null
}

export type CreateSkillMutation = {
  createSkill?: {
    __typename: 'Skill'
    id: string
    title: string
    storageKey: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput
  condition?: ModelSkillConditionInput | null
}

export type UpdateSkillMutation = {
  updateSkill?: {
    __typename: 'Skill'
    id: string
    title: string
    storageKey: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput
  condition?: ModelSkillConditionInput | null
}

export type DeleteSkillMutation = {
  deleteSkill?: {
    __typename: 'Skill'
    id: string
    title: string
    storageKey: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type CreateSlideMutationVariables = {
  input: CreateSlideInput
  condition?: ModelSlideConditionInput | null
}

export type CreateSlideMutation = {
  createSlide?: {
    __typename: 'Slide'
    id: string
    title: string
    body: string
    image: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type UpdateSlideMutationVariables = {
  input: UpdateSlideInput
  condition?: ModelSlideConditionInput | null
}

export type UpdateSlideMutation = {
  updateSlide?: {
    __typename: 'Slide'
    id: string
    title: string
    body: string
    image: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type DeleteSlideMutationVariables = {
  input: DeleteSlideInput
  condition?: ModelSlideConditionInput | null
}

export type DeleteSlideMutation = {
  deleteSlide?: {
    __typename: 'Slide'
    id: string
    title: string
    body: string
    image: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type GetAppQueryVariables = {
  id: string
}

export type GetAppQuery = {
  getApp?: {
    __typename: 'App'
    id: string
    title: string
    description: string
    category: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListAppsQueryVariables = {
  filter?: ModelAppFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListAppsQuery = {
  listApps?: {
    __typename: 'ModelAppConnection'
    items: Array<{
      __typename: 'App'
      id: string
      title: string
      description: string
      category: string
      storageKey: string
      link: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetArticleQueryVariables = {
  id: string
}

export type GetArticleQuery = {
  getArticle?: {
    __typename: 'Article'
    id: string
    title: string
    body: string
    image: string
    link: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListArticlesQuery = {
  listArticles?: {
    __typename: 'ModelArticleConnection'
    items: Array<{
      __typename: 'Article'
      id: string
      title: string
      body: string
      image: string
      link: string
      publishedAt: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetBookQueryVariables = {
  id: string
}

export type GetBookQuery = {
  getBook?: {
    __typename: 'Book'
    id: string
    title: string
    description: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListBooksQuery = {
  listBooks?: {
    __typename: 'ModelBookConnection'
    items: Array<{
      __typename: 'Book'
      id: string
      title: string
      description: string
      storageKey: string
      link: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetProfileQueryVariables = {
  id: string
}

export type GetProfileQuery = {
  getProfile?: {
    __typename: 'Profile'
    id: string
    introduction: string
    residence: string
    birthplace: string
    birthday: string
    hobby: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListProfilesQuery = {
  listProfiles?: {
    __typename: 'ModelProfileConnection'
    items: Array<{
      __typename: 'Profile'
      id: string
      introduction: string
      residence: string
      birthplace: string
      birthday: string
      hobby: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetSkillQueryVariables = {
  id: string
}

export type GetSkillQuery = {
  getSkill?: {
    __typename: 'Skill'
    id: string
    title: string
    storageKey: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSkillsQuery = {
  listSkills?: {
    __typename: 'ModelSkillConnection'
    items: Array<{
      __typename: 'Skill'
      id: string
      title: string
      storageKey: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type GetSlideQueryVariables = {
  id: string
}

export type GetSlideQuery = {
  getSlide?: {
    __typename: 'Slide'
    id: string
    title: string
    body: string
    image: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type ListSlidesQueryVariables = {
  filter?: ModelSlideFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSlidesQuery = {
  listSlides?: {
    __typename: 'ModelSlideConnection'
    items: Array<{
      __typename: 'Slide'
      id: string
      title: string
      body: string
      image: string
      publishedAt: string
      createdAt: string
      updatedAt: string
      owner?: string | null
    } | null>
    nextToken?: string | null
  } | null
}

export type OnCreateAppSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateAppSubscription = {
  onCreateApp?: {
    __typename: 'App'
    id: string
    title: string
    description: string
    category: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateAppSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateAppSubscription = {
  onUpdateApp?: {
    __typename: 'App'
    id: string
    title: string
    description: string
    category: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteAppSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteAppSubscription = {
  onDeleteApp?: {
    __typename: 'App'
    id: string
    title: string
    description: string
    category: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateArticleSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateArticleSubscription = {
  onCreateArticle?: {
    __typename: 'Article'
    id: string
    title: string
    body: string
    image: string
    link: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateArticleSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateArticleSubscription = {
  onUpdateArticle?: {
    __typename: 'Article'
    id: string
    title: string
    body: string
    image: string
    link: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteArticleSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteArticleSubscription = {
  onDeleteArticle?: {
    __typename: 'Article'
    id: string
    title: string
    body: string
    image: string
    link: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateBookSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateBookSubscription = {
  onCreateBook?: {
    __typename: 'Book'
    id: string
    title: string
    description: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateBookSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateBookSubscription = {
  onUpdateBook?: {
    __typename: 'Book'
    id: string
    title: string
    description: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteBookSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteBookSubscription = {
  onDeleteBook?: {
    __typename: 'Book'
    id: string
    title: string
    description: string
    storageKey: string
    link: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateProfileSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateProfileSubscription = {
  onCreateProfile?: {
    __typename: 'Profile'
    id: string
    introduction: string
    residence: string
    birthplace: string
    birthday: string
    hobby: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateProfileSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateProfileSubscription = {
  onUpdateProfile?: {
    __typename: 'Profile'
    id: string
    introduction: string
    residence: string
    birthplace: string
    birthday: string
    hobby: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteProfileSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteProfileSubscription = {
  onDeleteProfile?: {
    __typename: 'Profile'
    id: string
    introduction: string
    residence: string
    birthplace: string
    birthday: string
    hobby: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateSkillSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateSkillSubscription = {
  onCreateSkill?: {
    __typename: 'Skill'
    id: string
    title: string
    storageKey: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateSkillSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateSkillSubscription = {
  onUpdateSkill?: {
    __typename: 'Skill'
    id: string
    title: string
    storageKey: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteSkillSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteSkillSubscription = {
  onDeleteSkill?: {
    __typename: 'Skill'
    id: string
    title: string
    storageKey: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnCreateSlideSubscriptionVariables = {
  owner?: string | null
}

export type OnCreateSlideSubscription = {
  onCreateSlide?: {
    __typename: 'Slide'
    id: string
    title: string
    body: string
    image: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnUpdateSlideSubscriptionVariables = {
  owner?: string | null
}

export type OnUpdateSlideSubscription = {
  onUpdateSlide?: {
    __typename: 'Slide'
    id: string
    title: string
    body: string
    image: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}

export type OnDeleteSlideSubscriptionVariables = {
  owner?: string | null
}

export type OnDeleteSlideSubscription = {
  onDeleteSlide?: {
    __typename: 'Slide'
    id: string
    title: string
    body: string
    image: string
    publishedAt: string
    createdAt: string
    updatedAt: string
    owner?: string | null
  } | null
}
