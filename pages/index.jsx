import { fetchData } from '../components/api/fetchData';
import { Navigation } from "../components/layout/header/Navigation";
import { TableHeader } from "../components/layout/header/TableHeader";
import { TableBody } from "../components/layout/table/TableBody";
import { useCallback } from 'react';

export default function Home() {
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
