import React from "react";

const AdminLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between">
        <div className="h-screen w-1/5 bg-red-500">header</div>
        <div className="flex-1 bg-green-400">
          <h4>{children}</h4>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
