import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div className="h-screen font-bold text-6xl flex items-center justify-center">
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
