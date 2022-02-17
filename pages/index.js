import { Header } from "../components/layout/Header";
import { SoftwareList } from "../components/layout/SoftwareList";
import {AppHeader} from "../components/layout/AppHeader"

export default function Home() {
  return (
    <>
      <Header />
      <div className="app">
        <AppHeader />
        <SoftwareList />
      </div>
    </>
  )
}
