import React from "react";
import { NextPage } from "next";
import Header from "../components/Header";
import { listApps } from "../graphql/queries";
import { Storage } from "aws-amplify";
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { ListAppsQuery, App } from "@/API";

type AppV = App & { imageUrl?: string };

const fetchApps = async () => {
  const { data } = await API.graphql<GraphQLQuery<ListAppsQuery>>({
    query: listApps,
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
  });
  return data?.listApps?.items?.filter((item): item is App => !!item) || [];
};

const attachImages = async (apps: AppV[]) => {
  return await Promise.all(
    apps.map(async (app) => {
      const imageUrl = await Storage.get(app.image);
      return { ...app, imageUrl };
    })
  );
};

export const getStaticProps = async () => {
  const apps = await fetchApps();
  const appsV = await attachImages(apps);
  return {
    props: { apps: appsV },
    revalidate: 60,
  };
};

const Apps: NextPage<{ apps: AppV[] }> = ({ apps }) => {
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Apps" />
      <div className="flex flex-wrap">
        {apps?.map((app) => (
          <div key={app.id} className="md:w-1/3 px-4 mb-8">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <a href={app.link} target="_blank" rel="noreferrer">
                <img
                  className="lg:h-64 md:h-64 w-full object-cover object-center"
                  src={app?.imageUrl}
                  alt={app.title}
                />
              </a>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {app.category}
                </h2>
                <a href={app.link} target="_blank" rel="noreferrer">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {app.title}
                  </h1>
                </a>
                <p className="leading-relaxed mb-2">{app.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
