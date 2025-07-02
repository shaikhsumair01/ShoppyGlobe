import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
function App() {
//  Passing elements through outlet

  return (
    <>
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </>
  )
}

export default App
