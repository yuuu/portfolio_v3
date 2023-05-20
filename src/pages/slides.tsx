import { NextPage } from "next";
import Header from "../components/Header";
import { listSlides } from "../graphql/queries";
import { API, GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { ListSlidesQuery, Slide } from "@/API";
import * as dayjs from 'dayjs'

const fetchSlides = async () => {
  const { data } = await API.graphql<GraphQLQuery<ListSlidesQuery>>({
    query: listSlides,
    authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
  });
  return data?.listSlides?.items?.filter((item): item is Slide => !!item) || [];
};

export const getStaticProps = async () => {
  const slides = await fetchSlides();
  return {
    props: { slides },
    revalidate: 60,
  };
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
                  src={slide.imageUrl}
                />
              </a>
            </div>
            <div className="md:flex-grow md:w-1/2 w-full md:pl-16 flex flex-col items-start text-left">
              <h3 className="text-xl text-gray-600 font-bold mb-2">
                {slide.publishedAt && dayjs.unix(slide.publishedAt).format('YYYY-MM-DD')}  
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
