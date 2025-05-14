import { Outlet } from "react-router"
import { Home } from "../Pages/Home/Home"
import { Drawer } from "../Component/Drawer"


export const MainLayout = () => {
  return (
    <div>
    <Drawer/>
    <Outlet/>

    </div>
  )
}
