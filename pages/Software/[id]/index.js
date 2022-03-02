import { useRouter } from "next/router";
import React from "react";
import { FormBodyRead } from "../../../components/layout/form/FormBodyRead";
import { Navigation } from "../../../components/layout/header/Navigation";
import { FormHeader } from "../../../components/layout/header/FormHeader";

export default function SoftwareFormRead() {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <div className="app">
         <FormHeader linkText={'Back to Software List'} formState={'update'} />
         <FormBodyRead />
      </div>
    </>
  );
}
