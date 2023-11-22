import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllBlogs = ({ allBlogs }: any) => {
  console.log(allBlogs);

  return (
    <div className="flex justify-around">
      {allBlogs.map((blog: any) => (
        <div
          key={blog?.id}
          className="w-80 bg-blue-100 p-2 rounded-md h-[450px] relative"
        >
          <Image
            className="w-full rounded-md"
            src={blog?.image_url}
            height={300}
            width={300}
            alt=""
          ></Image>
          <h4 className="text-lg font-semibold my-2">{blog?.title}</h4>
          <p className="mb-2 text-blue-600">Published: {blog?.publish_date}</p>
          <p className="">Author: {blog?.author}</p>
          <p>
            {blog?.content.length > 100
              ? blog?.content.slice(0, 70) + "..."
              : blog?.content}
          </p>
          <div className="mt-4 ">
            <Link
              className="bg-blue-400 p-2 rounded-md absolute bottom-2 text-white font-semibold hover:text-black"
              href={`/blog/${blog?.id}`}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
