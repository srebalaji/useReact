import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import data from '../data.json';

export default () => (
  <div className="relative  flex content-center items-center justify-center minHeight">
    <div className="container relative mx-auto">
      <div className="container w-full text-center bg-blue-500 py-24">
        <h1 className="font-semibold text-5xl text-white">
          useReact
        </h1>
        <p className="mt-4 text-lg text-white">
          Best React articles curated to level up your skills.
        </p>
      </div>
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          {/* Topics */}
          <div className="text-left mt-10">
            {
              data.map(item => {
                return (
                  <div className="mb-14">
                    <h3 className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none inline-block">#{item.topic}</h3>
                    {
                      item.articles.map(article => {
                        return (
                          <p className="mt-3.5"><a className="text-blue-600 custom-underline" href={article.url} target="_blank">{article.name}</a></p>
                        )
                      })
                    }

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .custom-underline {
        border-bottom: 2px solid currentColor;
      }
    `}</style>
  </div>
);
