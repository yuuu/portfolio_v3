import React from "react";
import { NextPage } from "next";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const slides = [
    {
      id: "1",
      link: "https://speakerdeck.com/yuuu/akuasiyatutaf-iotyi-chang-tong-bao-sisutemukai-fa-ji-awstosoracomtomockmock",
      image:
        "https://files.speakerdeck.com/presentations/745308558150496bb6fab3c159a2fc95/slide_0.jpg?17960151",
      title:
        "アクアシャッターｆ IoT異常通報システム開発記 〜 AWSとSORACOMとmockmock",
      body: "2021-04-27(Tue) 19:00〜 Fusic Tech Live Vol.1：AWS 活用事例 にて発表 https://fusic.connpass.com/event/206957/...",
      publishedAt: "2021-04-27",
    },
  ];
  return {
    props: { slides },
    revalidate: 60,
  };
};

export type Slide = {
  id: string;
  link: string;
  image: string;
  title: string;
  body: string;
  publishedAt: string;
};

const Slides: NextPage<{ slides: Slide[] }> = ({ slides }) => {
  return (
    <div className="flex flex-col flex-grow justify-start">
      <Header title="Slides" />
      <div className="flex flex-wrap">
        {slides?.map((slide) => (
          <div
            className="flex px-4 mb-16 md:flex-row w-full flex-col items-center"
            key={slide.id}
          >
            <div className="md:w-1/3 mb-4">
              <a href={slide.link} target="_blank" rel="noreferrer">
                <img
                  className="object-cover object-center rounded"
                  alt={slide.title}
                  src={slide.image}
                />
              </a>
            </div>
            <div className="md:flex-grow md:w-1/2 w-full md:pl-16 flex flex-col items-start text-left">
              <h3 className="text-xl text-gray-600 font-bold mb-2">
                {slide.publishedAt}
              </h3>
              <a href={slide.link} target="_blank" rel="noreferrer">
                <h2 className="title-font text-2xl mb-4 font-medium text-gray-900 break-all">
                  {slide.title}
                </h2>
              </a>
              <p className="leading-relaxed break-all">{slide.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
