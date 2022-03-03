import React, { useCallback } from 'react';
import { Navigation } from "../../components/layout/header/Navigation";
import { TableHeader } from "../../components/layout/header/TableHeader";
import { TableBody } from "../../components/layout/table/TableBody";
import { fetchData } from '../../components/api/fetchData'

export default function SoftwareForm() {

  const getData = useCallback(
    async () => {
      const data = await fetchData('software');
      return data
    },
    [],
  )

  return (
    <>
      <Navigation />
      <div className="app">
        <TableHeader title={'Software List'} buttonText={'+ Add Software'} />
        <TableBody getData={getData} />
      </div>
    </>
  )
}
