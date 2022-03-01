import { Navigation } from "../../components/layout/Navigation";
import { SoftwareList } from "../../components/layout/SoftwareList";
import React, { useState } from 'react'


export default function SoftwareForm() {


  return (
    <>
      <Navigation />
      <div className="app">
        <SoftwareList getData={async () => { const data = await fetchData('software'); return data }} />
      </div>
    </>
  )
}
