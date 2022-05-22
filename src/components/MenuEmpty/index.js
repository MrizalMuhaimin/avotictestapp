import IconDashboar from '../../assets/icons/Dashboard_icon.svg'

function MenuEmpty(){
    return(
        <div className=" w-20 h-12 hover:bg-gray-3 flex justify-center items-center group ">
            <div className=" group-hover:bg-white bg-gray-2 rounded w-7 h-7 flex justify-center items-center ">
                {/* <img src={IconDashboar} alt=""  className="rounded w-7 h-7 "/> */}
            </div>
        </div>
    )  
}

export default MenuEmpty;