import React from "react";
import { NextPage } from "next";

import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
// import { listProfiles } from "../../../src/graphql/queries";
// import { updateProfile } from "../../../src/graphql/mutations";
// import { ListProfilesQuery, Profile } from "../../../src/API";
// import { withAuthenticator } from "@aws-amplify/ui-react";

import ProfileForm from "../../../components/forms/ProfileForm";
import LinkButton from "../../../components/LinkButton";
import Header from "../../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";

// export const getStaticProps: GetServerSideProps = async (context) => {
//   try {
//     const { API } = withSSRContext(context);
//     const { data } = (await API.graphql(
//       graphqlOperation(listProfiles)
//     )) as GraphQLResult<ListProfilesQuery>;
//     return {
//       props: { profile: data?.listProfiles?.items[0] },
//       revalidate: 0,
//     };
//   } catch (e) {
//     return {
//       props: { profile: {} },
//       revalidate: 1,
//     };
//   }
// };
type Profile = {
  id?: string;
  introduction?: string;
  residence?: string;
  birthplace?: string;
  birthday?: string;
  hobby?: string;
};

const EditProfile: NextPage<{ profile: Profile }> = ({ profile }) => {
  const router = useRouter();

  const onSubmit = async (newProfile: Profile) => {
    // try {
    //   await API.graphql({
    //     query: updateProfile,
    //     variables: { input: newProfile },
    //     authMode: "AMAZON_COGNITO_USER_POOLS",
    //   });
    //   toast.success("Saved Successfully");
    //   router.push("/profile");
    // } catch (e: any) {
    //   if (e?.errors[0]?.message) {
    //     toast.error(e.errors[0].message);
    //   }
    // }
  };
  const onError = () => {
    toast.error("Please reconfirm your input");
  };

  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Edit Profile" />
      <div className="flex flex-row justify-end mb-4">
        <LinkButton href="/profile">Back</LinkButton>
      </div>
      <div className="flex flex-col px-4 md:flex-row md:space-x-4 pb-4">
        <div className="flex-none flex justify-center">
          <img
            src="/images/profile.png"
            className="max-h-80 max-w-xs md:max-h-96 md:max-w-sm mb-4 shadow"
          />
        </div>
        <div className="md:flex-grow">
          <h1 className="text-4xl leading-tight text-gray-900 pb-2 mb-4 border-b-2">
            岡嵜 雄平{" "}
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
          <ProfileForm
            profile={profile}
            onSubmit={onSubmit}
            onError={onError}
          />
        </div>
      </div>
    </div>
  );
};

// export default withAuthenticator(EditProfile);
export default EditProfile;
