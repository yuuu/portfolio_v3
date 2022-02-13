import React from 'react'
import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBirthdayCake,
  faHeart,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import Header from '../src/components/Header'
import LinkButton from '../src/components/LinkButton'

import { GraphQLResult } from '@aws-amplify/api-graphql'
import { listProfiles } from '../src/graphql/queries'
import { ListProfilesQuery, Profile } from '../src/API'
import { withSSRContext } from 'aws-amplify'
import { GetServerSideProps } from 'next'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'

export const getStaticProps: GetServerSideProps = async (context) => {
  try {
    const { API: APISSR } = withSSRContext(context)
    const { data } = (await APISSR.graphql({
      query: listProfiles,
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    })) as GraphQLResult<ListProfilesQuery>
    return {
      props: { profile: data?.listProfiles?.items[0] },
      revalidate: 60,
    }
  } catch (e) {
    return {
      props: { profile: {} },
      revalidate: 1,
    }
  }
}

const ProfilePage: NextPage<{ profile: Profile }> = ({ profile }) => {
  // useEffect(() => {
  //   ;(async () => {
  //     ;(await API.graphql({
  //       query: listProfiles,
  //       authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
  //     })) as GraphQLResult<ListProfilesQuery>
  //   })()
  // }, [])
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Profile" />
      <div className="flex flex-row justify-end mb-4">
        <LinkButton href="/admin/profile/edit">Edit</LinkButton>
      </div>
      <div className="flex flex-col px-4 md:flex-row md:space-x-4 pb-4">
        <div className="flex-none flex justify-center">
          <img
            src="/images/profile.png"
            className="max-h-80 max-w-xs md:max-h-96 md:max-w-sm mb-4 shadow"
          />
        </div>
        <div className="flex-grow">
          <h1 className="text-4xl leading-tight text-gray-900 pb-2 mb-4 border-b-2">
            岡嵜 雄平{' '}
            <span className="text-xl text-gray-500">Okazaki Yuhei</span>
          </h1>
          <div className="flex flex-row justify-start mb-4 space-x-4">
            <a
              href="https://github.com/yuuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://twitter.com/Y_uuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/yuhei.okazaki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          <p className="mb-4">
            {profile?.introduction?.split('\n')?.map((str, index) => (
              <React.Fragment key={index}>
                {str}
                <br />
              </React.Fragment>
            ))}
          </p>
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              <tr>
                <th className="py-2">
                  <FontAwesomeIcon icon={faHome} size="lg" className="mr-2" />
                </th>
                <th className="py-2 text-left">居住地</th>
                <td>{profile?.residence}</td>
              </tr>
              <tr>
                <th className="py-2">
                  <FontAwesomeIcon
                    icon={faMapMarker}
                    size="lg"
                    className="mr-2"
                  />
                </th>
                <th className="py-2 text-left">出身地</th>
                <td>{profile?.birthplace}</td>
              </tr>
              <tr>
                <th className="py-2">
                  <FontAwesomeIcon
                    icon={faBirthdayCake}
                    size="lg"
                    className="mr-2"
                  />
                </th>
                <th className="py-2 text-left">生年月日</th>
                <td>{profile?.birthday}</td>
              </tr>
              <tr>
                <th className="py-2">
                  <FontAwesomeIcon icon={faHeart} size="lg" className="mr-2" />
                </th>
                <th className="py-2 text-left">趣味</th>
                <td>{profile?.hobby}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
