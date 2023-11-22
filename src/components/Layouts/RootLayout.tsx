import React from "react";

const RootLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col ">
      <div className="h-16 w-full bg-blue-500">header</div>
      <div className="flex-1 bg-blue-200">
        <h4>{children}</h4>
      </div>
      <div className="h-40 w-full bg-blue-900">
        <h4>Footer</h4>
      </div>
    </div>
  );
};

export default RootLayout;
