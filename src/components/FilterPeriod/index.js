import CalenderIcon from "../../assets/images/calendar.png"

function FilterPeriod(){
    return(
        <div className="flex bg-white shadow items-center p-3">
            <img className="w-5 h-5 mr-3" src={CalenderIcon} alt="ico period"></img>
            <p className="mr-5">Period</p>
            <p className="mr-1">11 September 2018</p>
            <p className="mr-1">-</p>
            <p className="mr-3">14 September 2018</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    )
}

export default FilterPeriod;