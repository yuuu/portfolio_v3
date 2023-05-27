import { NextPage } from "next";
import Image from "next/image";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { listSkills } from "../graphql/queries";
import { Storage } from "aws-amplify";
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { ListSkillsQuery, Skill } from "@/API";
import { Tooltip } from "react-tooltip";

type SkillV = Skill & { imageUrl?: string };

const fetchSkills = async () => {
  const { data } = await API.graphql<GraphQLQuery<ListSkillsQuery>>({
    query: listSkills,
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
  });
  return data?.listSkills?.items?.filter((item): item is Skill => !!item) || [];
};

const attachImages = async (skills: SkillV[]) => {
  return await Promise.all(
    skills.map(async (skill) => {
      const imageUrl = await Storage.get(skill.image);
      return { ...skill, imageUrl };
    })
  );
};

export const getStaticProps = async () => {
  const skills = await fetchSkills();
  const skillsV = await attachImages(skills);
  return {
    props: { skills: skillsV },
    revalidate: 60,
  };
};

const languageSkills = (skills: SkillV[]) =>
  skills.filter((skill) => skill.category === "Language");
const frameworkSkills = (skills: SkillV[]) =>
  skills.filter((skill) => skill.category === "Framework");
const cloudSkills = (skills: SkillV[]) =>
  skills.filter((skill) => skill.category === "Cloud");

const Skills: NextPage<{ skills: SkillV[] }> = ({ skills }) => {
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Skills" />
      <SubHeader title="Language" />
      <dl className="flex flex-wrap justify-items-center items-center">
        {languageSkills(skills).map((skill) => (
          <div key={skill.id} className="px-4 w-1/2 md:w-1/6">
            <div className="my-4 rounded-md">
              <a id={skill.id} data-tooltip-content={skill.title}>
                {
                  skill?.imageUrl &&
                    <Image
                      alt={skill.title}
                      src={skill.imageUrl}
                      width={1057}
                      height={1500}
                    />
                }
              </a>
              <Tooltip anchorSelect={`#${skill.id}`} />
            </div>
          </div>
        ))}
      </dl>
      <SubHeader title="Framework" />
      <dl className="flex flex-wrap justify-items-center items-center">
        {frameworkSkills(skills).map((skill) => (
          <div key={skill.id} className="px-4 w-1/2 md:w-1/6">
            <div className="my-4 rounded-md">
              <a id={skill.id} data-tooltip-content={skill.title}>
                {
                  skill?.imageUrl &&
                    <Image
                      alt={skill.title}
                      src={skill.imageUrl}
                      width={1057}
                      height={1500}
                    />
                }
              </a>
              <Tooltip anchorSelect={`#${skill.id}`} />
            </div>
          </div>
        ))}
      </dl>
      <SubHeader title="Cloud" />
      <dl className="flex flex-wrap justify-items-center items-center">
        {cloudSkills(skills).map((skill) => (
          <div key={skill.id} className="px-4 w-1/2 md:w-1/6">
            <div className="my-4 rounded-md">
              <a id={skill.id} data-tooltip-content={skill.title}>
                {
                  skill?.imageUrl &&
                    <Image
                      alt={skill.title}
                      src={skill.imageUrl}
                      width={1057}
                      height={1500}
                    />
                }
              </a>
              <Tooltip anchorSelect={`#${skill.id}`} />
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Skills;
