import { fetchData } from '../components/common/fetchData';
import { Navigation } from "../components/layout/Navigation";
import { SoftwareList } from "../components/layout/SoftwareList";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="app">
        <SoftwareList getData={async () => { const data = await fetchData('software'); return data }} />
      </div>
    </>
  )
}
