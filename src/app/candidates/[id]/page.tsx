"use client";

import { getById } from "@/app/services/candidate";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Form from "@/components/candidate/Form";
import { Candidate } from "@/types/custom/candidate";


import { useEffect, useState } from "react";

export type IParamProps = {
  params: { id: string };
};
export default function Page({ params }: IParamProps) {
  const [candidate, setCandidate] = useState<Candidate>();

  const getData = async () => {
    const data = await getById(params.id);
    setCandidate(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DefaultLayout>
      <Form title={"Update Candidate detail"} message={"Candidate is Updated successfully"} candidate={candidate} isEditing={true}/>
    </DefaultLayout>
  );
}
