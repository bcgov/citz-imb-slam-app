import { Navigation } from "../components/layout/Navigation";
import { SoftwareList } from "../components/layout/SoftwareList";
import {TableHeader} from "../components/layout/TableHeader"

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="app">
        <TableHeader />
        <SoftwareList />
      </div>
    </>
  )
}
