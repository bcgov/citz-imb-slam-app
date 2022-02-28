import { Navigation } from "../../components/layout/Navigation";
import { CreateSoftwareForm } from "../../components/layout/CreateSoftwareForm";
import { FormHeader } from "../../components/layout/FormHeader";
import React, { useState } from 'react'


export default function SoftwareForm() {


  return (
    <>
      <Navigation />     
      <div className="app">
        <FormHeader />
        <CreateSoftwareForm />
      </div>

    </>
  )
}
