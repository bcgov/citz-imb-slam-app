import { useRouter } from "next/router";
import React from "react";
import { FormBodyCreate } from "../../components/layout/form/FormBodyCreate";
import { Navigation } from "../../components/layout/header/Navigation";
import { FormHeader } from "../../components/layout/header/FormHeader";

export default function SoftwareFormCreate() {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <div className="app">
         <FormHeader linkText={'Back to Software List'} formState={'create'} />
         <FormBodyCreate />
      </div>
    </>
  );
}
