import React, { ReactElement } from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import Head from "next/head";
import AllBlogs from "@/components/UI/AllBlogs";

const HomePage = ({ allBlogs }: any) => {
  return (
    <div className="">
      <Head>
        <title>Next Blog</title>
        <meta
          name="description"
          content="This is a blog site made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[600px]">
        <Banner></Banner>
      </div>
      <div className="my-5">
        <AllBlogs allBlogs={allBlogs}></AllBlogs>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();

  return {
    props: {
      allBlogs: data,
    },
    revalidate: 30,
  };
};
