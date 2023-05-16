// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { App, Article, Book, Profile, Skill, Slide } = initSchema(schema);

export { App, Article, Book, Profile, Skill, Slide };
