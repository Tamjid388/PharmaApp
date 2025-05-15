import { Outlet } from "react-router"
import { Home } from "../Pages/Home/Home"
import { Drawer } from "../Component/Drawer"


export const MainLayout = () => {
  return (
    <div className="flex flex-row">
   <div className="w-1/4">
     <Drawer/>
   </div>
<div className="w-3/4 ">
      <Outlet/>
</div>

    </div>
  )
}
