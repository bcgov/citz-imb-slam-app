import { fetchData } from '../components/common/fetchData';
import { Navigation } from "../components/layout/header/Navigation";
import { TableHeader } from "../components/layout/header/TableHeader";
import { TableBody } from "../components/layout/table/TableBody";

export default function Home() {
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
