import RootLayout from "@/components/Layouts/RootLayout";
import React, { ReactElement } from "react";

const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
