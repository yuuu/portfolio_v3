import React from 'react'
import { NextPage } from 'next'
import { Tooltip } from 'react-tippy'
import Header from '../components/Header'

export const getStaticProps = async () => {
  const skills = [
    {
      id: '1',
      image:
        'https://image.portfolio.y-uuu.net/0581824d-63b6-49a7-a1bb-bbd17b131f04',
      title: 'AWS Certified Database - Specialty',
      category: 'AWS Certified',
    },
    {
      id: '2',
      image:
        'https://image.portfolio.y-uuu.net/0581824d-63b6-49a7-a1bb-bbd17b131f04',
      title: 'AWS Certified Database - Specialty',
      category: 'AWS Certified',
    },
    {
      id: '3',
      image:
        'https://image.portfolio.y-uuu.net/0581824d-63b6-49a7-a1bb-bbd17b131f04',
      title: 'AWS Certified Database - Specialty',
      category: 'AWS Certified',
    },
    {
      id: '4',
      image:
        'https://image.portfolio.y-uuu.net/0581824d-63b6-49a7-a1bb-bbd17b131f04',
      title: 'AWS Certified Database - Specialty',
      category: 'AWS Certified',
    },
    {
      id: '5',
      image:
        'https://image.portfolio.y-uuu.net/0581824d-63b6-49a7-a1bb-bbd17b131f04',
      title: 'AWS Certified Database - Specialty',
      category: 'AWS Certified',
    },
    {
      id: '6',
      image:
        'https://image.portfolio.y-uuu.net/0581824d-63b6-49a7-a1bb-bbd17b131f04',
      title: 'AWS Certified Database - Specialty',
      category: 'AWS Certified',
    },
  ]

  return {
    props: { skills },
    revalidate: 60,
  }
}

export type Skill = {
  id: string
  image: string
  title: string
  category: string
}

const Skills: NextPage<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Skills" />
      <dl className="flex flex-wrap justify-items-center items-center">
        {skills.map((skill) => (
          <div key={skill.id} className="w-1/2 md:w-1/6">
            <div className="my-4 rounded-md bg-indigo-500">
              <Tooltip title={skill.title} position="top" trigger="mouseenter">
                <img className="" src={skill.image} />
              </Tooltip>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Skills
