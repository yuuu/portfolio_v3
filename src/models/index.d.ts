import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
  CompositeIdentifier,
} from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerApp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<App, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly image: string;
  readonly title: string;
  readonly category?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyApp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<App, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly image: string;
  readonly title: string;
  readonly category?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type App = LazyLoading extends LazyLoadingDisabled
  ? EagerApp
  : LazyApp;

export declare const App: (new (init: ModelInit<App>) => App) & {
  copyOf(
    source: App,
    mutator: (draft: MutableModel<App>) => MutableModel<App> | void
  ): App;
};

type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Article, ["type", "publishedAt"]>;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly imageUrl: string;
  readonly title: string;
  readonly body?: string | null;
  readonly publishedAt: number;
  readonly type: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Article, ["type", "publishedAt"]>;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly imageUrl: string;
  readonly title: string;
  readonly body?: string | null;
  readonly publishedAt: number;
  readonly type: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Article = LazyLoading extends LazyLoadingDisabled
  ? EagerArticle
  : LazyArticle;

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(
    source: Article,
    mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void
  ): Article;
};

type EagerBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly image: string;
  readonly title: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly image: string;
  readonly title: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Book = LazyLoading extends LazyLoadingDisabled
  ? EagerBook
  : LazyBook;

export declare const Book: (new (init: ModelInit<Book>) => Book) & {
  copyOf(
    source: Book,
    mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void
  ): Book;
};

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly introduction: string;
  readonly residence: string;
  readonly birthplace: string;
  readonly birthday: number;
  readonly hobby: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly introduction: string;
  readonly residence: string;
  readonly birthplace: string;
  readonly birthday: number;
  readonly hobby: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Profile = LazyLoading extends LazyLoadingDisabled
  ? EagerProfile
  : LazyProfile;

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(
    source: Profile,
    mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void
  ): Profile;
};

type EagerSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly image: string;
  readonly title: string;
  readonly category?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazySkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly image: string;
  readonly title: string;
  readonly category?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Skill = LazyLoading extends LazyLoadingDisabled
  ? EagerSkill
  : LazySkill;

export declare const Skill: (new (init: ModelInit<Skill>) => Skill) & {
  copyOf(
    source: Skill,
    mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void
  ): Skill;
};

type EagerSlide = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Slide, ["type", "publishedAt"]>;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly imageUrl: string;
  readonly title: string;
  readonly body?: string | null;
  readonly publishedAt: number;
  readonly type: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazySlide = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Slide, ["type", "publishedAt"]>;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly link: string;
  readonly imageUrl: string;
  readonly title: string;
  readonly body?: string | null;
  readonly publishedAt: number;
  readonly type: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Slide = LazyLoading extends LazyLoadingDisabled
  ? EagerSlide
  : LazySlide;

export declare const Slide: (new (init: ModelInit<Slide>) => Slide) & {
  copyOf(
    source: Slide,
    mutator: (draft: MutableModel<Slide>) => MutableModel<Slide> | void
  ): Slide;
};
