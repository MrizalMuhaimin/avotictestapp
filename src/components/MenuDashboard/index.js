import IconDashboar from '../../assets/icons/Dashboard_icon.svg'
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

function MenuDashboard(){
    const location = useLocation();

    return(
        <Link to='/'>
            <div className={` w-20 h-12 hover:bg-gray-3 flex justify-center items-center group ${(location.pathname==='/')? 'bg-gray-3 ':'bg-white '} `}>
            <div className={` group-hover:bg-white  rounded w-7 h-7 flex justify-center items-center ${(location.pathname==='/')? 'bg-white':'bg-gray-3'} `}>
                <img src={IconDashboar} alt=""  className="rounded w-5 h-5  "/>
            </div>
        </div>
        </Link>
        
    )  
}

export default MenuDashboard;