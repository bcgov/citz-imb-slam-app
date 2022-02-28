import { Navigation } from "../components/layout/Navigation";
import { SoftwareList } from "../components/layout/SoftwareList";
import { TableHeader } from "../components/layout/TableHeader"
import { getData } from '../components/common/getData'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="app">
        <TableHeader />
        <SoftwareList getData={async () => { const data = await getData('software'); return data }} />
      </div>
    </>
  )
}
