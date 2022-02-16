import { Header } from "../components/layout/Header";
import { SoftwareList } from "../components/layout/SoftwareList";
import {Toolbar} from "../components/layout/Toolbar"

export default function Home() {
  return (
    <>
      <Header />
      <div className="app">
        <Toolbar />
        <SoftwareList />
      </div>
    </>
  )
}
