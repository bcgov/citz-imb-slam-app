import { useRouter } from "next/router";
import React from "react";
import { FormBodyUpdate } from "../../../components/layout/form/FormBodyUpdate";
import { Navigation } from "../../../components/layout/header/Navigation";
import { FormHeader } from "../../../components/layout/header/FormHeader";

export default function SoftwareFormUpdate() {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <div className="app">
         <FormHeader linkText={'Back to Software List'} formState={'update'} />
         <FormBodyUpdate />
      </div>
    </>
  );
}
