import { NextPage } from "next";
import Image from "next/image";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { skillsByTypeAndOrder } from "../graphql/queries";
import { Storage } from "aws-amplify";
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { Skill, SkillsByTypeAndOrderQuery } from "@/API";
import { Tooltip } from "react-tooltip";

type SkillV = Skill & { imageUrl?: string };

const fetchSkills = async () => {
  const { data } = await API.graphql<GraphQLQuery<SkillsByTypeAndOrderQuery>>({
    query: skillsByTypeAndOrder,
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    variables: {
      type: "Skill",
      sortDirection: "ASC",
    }
  });
  return data?.skillsByTypeAndOrder?.items?.filter((item): item is Skill => !!item) || [];
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
      {[
        { skills: languageSkills(skills), name: "Language" },
        { skills: frameworkSkills(skills), name: "Framework" },
        { skills: cloudSkills(skills), name: "Cloud" },
      ].map(({ skills, name }) => (
        <div key={name}>
          <SubHeader title={name} />
          <dl className="flex flex-wrap justify-items-center items-center">
            {skills.map((skill) => (
              <div key={skill.id} className="px-4 w-1/2 md:w-1/6">
                <div className="my-4 rounded-md">
                  <a id={skill.id} data-tooltip-content={skill.title}>
                    {skill?.imageUrl && (
                      <Image
                        alt={skill.title}
                        src={skill.imageUrl}
                        width={1057}
                        height={1500}
                      />
                    )}
                  </a>
                  <Tooltip anchorSelect={`#${skill.id}`} />
                </div>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
};

export default Skills;
