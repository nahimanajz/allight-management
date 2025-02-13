"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Form from "@/components/candidate/Form";

const Page = () => {
  return (
    <DefaultLayout>
      <Form
        title={"Add New Candidate"}
        message="Candidate is added successfully"
      />
    </DefaultLayout>
  );
};
export default Page;
