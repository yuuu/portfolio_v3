import React from "react";
import { NextPage } from "next";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const apps = [
    {
      id: "1",
      link: "https://portfolio.y-uuu.net/apps",
      image:
        "https://image.portfolio.y-uuu.net/e546cc90-d929-4975-865f-d22679f80807",
      title: "yuuu‘s portfolio",
      category: "Web System",
      description: "このページです。Next.js + Ruby on Railsで構築しています。",
    },
    {
      id: "2",
      link: "https://portfolio.y-uuu.net/apps",
      image:
        "https://image.portfolio.y-uuu.net/e546cc90-d929-4975-865f-d22679f80807",
      title: "yuuu‘s portfolio",
      category: "Web System",
      description: "このページです。Next.js + Ruby on Railsで構築しています。",
    },
    {
      id: "3",
      link: "https://portfolio.y-uuu.net/apps",
      image:
        "https://image.portfolio.y-uuu.net/e546cc90-d929-4975-865f-d22679f80807",
      title: "yuuu‘s portfolio",
      category: "Web System",
      description: "このページです。Next.js + Ruby on Railsで構築しています。",
    },
    {
      id: "4",
      link: "https://portfolio.y-uuu.net/apps",
      image:
        "https://image.portfolio.y-uuu.net/e546cc90-d929-4975-865f-d22679f80807",
      title: "yuuu‘s portfolio",
      category: "Web System",
      description: "このページです。Next.js + Ruby on Railsで構築しています。",
    },
  ];

  return {
    props: { apps },
    revalidate: 60,
  };
};

export type App = {
  id: string;
  link: string;
  image: string;
  title: string;
  category: string;
  description: string;
};

const Apps: NextPage<{ apps: App[] }> = ({ apps }) => {
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Apps" />
      <div className="flex flex-wrap">
        {apps?.map((app) => (
          <div key={app.id} className="md:w-1/3 px-4 mb-8">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <a href={app.link} target="_blank" rel="noreferrer">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={app.image}
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
