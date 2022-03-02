import { Navigation } from "../../components/layout/header/Navigation";
import { TableBody } from "../../components/layout/table/TableBody";
import React, { useState } from 'react'
import { TableHeader } from "../../components/layout/header/TableHeader";


export default function SoftwareForm() {


  return (
    <>
      <Navigation />
      <div className="app">
        <TableHeader title={'Software List'} buttonText={'+ Add Software'} />
        <TableBody getData={async () => { const data = await fetchData('software'); return data }} />
      </div>
    </>
  )
}
