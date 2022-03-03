import React from "react";
import { SoftwareForm } from "../../components/layout/form/SoftwareForm";
import { FormHeader } from "../../components/layout/header/FormHeader";
import { Navigation } from "../../components/layout/header/Navigation";

export default function SoftwareFormCreate() {
  return (
    <>
      <Navigation />
      <div className="app">
        <FormHeader linkText={'Back'} formState={'create'} />
        <SoftwareForm />
      </div>
    </>
  );
}
