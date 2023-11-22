import AdminLayout from "@/components/Layouts/AdminLayout";
import RootLayout from "@/components/Layouts/RootLayout";
import React, { ReactElement } from "react";

const Admin = () => {
  return (
    <div>
      <h1>This is admin page</h1>
    </div>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      <AdminLayout>{page}</AdminLayout>
    </RootLayout>
  );
};
