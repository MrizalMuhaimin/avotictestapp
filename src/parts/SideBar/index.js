import MenuEmpty from "../../components/MenuEmpty/index";
import MenuDashboard from "../../components/MenuDashboard/index";
import Menu from "../../components/Menu/index";



function SideBar() {
    return (

        <div className="fixed flex flex-col items-center top-0 left-0 bottom-0 w-20 min-h-screen bg-white z-10">
            <div className="mt-20">
                <Menu/>
                <MenuDashboard/>
                <MenuEmpty/>
                <MenuEmpty/>
                <MenuEmpty/>
            </div>

        </div>

    )
}

export default SideBar;