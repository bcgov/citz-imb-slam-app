import { Navigation } from "../../components/layout/Navigation";
import { UpdateSoftwareForm } from "../../components/layout/UpdateSoftwareForm";
import { CreateSoftwareForm } from "../../components/layout/CreateSoftwareForm";
import React, { useState } from 'react'
import { useRouter } from "next/router";


export default function SoftwareForm() {

    const router = useRouter()
    const {id} = router.query

  return (
    <>
      <Navigation />     
      <div className="app">
        {id === 'CreateForm' && (
            <>
            <CreateSoftwareForm />
            </>
        )}  
        {id === 'UpdateForm' && (
            <>
            <UpdateSoftwareForm />
            </>
        )}  
      </div>
    </>
  )
}
