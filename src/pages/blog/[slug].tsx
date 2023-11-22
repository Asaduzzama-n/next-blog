import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

const BlogDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is blog ID: {router.query.slug}</h1>
    </div>
  );
};

export default BlogDetails;

BlogDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
