import Header from "../components/Header"
import { Outlet } from "react-router-dom"
function App() {
//  Passing elements through outlet

  return (
    <>
      <Header></Header>
      <Outlet/>
    </>
  )
}

export default App
