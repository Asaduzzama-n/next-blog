import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

const BlogDetails = ({blog}:any) => {
  const router = useRouter();
  
  return (
    <div>
      <div className="flex justify-around my-10 min-h-screen">
        <div className="w-1/3">
          <Image className="rounded-md" src={blog?.image_url} height={400} width={500} alt=""></Image>
        </div>
        <div className="w-2/4">
          <h1 className="text-5xl font-bold mb-5">{blog?.title}</h1>
          <div className="my-4 h-1 bg-black"></div>
          <p className="text-md font-semibold my-2">Published: {blog?.publish_date}</p>
          <p className="text-md  my-2"> {blog?.content}</p>

        </div>
      </div>

    </div>
  );
};

export default BlogDetails;

BlogDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticPaths =async () => {
  const res = await fetch(` http://localhost:5000/blogs`)
  const data = await res.json();

  const paths = data.map((blog:any) => ({
    params: {slug: blog.id}
  }))

  return {paths, fallback: true}

}

export const getStaticProps = async (context:any) => {
  const {params} = context;
  const res = await fetch(` http://localhost:5000/blogs/${params.slug}`)
  const data = await res.json();

  return {
    props:{
      blog: data,
    }
  }
}