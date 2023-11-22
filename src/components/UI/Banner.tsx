import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner-images/drawing_image.jpg";

const Banner = () => {
  return (
    <div className="flex justify-around h-[500px] my-5">
      <div className="w-1/3 flex items-center">
        <div>
          <h1 className="text-6xl font-bold">WELCOME TO NEXT BLOG</h1>
          <div className="h-2 bg-black my-5"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
            mollitia fuga dolorem cupiditate labore, laboriosam modi maiores,
            debitis enim harum magnam ratione provident dicta voluptatem
            accusamus. Cumque odit soluta totam debitis aut fugiat eum esse rem!
            Omnis, ut nemo?
          </p>
        </div>
      </div>
      <div className="w-2/4">
        <Image className="w-full rounded-md" src={banner} alt=""></Image>
      </div>
    </div>
  );
};

export default Banner;
