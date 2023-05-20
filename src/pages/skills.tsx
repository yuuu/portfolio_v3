import { NextPage } from "next";
import Header from "../components/Header";
import { listSkills } from "../graphql/queries";
import { Storage } from "aws-amplify";
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { ListSkillsQuery, Skill } from "@/API";
import { Tooltip } from 'react-tooltip'

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

const Skills: NextPage<{ skills: SkillV[] }> = ({ skills }) => {
  console.log(skills)
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Skills" />
      <dl className="flex flex-wrap justify-items-center items-center">
        {skills.map((skill) => (
          <div key={skill.id} className="px-4 w-1/2 md:w-1/6">
            <div className="my-4 rounded-md">
              <a id={skill.id} data-tooltip-content={skill.title}>
                <img className="" src={skill.imageUrl} />
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
