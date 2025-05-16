import { Outlet } from "react-router"
import { Home } from "../Pages/Home/Home"
import { Drawer } from "../Component/Drawer"


export const MainLayout = () => {
  return (
    <div className="flex flex-row">
   <div className=" ">
     <Drawer/>
   </div>
<div className="container   ">
      <Outlet/>
</div>

    </div>
  )
}
